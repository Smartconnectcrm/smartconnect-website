import { deflateSync } from 'node:zlib'
import { Buffer } from 'node:buffer'

interface ProposalGenerationInput {
  tenderName: string
  pdfBytes: Buffer
  tenderUrl: string
  documentId?: string
  req?: any
}

interface ProposalGenerationResult {
  preflightScore: number
  auditReport: string
  docxBuffer: Buffer
  success: boolean
}

const extractTextFromPdf = (pdfBytes: Buffer): string => {
  const raw = pdfBytes.toString('utf8')
  // Clean readable ASCII/UTF-8 character sequences from PDF stream
  const cleanText = raw
    .replace(/[^\x20-\x7E\xA0-\xFF\n\r]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (cleanText.length < 50) {
    return `Tender Document Text (Raw File Length: ${pdfBytes.length} bytes)`
  }
  return cleanText
}

const buildOllamaPrompt = (title: string, extractedText: string) => {
  const tenderSummary = extractedText.slice(0, 10000)
  return `Analyze the following tender and return ONLY valid JSON with this exact structure:
{
  "preflightScore": 85,
  "auditReport": "SUMMARY: Tender compliance check completed.\\n\\nTECHNICAL CONCEPT: High feasibility.\\n\\nEIGNUNGSLEIHE: Applicable under § 47 VgV.\\n\\nSECURITY: DSGVO compliant."
}

Tender Title: ${title}
Tender Content: ${tenderSummary}

Return ONLY valid JSON. No markdown backticks, no markdown code blocks, no regular prose.`
}

const parseJsonSafe = (value: string): any => {
  try {
    return JSON.parse(value)
  } catch {
    const jsonStart = value.indexOf('{')
    const jsonEnd = value.lastIndexOf('}')
    if (jsonStart >= 0 && jsonEnd > jsonStart) {
      try {
        return JSON.parse(value.slice(jsonStart, jsonEnd + 1))
      } catch {
        return null
      }
    }
    return null
  }
}

const callLocalOllama = async (prompt: string): Promise<string> => {
  const ollamaUrl = 'http://localhost:11434/api/generate'
  console.log('[OllamaLocalEngine] Calling local Llama 3.2 on http://localhost:11434...')

  const response = await fetch(ollamaUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3.2:latest',
      prompt: prompt,
      format: 'json',
      stream: false,
      temperature: 0.2,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    console.error(`[OllamaLocalEngine] Request failed ${response.status}: ${body}`)
    throw new Error(`Local Ollama request failed ${response.status}: ${body}`)
  }

  const data = await response.json()
  console.log('[OllamaLocalEngine] Successfully received response from Ollama')
  return typeof data.response === 'string' ? data.response : String(data.response)
}

const normalizeText = (text: string) => text.replace(/\r\n/g, '\n').trim()

const escapeXml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const createDocxXmlParagraphs = (text: string): string => {
  return text
    .split('\n')
    .filter(Boolean)
    .map((line) => `<w:p><w:r><w:t>${escapeXml(line)}</w:t></w:r></w:p>`)
    .join('')
}

const buildDocxBuffer = (title: string, sections: Record<string, string>): Buffer => {
  const contentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p><w:r><w:t>${escapeXml(title)}</w:t></w:r></w:p>
    ${Object.entries(sections)
      .map(
        ([heading, body]) =>
          `<w:p><w:r><w:t>${escapeXml(heading)}</w:t></w:r></w:p>${createDocxXmlParagraphs(normalizeText(body))}`,
      )
      .join('')}
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>
    </w:sectPr>
  </w:body>
</w:document>`

  const contentTypesXml = `<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`

  const relsXml = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`

  return buildZipArchive([
    { name: '[Content_Types].xml', content: contentTypesXml },
    { name: '_rels/.rels', content: relsXml },
    { name: 'word/document.xml', content: contentXml },
  ])
}

const createZipEntry = (name: string, content: string) => {
  const data = Buffer.from(content, 'utf8')
  const compressed = deflateSync(data)
  const crc = crc32(data)
  const nameBuffer = Buffer.from(name, 'utf8')
  const localHeader = Buffer.alloc(30)
  localHeader.writeUInt32LE(0x04034b50, 0)
  localHeader.writeUInt16LE(20, 4)
  localHeader.writeUInt16LE(0, 6)
  localHeader.writeUInt16LE(8, 8)
  localHeader.writeUInt16LE(0, 10)
  localHeader.writeUInt16LE(0, 12)
  localHeader.writeUInt32LE(crc, 14)
  localHeader.writeUInt32LE(compressed.length, 18)
  localHeader.writeUInt32LE(data.length, 22)
  localHeader.writeUInt16LE(nameBuffer.length, 26)
  localHeader.writeUInt16LE(0, 28)

  const centralHeader = Buffer.alloc(46)
  centralHeader.writeUInt32LE(0x02014b50, 0)
  centralHeader.writeUInt16LE(20, 4)
  centralHeader.writeUInt16LE(20, 6)
  centralHeader.writeUInt16LE(0, 8)
  centralHeader.writeUInt16LE(8, 10)
  centralHeader.writeUInt16LE(0, 12)
  centralHeader.writeUInt16LE(0, 14)
  centralHeader.writeUInt32LE(crc, 16)
  centralHeader.writeUInt32LE(compressed.length, 20)
  centralHeader.writeUInt32LE(data.length, 24)
  centralHeader.writeUInt16LE(nameBuffer.length, 28)
  centralHeader.writeUInt16LE(0, 30)
  centralHeader.writeUInt16LE(0, 32)
  centralHeader.writeUInt16LE(0, 34)
  centralHeader.writeUInt16LE(0, 36)
  centralHeader.writeUInt32LE(0, 38)

  return {
    nameBuffer,
    localHeader,
    centralHeader,
    compressed,
    uncompressedSize: data.length,
  }
}

const buildZipArchive = (entries: Array<{ name: string; content: string }>): Buffer => {
  const fileBuffers: Buffer[] = []
  const centralBuffers: Buffer[] = []
  let offset = 0

  for (const entry of entries) {
    const { nameBuffer, localHeader, centralHeader, compressed } = createZipEntry(
      entry.name,
      entry.content,
    )
    localHeader.writeUInt16LE(nameBuffer.length, 26)
    centralHeader.writeUInt16LE(nameBuffer.length, 28)
    centralHeader.writeUInt32LE(offset, 42)

    fileBuffers.push(localHeader, nameBuffer, compressed)
    centralBuffers.push(centralHeader, nameBuffer)
    offset += localHeader.length + nameBuffer.length + compressed.length
  }

  const centralDirectory = Buffer.concat(centralBuffers)
  const endRecord = Buffer.alloc(22)
  endRecord.writeUInt32LE(0x06054b50, 0)
  endRecord.writeUInt16LE(0, 4)
  endRecord.writeUInt16LE(0, 6)
  endRecord.writeUInt16LE(entries.length, 8)
  endRecord.writeUInt16LE(entries.length, 10)
  endRecord.writeUInt32LE(centralDirectory.length, 12)
  endRecord.writeUInt32LE(offset, 16)
  endRecord.writeUInt16LE(0, 20)

  return Buffer.concat([...fileBuffers, centralDirectory, endRecord])
}

const crc32Table = (() => {
  const table = new Uint32Array(256)
  for (let i = 0; i < 256; i += 1) {
    let c = i
    for (let j = 0; j < 8; j += 1) {
      c = (c & 1) !== 0 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    }
    table[i] = c >>> 0
  }
  return table
})()

const crc32 = (buffer: Buffer): number => {
  let crc = 0xffffffff
  for (const byte of buffer) {
    crc = (crc >>> 8) ^ crc32Table[(crc ^ byte) & 0xff]
  }
  return (crc ^ 0xffffffff) >>> 0
}

export async function generateProposalFromTender(
  input: ProposalGenerationInput,
): Promise<ProposalGenerationResult> {
  try {
    const extractedText = extractTextFromPdf(input.pdfBytes)
    console.log(`[ProposalEngine] Extracted ${extractedText.length} characters from PDF`)

    const prompt = buildOllamaPrompt(input.tenderName, extractedText)

    console.log('[ProposalEngine] Calling local Ollama...')
    const responseText = await callLocalOllama(prompt)
    const normalized = normalizeText(responseText)

    const parsed = parseJsonSafe(normalized) || {}
    const preflightScore = typeof parsed.preflightScore === 'number' ? parsed.preflightScore : 80
    const auditReport =
      typeof parsed.auditReport === 'string'
        ? parsed.auditReport
        : JSON.stringify(parsed.auditReport || normalized, null, 2)

    const proposalSections = {
      'Tender Proposal Overview': input.tenderName,
      'Audit Summary & Preflight Check': auditReport,
      'Full LLM Compliance Output': normalized,
    }

    const docxBuffer = buildDocxBuffer(input.tenderName, proposalSections)
    console.log('[ProposalEngine] Successfully generated DOCX file buffer')

    return {
      preflightScore,
      auditReport,
      docxBuffer,
      success: true,
    }
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err)
    console.error('[ProposalEngine] Fatal error:', errorMsg)

    return {
      preflightScore: 0,
      auditReport: `ERROR: ${errorMsg}`,
      docxBuffer: Buffer.alloc(0),
      success: false,
    }
  }
}
