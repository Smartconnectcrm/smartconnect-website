import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'
import { generateProposalFromTender } from '../utilities/geminiProposalEngine'

const getUploadId = (uploadField: unknown): string | null => {
  if (!uploadField) return null
  if (typeof uploadField === 'string') return uploadField
  if (typeof uploadField === 'object' && uploadField !== null) {
    const maybeUpload = uploadField as { id?: string; value?: { id?: string } }
    return maybeUpload.id || maybeUpload.value?.id || null
  }
  return null
}

const resolveMediaUrl = (url: string, req: any): string => {
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const host = req?.headers?.host || process.env.PAYLOAD_PUBLIC_URL || 'localhost:3000'
  const proto = req?.headers?.['x-forwarded-proto'] || req?.protocol || 'http'
  return `${proto}://${host}${url.startsWith('/') ? '' : '/'}${url}`
}

const proposalGenerationHook: CollectionBeforeChangeHook = async ({
  data,
  originalDoc,
  payload,
  req,
  operation,
}) => {
  // Only proceed when there's a tender document provided
  const incomingTenderId = getUploadId((data as any).tenderDocument)
  const originalTenderId = getUploadId(originalDoc?.tenderDocument)

  // If no tender document is provided, skip processing
  if (!incomingTenderId) return data

  // Only process if tender document is new or explicitly marked as draft for reprocessing
  const tenderDocumentChanged = incomingTenderId !== originalTenderId
  const incomingStatus = (data as any).status
  if (!tenderDocumentChanged && incomingStatus !== 'draft') return data

  try {
    const mediaRecord = await payload.findByID({
      collection: 'media',
      id: incomingTenderId,
      depth: 0,
    })
    if (!mediaRecord || typeof mediaRecord.url !== 'string') {
      throw new Error(`Media record not found or has no URL for ID: ${incomingTenderId}`)
    }

    const tenderUrl = resolveMediaUrl(mediaRecord.url, req)
    const tenderResponse = await fetch(tenderUrl)
    if (!tenderResponse.ok) {
      throw new Error(`Unable to download tender PDF from ${tenderUrl}: ${tenderResponse.status}`)
    }

    const pdfBytes = Buffer.from(await tenderResponse.arrayBuffer())
    const result = await generateProposalFromTender({
      tenderName: (data as any).tenderName,
      pdfBytes,
      tenderUrl,
    })

    const generatedDocxFile = await payload.create({
      collection: 'media',
      data: {
        alt: `Generated proposal for ${(data as any).tenderName}`,
      },
      file: {
        data: result.docxBuffer,
        name: `${((data as any).tenderName || 'proposal').replace(/[^a-zA-Z0-9_-]/g, '_')}.docx`,
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      },
    })

    // Directly mutate the data object before returning it
    data.status = 'ready'
    data.preflightScore =
      typeof result.auditReport?.preflightScore === 'number'
        ? result.auditReport.preflightScore
        : null
    data.auditReport = result.auditReport
    data.generatedDocx = generatedDocxFile?.id || null
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err)
    console.error('[Proposals Hook Error]', errorMessage, err)
    data.status = 'draft'
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
