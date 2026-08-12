import { deflateSync } from 'node:zlib'
import type { Buffer } from 'node:buffer'

interface ProposalGenerationInput {
  tenderName: string
  pdfBytes: Buffer
  tenderUrl: string
}

interface ProposalGenerationResult {
  auditReport: Record<string, any>
  docxBuffer: Buffer
}

const base64UrlSafe = (buffer: Buffer) => buffer.toString('base64')

const extractTextFromPdf = (pdfBytes: Buffer): string => {
  const raw = pdfBytes.toString('latin1')
  const matches = [...raw.matchAll(/\(([^)\n]{5,}?)\)/g)]
  if (!matches.length) {
    return `PDF content could not be extracted as plain text. Original file length=${pdfBytes.length}`
  }
  const extracted = matches
    .map((match) => match[1].replace(/\\\(/g, '(').replace(/\\\)/g, ')'))
    .join(' ')
  return extracted.length
    ? extracted
    : `PDF content extraction yielded no readable text. File length=${pdfBytes.length}`
}

const buildGeminiPrompt = (title: string, extractedText: string) => {
  const tenderSummary = extractedText.slice(0, 12000)
  return `Tender Title: ${title}
Tender Source: ${tenderSummary}

Use the above tender details to:
1. Generate a concise technical concept summary for an automated proposal response.
2. Map the references to Henry Nwadiogor and Kornél Varga and explain how § 47 VgV Eignungsleihe applies.
3. Write a security and DSGVO compliance section for the proposal.
4. Produce a structured JSON preflight compliance audit report with a numeric preflightScore from 0 to 100, a list of compliance checks, compliance status, and a short summary.

Return the answer for each task clearly, and for the audit report return valid JSON only.
`
}

const parseJsonSafe = (value: string): unknown => {
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

const callGemini = async (prompt: string): Promise<string> => {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_API_TOKEN || ''
  if (!apiKey) {
    throw new Error('Missing GOOGLE_API_KEY or GOOGLE_API_TOKEN environment variable')
  }

  const authHeader = apiKey.trim().startsWith('Bearer ') ? apiKey.trim() : `Bearer ${apiKey.trim()}`

  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-pro:generateText',
    {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gemini-1.5-pro',
        prompt: {
          text: prompt,
        },
        temperature: 0.2,
        maxOutputTokens: 1200,
      }),
    },
  )

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Gemini API request failed ${response.status}: ${body}`)
  }

  const data = await response.json()
  const candidate =
    data?.candidates?.[0]?.output || data?.candidates?.[0]?.content || data?.output?.[0]?.content
  if (!candidate) {
    throw new Error(`Gemini API returned an unexpected response shape: ${JSON.stringify(data)}`)
  }

  return typeof candidate === 'string' ? candidate : String(candidate)
}

const normalizeText = (text: string) => text.replace(/\r\n/g, '\n').trim()

const createDocxXmlParagraphs = (text: string): string => {
  return text
    .split('\n')
    .filter(Boolean)
    .map((line) => `<w:p><w:r><w:t>${escapeXml(line)}</w:t></w:r></w:p>`)
    .join('')
}

const escapeXml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
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
  // relative offset filled later

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
  const extractedText = extractTextFromPdf(input.pdfBytes)
  const prompt = buildGeminiPrompt(input.tenderName, extractedText)

  const responseText = await callGemini(prompt)
  const normalized = normalizeText(responseText)

  const auditJsonCandidate = parseJsonSafe(normalized)
  const auditReport: Record<string, any> =
    typeof auditJsonCandidate === 'object' && auditJsonCandidate !== null
      ? { ...auditJsonCandidate, source: 'gemini' }
      : {
          preflightScore: 0,
          checks: [],
          summary: 'Unable to parse structured JSON from Gemini audit response.',
          rawResponse: normalized,
        }

  const proposalSections = {
    'Technical Concept': normalized,
    'Eignungsleihe § 47 VgV Mapping': normalized,
    'Security / DSGVO Compliance': normalized,
    'Audit Report': JSON.stringify(auditReport, null, 2),
  }

  const docxBuffer = buildDocxBuffer(input.tenderName, proposalSections)

  return {
    auditReport,
    docxBuffer,
  }
}
