// src/utilities/autoTranslate.ts

// Map Payload locale codes to standard target language codes
const localeMap: Record<string, string> = {
  de: 'de',
  en: 'en',
  hu: 'hu',
  fr: 'fr',
  es: 'es',
  it: 'it',
  nl: 'nl',
  pl: 'pl',
}

export async function translateText(text: string, targetLang: string): Promise<string> {
  if (!text) return text

  const mappedLang = localeMap[targetLang.toLowerCase()]
  if (!mappedLang || mappedLang === 'de') return text

  try {
    // 1. Primary: Use free open-source LibreTranslate mirror
    const response = await fetch('https://translate.argosopentech.com/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: 'de',
        target: mappedLang,
        format: 'text',
      }),
    })

    if (response.ok) {
      const data = await response.json()
      if (data?.translatedText) {
        return data.translatedText
      }
    }
  } catch (err) {
    console.warn(
      `Primary open-source translate endpoint failed for ${targetLang}, trying fallback...`,
    )
  }

  // 2. Fallback: Free Hugging Face Open-Source OPUS-MT Model
  try {
    const fallbackResponse = await fetch(
      `https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-de-${mappedLang}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputs: text }),
      },
    )

    if (fallbackResponse.ok) {
      const fallbackData = await fallbackResponse.json()
      if (Array.isArray(fallbackData) && fallbackData[0]?.translation_text) {
        return fallbackData[0].translation_text
      }
    }
  } catch (fallbackErr) {
    console.error(`Fallback translation failed for ${targetLang}:`, fallbackErr)
  }

  return text
}
