"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, getLanguageCode } from '../translations'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  triggerBrowserTranslation: (language: Language, showNotification?: boolean) => void
  detectBrowserLanguage: () => Language
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load language preference from localStorage on mount
    const savedLanguage = localStorage.getItem('shopvora-language') as Language
    if (savedLanguage && ['en', 'hi', 'gu', 'mr', 'ta', 'te'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
      // Use the enhanced browser translation function
      if (typeof window !== 'undefined' && (window as any).shopvoraTranslation) {
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
          if (typeof window !== 'undefined' && (window as any).shopvoraTranslation) {
            (window as any).shopvoraTranslation.showLanguageDetectionPrompt(detectedLang)
          }
        }, 2000)
      }
    }
  }, [])

  const detectBrowserLanguage = (): Language => {
    if (typeof window !== 'undefined' && (window as any).shopvoraTranslation) {
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
      'en': 'en' // English stays English
    }
    
    return languageMap[langCode] || 'en'
  }

  const triggerBrowserTranslation = (newLanguage: Language, showNotification: boolean = true) => {
    // Use the enhanced browser translation function if available
    if (typeof window !== 'undefined' && (window as any).shopvoraTranslation) {
      (window as any).shopvoraTranslation.enableTranslation(newLanguage, showNotification)
    } else if (typeof window !== 'undefined' && (window as any).enableBrowserTranslation) {
      // Fallback to old function
      (window as any).enableBrowserTranslation(newLanguage, showNotification)
    } else {
      // Fallback implementation if global function is not available
      console.log('Translation function not available, using fallback')
      
      // Set the document language attribute to trigger browser translation
      document.documentElement.lang = newLanguage
      document.documentElement.setAttribute('lang', newLanguage)
      
      // Remove notranslate meta tag to allow translation
      let metaTag = document.querySelector('meta[name="google"]')
      if (metaTag) {
        metaTag.remove()
      }
      
      // Store the language preference
      localStorage.setItem('shopvora-language', newLanguage)
      
      // Trigger browser translation for non-English languages
      if (newLanguage !== 'en') {
        // Force browser to detect language change
        const event = new Event('languagechange')
        window.dispatchEvent(event)
        
        // Add a small delay to ensure browser picks up the change
        setTimeout(() => {
          // Try to trigger translation by changing page title temporarily
          const originalTitle = document.title
          document.title = `Translated - ${originalTitle}`
          setTimeout(() => {
            document.title = originalTitle
          }, 100)
          
          // Also try to trigger by changing a meta tag
          const langMeta = document.querySelector('meta[http-equiv="content-language"]')
          if (langMeta) {
            langMeta.setAttribute('content', newLanguage)
          } else {
            const newLangMeta = document.createElement('meta')
            newLangMeta.setAttribute('http-equiv', 'content-language')
            newLangMeta.setAttribute('content', newLanguage)
            document.head.appendChild(newLangMeta)
          }
        }, 200)
      }
      
      // Show notification only if requested (not on page load)
      if (showNotification) {
        const languageNames: Record<Language, string> = {
          en: "English",
          hi: "Hindi", 
          gu: "Gujarati",
          mr: "Marathi",
          ta: "Tamil",
          te: "Telugu"
        }
        
        // Create a temporary notification
        const notification = document.createElement('div')
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #10b981;
          color: white;
          padding: 16px 20px;
          border-radius: 8px;
          z-index: 9999;
          font-family: system-ui, sans-serif;
          font-size: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          animation: slideIn 0.3s ease-out;
          max-width: 350px;
          line-height: 1.4;
        `
        notification.innerHTML = `
          <div style="font-weight: 600; margin-bottom: 8px;">Language Changed to ${languageNames[newLanguage]}</div>
          <div style="margin-bottom: 8px;">If translation doesn't appear automatically:</div>
          <div style="font-size: 12px;">
            1. Right-click on the page<br>
            2. Select "Translate to ${languageNames[newLanguage]}"<br>
            3. Or use your browser's translate button
          </div>
        `
        
        // Add animation styles
        const style = document.createElement('style')
        style.textContent = `
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `
        document.head.appendChild(style)
        
        document.body.appendChild(notification)
        
        // Remove notification after 5 seconds
        setTimeout(() => {
          notification.remove()
          style.remove()
        }, 5000)
      }
    }
  }

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    triggerBrowserTranslation(newLanguage, true) // Show notification when user manually changes
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, triggerBrowserTranslation, detectBrowserLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 