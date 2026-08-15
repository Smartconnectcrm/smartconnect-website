import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'
import { generateProposalFromTender } from '../utilities/geminiProposalEngine'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const getUploadId = (uploadField: unknown): string | null => {
  if (!uploadField) return null
  if (typeof uploadField === 'string') return uploadField
  if (typeof uploadField === 'number') return String(uploadField)
  if (typeof uploadField === 'object' && uploadField !== null) {
    const maybeUpload = uploadField as { id?: string | number; value?: { id?: string | number } }
    const rawId = maybeUpload.id || maybeUpload.value?.id
    return rawId ? String(rawId) : null
  }
  return null
}

const resolveMediaUrl = (url: string, req: any): string => {
  try {
    const host = req?.headers?.host || process.env.PAYLOAD_PUBLIC_URL || 'localhost:3000'
    const proto = req?.headers?.['x-forwarded-proto'] || req?.protocol || 'http'
    const decodedUrl = decodeURIComponent(url)
    const fullUrl = decodedUrl.startsWith('http')
      ? decodedUrl
      : `${proto}://${host}${decodedUrl.startsWith('/') ? '' : '/'}${decodedUrl}`
    return encodeURI(fullUrl)
  } catch {
    return url
  }
}

const readMediaFileFromDisk = (mediaUrl: string): Buffer | null => {
  try {
    // 1. Decode percent-encoded spaces and special characters (%20 -> " ")
    let decodedUrl = decodeURIComponent(mediaUrl)

    // 2. Strip http(s) host if present so http://localhost:3000/api/media/... becomes /api/media/...
    if (decodedUrl.startsWith('http://') || decodedUrl.startsWith('https://')) {
      try {
        const parsed = new URL(decodedUrl)
        decodedUrl = parsed.pathname
      } catch {
        decodedUrl = decodedUrl.replace(/^https?:\/\/[^\/]+/, '')
      }
    }

    // 3. Extract paths and raw filename
    const relativePath = decodedUrl.startsWith('/') ? decodedUrl.substring(1) : decodedUrl
    const filenameOnly = relativePath.split('/').pop() || relativePath

    // 4. Test all standard local Payload CMS storage locations
    const possiblePaths = [
      resolve(process.cwd(), relativePath),
      resolve(process.cwd(), 'media', filenameOnly),
      resolve(process.cwd(), 'public', 'media', filenameOnly),
      resolve(process.cwd(), '.payloadcms', 'media', filenameOnly),
      resolve(process.cwd(), 'public', relativePath),
    ]

    for (const filePath of possiblePaths) {
      try {
        console.log(`[Proposals] Attempting to read file from disk: ${filePath}`)
        const fileBuffer = readFileSync(filePath)
        console.log(`[Proposals] SUCCESS: Read ${fileBuffer.length} bytes directly from disk!`)
        return fileBuffer
      } catch {
        continue
      }
    }

    console.warn(`[Proposals] Could not find media file on disk at ${mediaUrl}`)
    return null
  } catch (err) {
    console.error('[Proposals] Error reading media file from disk:', err)
    return null
  }
}

