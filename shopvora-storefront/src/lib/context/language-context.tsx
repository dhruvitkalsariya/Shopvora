"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, getLanguageCode } from '../translations'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  triggerBrowserTranslation: (language: Language, showNotification?: boolean) => void
  detectBrowserLanguage: () => Language
  isMounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

// Client-side only wrapper to prevent hydration issues
function ClientOnly({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Only run client-side code after component is mounted
    if (typeof window !== 'undefined') {
      // Load language preference from localStorage on mount
      const savedLanguage = localStorage.getItem('shopvora-language') as Language
      if (savedLanguage && ['en', 'hi', 'gu', 'mr', 'ta', 'te'].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
        // Use the enhanced browser translation function
        if ((window as any).shopvoraTranslation) {
          setTimeout(() => {
            (window as any).shopvoraTranslation.enableTranslation(savedLanguage, false)
          }, 500)
        }
      } else {
        // Auto-detect browser language if no saved preference
        const detectedLang = detectBrowserLanguage()
        if (detectedLang !== 'en') {
          setLanguageState(detectedLang)
          // Show language detection prompt
          setTimeout(() => {
            if ((window as any).shopvoraTranslation) {
              (window as any).shopvoraTranslation.showLanguageDetectionPrompt(detectedLang)
            }
          }, 2000)
        }
      }
    }
  }, [])

  const detectBrowserLanguage = (): Language => {
    if (typeof window === 'undefined') {
      return 'en'
    }
    
    if ((window as any).shopvoraTranslation) {
      return (window as any).shopvoraTranslation.detectBrowserLanguage()
    }
    
    // Fallback detection
    const browserLang = navigator.language || navigator.userLanguage
    const langCode = browserLang.split('-')[0].toLowerCase()
    
    // Map browser language to supported languages
    const languageMap: Record<string, Language> = {
      'hi': 'hi', // Hindi
      'gu': 'gu', // Gujarati
      'mr': 'mr', // Marathi
      'ta': 'ta', // Tamil
      'te': 'te', // Telugu
      'bn': 'hi', // Bengali -> Hindi
      'pa': 'hi', // Punjabi -> Hindi
      'ur': 'hi', // Urdu -> Hindi
      'kn': 'ta', // Kannada -> Tamil
      'ml': 'ta', // Malayalam -> Tamil
      'or': 'hi', // Odia -> Hindi
      'as': 'hi', // Assamese -> Hindi
      'ne': 'hi', // Nepali -> Hindi
      'si': 'hi', // Sinhala -> Hindi
      'my': 'hi', // Myanmar -> Hindi
      'th': 'hi', // Thai -> Hindi
      'vi': 'hi', // Vietnamese -> Hindi
      'id': 'hi', // Indonesian -> Hindi
      'ms': 'hi', // Malay -> Hindi
      'fil': 'hi', // Filipino -> Hindi
      'km': 'hi', // Khmer -> Hindi
      'lo': 'hi', // Lao -> Hindi
      'ja': 'hi', // Japanese -> Hindi
      'ko': 'hi', // Korean -> Hindi
      'zh': 'hi', // Chinese -> Hindi
      'ar': 'hi', // Arabic -> Hindi
      'fa': 'hi', // Persian -> Hindi
      'tr': 'hi', // Turkish -> Hindi
      'ru': 'hi', // Russian -> Hindi
      'de': 'hi', // German -> Hindi
      'fr': 'hi', // French -> Hindi
      'es': 'hi', // Spanish -> Hindi
      'pt': 'hi', // Portuguese -> Hindi
      'it': 'hi', // Italian -> Hindi
      'nl': 'hi', // Dutch -> Hindi
      'sv': 'hi', // Swedish -> Hindi
      'da': 'hi', // Danish -> Hindi
      'no': 'hi', // Norwegian -> Hindi
      'fi': 'hi', // Finnish -> Hindi
      'pl': 'hi', // Polish -> Hindi
      'cs': 'hi', // Czech -> Hindi
      'sk': 'hi', // Slovak -> Hindi
      'hu': 'hi', // Hungarian -> Hindi
      'ro': 'hi', // Romanian -> Hindi
      'bg': 'hi', // Bulgarian -> Hindi
      'hr': 'hi', // Croatian -> Hindi
      'sr': 'hi', // Serbian -> Hindi
      'sl': 'hi', // Slovenian -> Hindi
      'et': 'hi', // Estonian -> Hindi
      'lv': 'hi', // Latvian -> Hindi
      'lt': 'hi', // Lithuanian -> Hindi
      'mt': 'hi', // Maltese -> Hindi
      'ga': 'hi', // Irish -> Hindi
      'cy': 'hi', // Welsh -> Hindi
      'is': 'hi', // Icelandic -> Hindi
      'fo': 'hi', // Faroese -> Hindi
      'sq': 'hi', // Albanian -> Hindi
      'mk': 'hi', // Macedonian -> Hindi
      'bs': 'hi', // Bosnian -> Hindi
      'me': 'hi', // Montenegrin -> Hindi
      'ca': 'hi', // Catalan -> Hindi
      'eu': 'hi', // Basque -> Hindi
      'gl': 'hi', // Galician -> Hindi
      'ast': 'hi', // Asturian -> Hindi
      'an': 'hi', // Aragonese -> Hindi
      'oc': 'hi', // Occitan -> Hindi
      'co': 'hi', // Corsican -> Hindi
      'sc': 'hi', // Sardinian -> Hindi
      'fur': 'hi', // Friulian -> Hindi
      'lld': 'hi', // Ladin -> Hindi
      'rm': 'hi', // Romansh -> Hindi
      'vec': 'hi', // Venetian -> Hindi
      'lmo': 'hi', // Lombard -> Hindi
      'pms': 'hi', // Piedmontese -> Hindi
      'lij': 'hi', // Ligurian -> Hindi
      'eml': 'hi', // Emiliano-Romagnolo -> Hindi
      'nap': 'hi', // Neapolitan -> Hindi
      'scn': 'hi', // Sicilian -> Hindi
      'it-it': 'hi', // Italian (Italy) -> Hindi
      'it-ch': 'hi', // Italian (Switzerland) -> Hindi
      'de-de': 'hi', // German (Germany) -> Hindi
      'de-at': 'hi', // German (Austria) -> Hindi
      'de-ch': 'hi', // German (Switzerland) -> Hindi
      'de-li': 'hi', // German (Liechtenstein) -> Hindi
      'de-lu': 'hi', // German (Luxembourg) -> Hindi
      'fr-fr': 'hi', // French (France) -> Hindi
      'fr-be': 'hi', // French (Belgium) -> Hindi
      'fr-ca': 'hi', // French (Canada) -> Hindi
      'fr-ch': 'hi', // French (Switzerland) -> Hindi
      'fr-lu': 'hi', // French (Luxembourg) -> Hindi
      'fr-mc': 'hi', // French (Monaco) -> Hindi
      'es-es': 'hi', // Spanish (Spain) -> Hindi
      'es-mx': 'hi', // Spanish (Mexico) -> Hindi
      'es-gt': 'hi', // Spanish (Guatemala) -> Hindi
      'es-cr': 'hi', // Spanish (Costa Rica) -> Hindi
      'es-pa': 'hi', // Spanish (Panama) -> Hindi
      'es-do': 'hi', // Spanish (Dominican Republic) -> Hindi
      'es-ve': 'hi', // Spanish (Venezuela) -> Hindi
      'es-co': 'hi', // Spanish (Colombia) -> Hindi
      'es-pe': 'hi', // Spanish (Peru) -> Hindi
      'es-ar': 'hi', // Spanish (Argentina) -> Hindi
      'es-cl': 'hi', // Spanish (Chile) -> Hindi
      'es-ec': 'hi', // Spanish (Ecuador) -> Hindi
      'es-br': 'hi', // Spanish (Brazil) -> Hindi
      'es-py': 'hi', // Spanish (Paraguay) -> Hindi
      'es-uy': 'hi', // Spanish (Uruguay) -> Hindi
      'es-bo': 'hi', // Spanish (Bolivia) -> Hindi
      'es-hn': 'hi', // Spanish (Honduras) -> Hindi
      'es-sv': 'hi', // Spanish (El Salvador) -> Hindi
      'es-ni': 'hi', // Spanish (Nicaragua) -> Hindi
      'es-pr': 'hi', // Spanish (Puerto Rico) -> Hindi
      'es-cu': 'hi', // Spanish (Cuba) -> Hindi
      'es-gq': 'hi', // Spanish (Equatorial Guinea) -> Hindi
      'pt-pt': 'hi', // Portuguese (Portugal) -> Hindi
      'pt-br': 'hi', // Portuguese (Brazil) -> Hindi
      'pt-ao': 'hi', // Portuguese (Angola) -> Hindi
      'pt-mz': 'hi', // Portuguese (Mozambique) -> Hindi
      'pt-cv': 'hi', // Portuguese (Cape Verde) -> Hindi
      'pt-gw': 'hi', // Portuguese (Guinea-Bissau) -> Hindi
      'pt-st': 'hi', // Portuguese (São Tomé and Príncipe) -> Hindi
      'pt-tl': 'hi', // Portuguese (East Timor) -> Hindi
      'pt-mo': 'hi', // Portuguese (Macau) -> Hindi
      'en': 'en' // English stays English
    }
    
    return languageMap[langCode] || 'en'
  }

  const triggerBrowserTranslation = (newLanguage: Language, showNotification = false) => {
    if (typeof window === 'undefined') return
    
    // Store language preference
    localStorage.setItem('shopvora-language', newLanguage)
    
    // Update document language
    document.documentElement.lang = newLanguage
    document.documentElement.setAttribute('lang', newLanguage)
    
    // Trigger browser translation for non-English languages
    if (newLanguage !== 'en' && (window as any).shopvoraTranslation) {
      setTimeout(() => {
        (window as any).shopvoraTranslation.enableTranslation(newLanguage, showNotification)
      }, 5000)
    }
  }

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    triggerBrowserTranslation(newLanguage, true) // Show notification when user manually changes
  }

  return (
    <ClientOnly>
      <LanguageContext.Provider value={{ language, setLanguage, triggerBrowserTranslation, detectBrowserLanguage, isMounted }}>
        {children}
      </LanguageContext.Provider>
    </ClientOnly>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 