const proposalGenerationHook: CollectionBeforeChangeHook = async ({
  data,
  originalDoc,
  req,
  context,
}) => {
  // Prevent infinite hook re-entry loops
  if (context?.skipProposalHook) {
    return data
  }

  console.log('=== PROPOSAL BEFORECHANGE HOOK FIRING ===')

  const payload = req.payload
  const documentId =
    getUploadId((data as Record<string, unknown>).tenderDocument) ||
    getUploadId(originalDoc?.tenderDocument)

  console.log('=== EXECUTING PROPOSAL HOOK WITH DOC ID ===', documentId)

  if (!documentId) {
    console.log('[Proposals] No tender document found, skipping proposal generation')
    return data
  }

  console.log('[Proposals] Tender document found, forcing proposal engine to run...')

  try {
    const mediaRecord = await payload.findByID({
      collection: 'media',
      id: documentId,
      depth: 0,
    })

    if (!mediaRecord || typeof mediaRecord.url !== 'string') {
      throw new Error(`Media record not found or has no URL for ID: ${documentId}`)
    }

    // Step 1: Read directly from local disk
    let pdfBytes: Buffer | null = readMediaFileFromDisk(mediaRecord.url)

    // Step 2: Safe HTTP fallback if local disk read fails
    if (!pdfBytes) {
      console.log('[Proposals] Falling back to HTTP fetch for media...')
      const tenderUrl = resolveMediaUrl(mediaRecord.url, req)
      console.log(`[Proposals] Fetching from URL: ${tenderUrl}`)
      const tenderResponse = await fetch(tenderUrl)
      if (!tenderResponse.ok) {
        throw new Error(`Unable to download tender PDF from ${tenderUrl}: ${tenderResponse.status}`)
      }
      pdfBytes = Buffer.from(await tenderResponse.arrayBuffer())
      console.log(`[Proposals] Successfully fetched ${pdfBytes.length} bytes via HTTP`)
    }

    const tenderName = String(
      (data as Record<string, unknown>).tenderName || originalDoc?.tenderName || 'Proposal',
    )

    const result = await generateProposalFromTender({
      tenderName,
      pdfBytes,
      tenderUrl: mediaRecord.url,
      documentId,
      req,
    })

    if (!result.success) {
      const errorMsg = String(result.auditReport || 'Unknown error during proposal generation')
      console.error('[Proposals] Proposal generation failed:', errorMsg)
      data.status = 'draft'
      data.preflightScore = 0
      data.auditReport = { error: errorMsg }
      return data
    }

    // Step 3: Create DOCX Media Record safely without re-triggering hooks
    let generatedDocxId: string | null = null
    if (result.docxBuffer && result.docxBuffer.length > 0) {
      try {
        const sanitizedFilename = tenderName.replace(/[^a-zA-Z0-9_-]/g, '_')
        const generatedDocxFile = await payload.create({
          collection: 'media',
          data: {
            alt: `Generated proposal for ${tenderName}`,
          },
          file: {
            data: result.docxBuffer,
            name: `${sanitizedFilename}.docx`,
            mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            size: result.docxBuffer.length,
          },
          context: { skipProposalHook: true },
        })
        generatedDocxId = String(generatedDocxFile.id)
      } catch (docxErr) {
        console.error('[Proposals] Failed to create DOCX media record:', docxErr)
      }
    }

    // Step 4: Populate record fields
    data.status = 'ready'
    data.preflightScore = typeof result.preflightScore === 'number' ? result.preflightScore : 85
    data.auditReport = {
      summary:
        typeof result.auditReport === 'string'
          ? result.auditReport
          : JSON.stringify(result.auditReport),
      engine: 'ollama-local',
      timestamp: new Date().toISOString(),
    }
    if (generatedDocxId) {
      data.generatedDocx = generatedDocxId
    }

    console.log(`[Proposals] Successfully processed proposal with score: ${data.preflightScore}`)
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err)
    console.error('[Proposals Hook Error]', errorMessage)
    data.status = 'draft'
    data.preflightScore = 0
    data.auditReport = { error: errorMessage }
  }

  return data
}

export const Proposals: CollectionConfig = {
  slug: 'proposals',
  admin: {
    useAsTitle: 'tenderName',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [proposalGenerationHook],
  },
  fields: [
    {
      name: 'tenderName',
      type: 'text',
      required: true,
    },
    {
      name: 'tenderDocument',
      label: 'Tender Document',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Processing', value: 'processing' },
        { label: 'Ready', value: 'ready' },
      ],
      defaultValue: 'draft',
    },
    {
      name: 'preflightScore',
      type: 'number',
    },
    {
      name: 'auditReport',
      type: 'json',
    },
    {
      name: 'generatedDocx',
      label: 'Generated DOCX',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
