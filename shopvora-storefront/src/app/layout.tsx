import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import "styles/animations.css"
import { LanguageProvider } from "@lib/context/language-context"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

// Error boundary component to catch hydration errors
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  )
}

// Client-side only wrapper to prevent hydration issues
function ClientOnlyLanguageProvider({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Enhanced Browser Translation System
              window.shopvoraTranslation = {
                // Detect browser language
                detectBrowserLanguage: function() {
                  const browserLang = navigator.language || navigator.userLanguage;
                  const langCode = browserLang.split('-')[0].toLowerCase();
                  
                  // Map browser language to supported languages
                  const languageMap = {
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
                  };
                  
                  return languageMap[langCode] || 'en';
                },
                
                // Enable translation for a specific language
                enableTranslation: function(langCode, showNotification = false) {
                  console.log('Enabling translation for:', langCode);
                  
                  // Set document language
                  document.documentElement.lang = langCode;
                  document.documentElement.setAttribute('lang', langCode);
                
                  // Remove notranslate meta tag completely
                  const metaTag = document.querySelector('meta[name="google"]');
                  if (metaTag) {
                      metaTag.remove();
                  }
                
                  // Update content-language meta
                  let langMeta = document.querySelector('meta[http-equiv="content-language"]');
                  if (langMeta) {
                    langMeta.setAttribute('content', langCode);
                  } else {
                    langMeta = document.createElement('meta');
                    langMeta.setAttribute('http-equiv', 'content-language');
                    langMeta.setAttribute('content', langCode);
                    document.head.appendChild(langMeta);
                  }
                
                  // Add additional meta tags for better browser detection
                  const additionalMeta = document.createElement('meta');
                  additionalMeta.setAttribute('name', 'language');
                  additionalMeta.setAttribute('content', langCode);
                  document.head.appendChild(additionalMeta);
                  
                  // Store language preference
                  localStorage.setItem('shopvora-language', langCode);
                  
                  // Trigger browser translation for non-English languages
                  if (langCode !== 'en') {
                    // Method 1: Trigger language change event
                    window.dispatchEvent(new Event('languagechange'));
                
                    // Method 2: Change page title to trigger translation
                    setTimeout(() => {
                      const originalTitle = document.title;
                      document.title = 'Translation Trigger - ' + originalTitle;
                      setTimeout(() => {
                        document.title = originalTitle;
                      }, 100);
                    }, 200);
                    
                    // Method 3: Add temporary element with target language
                    setTimeout(() => {
                      const tempElement = document.createElement('div');
                      tempElement.style.position = 'absolute';
                      tempElement.style.left = '-9999px';
                      tempElement.style.visibility = 'hidden';
                      tempElement.lang = langCode;
                      tempElement.textContent = 'Translation trigger text';
                      document.body.appendChild(tempElement);
                      
                      setTimeout(() => {
                        tempElement.remove();
                      }, 500);
                    }, 300);
                    
                    // Method 4: Force page refresh simulation
                    setTimeout(() => {
                      const event = new PopStateEvent('popstate');
                      window.dispatchEvent(event);
                    }, 400);
                    
                    // Method 5: Try to trigger browser's translate API
                    if (typeof window.google !== 'undefined' && window.google.translate) {
                      try {
                        const translateElement = google.translate.TranslateElement.getInstance();
                        if (translateElement) {
                          translateElement.translatePage(langCode);
                          // Show Google Translate notification
                          if (typeof window.showGoogleTranslatePopup === 'function') {
                            window.showGoogleTranslatePopup(langCode);
                          }
                        }
                      } catch (e) {
                        console.log('Google Translate API not available');
                      }
                    }
                    
                    // Method 6: Show translation prompt to user
                    if (showNotification) {
                      this.showTranslationPrompt(langCode);
                    }
                  }
                  
                  console.log('Translation enabled for:', langCode);
                },
                
                // Show translation prompt to user
                showTranslationPrompt: function(langCode) {
                  const languageNames = {
                    en: "English",
                    hi: "Hindi", 
                    gu: "Gujarati",
                    mr: "Marathi",
                    ta: "Tamil",
                    te: "Telugu"
                  };
                  
                  const notification = document.createElement('div');
                  notification.style.cssText = \`
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
                  \`;
                  
                  notification.innerHTML = \`
                    <div style="font-weight: 600; margin-bottom: 8px;">Language Changed to \${languageNames[langCode]}</div>
                    <div style="margin-bottom: 8px;">If translation doesn't appear automatically:</div>
                    <div style="font-size: 12px;">
                      1. Right-click on the page<br>
                      2. Select "Translate to \${languageNames[langCode]}"<br>
                      3. Or use your browser's translate button
                    </div>
                  \`;
                  
                  // Add animation styles
                  const style = document.createElement('style');
                  style.textContent = \`
                    @keyframes slideIn {
                      from { transform: translateX(100%); opacity: 0; }
                      to { transform: translateX(0); opacity: 1; }
                    }
                  \`;
                  document.head.appendChild(style);
                  
                  document.body.appendChild(notification);
                  
                  // Remove notification after 5 seconds
                  setTimeout(() => {
                    notification.remove();
                    style.remove();
                  }, 5000);
                }
              };
              
              // Initialize translation system when page loads
              document.addEventListener('DOMContentLoaded', function() {
                // Check for saved Google Translate language
                const savedGoogleLang = localStorage.getItem('google-translate-lang');
                if (savedGoogleLang && savedGoogleLang !== 'en') {
                  setTimeout(() => {
                    if (typeof window !== 'undefined' && window.google && window.google.translate) {
                      try {
                        const translateElement = window.google.translate.TranslateElement.getInstance();
                        if (translateElement) {
                          translateElement.translatePage(savedGoogleLang);
                        }
                      } catch (e) {
                        console.log('Google Translate not ready yet');
                      }
                    }
                  }, 2000);
                }
                
                // Continuously hide Google Translate banners
                setInterval(() => {
                  const banners = document.querySelectorAll('.goog-te-banner-frame, .skiptranslate');
                  banners.forEach(banner => {
                    if (banner instanceof HTMLElement) {
                      banner.style.display = 'none';
                    }
                  });
                  
                  // Remove top margin that Google Translate adds
                  if (document.body.style.top !== '0px') {
                    document.body.style.top = '0px';
                    document.body.style.position = 'static';
                  }
                }, 1000);
              });
              
              // Expose the translation function globally
              window.enableBrowserTranslation = function(langCode, showNotification = false) {
                window.shopvoraTranslation.enableTranslation(langCode, showNotification);
              };
              
              // Global function to show language change popup
              window.showLanguageChangePopup = function(langCode) {
                const languageNames = {
                  en: "English",
                  hi: "Hindi", 
                  gu: "Gujarati",
                  mr: "Marathi",
                  ta: "Tamil",
                  te: "Telugu"
                };
                
                const notification = document.createElement('div');
                notification.style.cssText = \`
                  position: fixed;
                  top: 20px;
                  right: 20px;
                  background: #10b981;
                  color: white;
                  padding: 16px 20px;
                  border-radius: 8px;
                  z-index: 10000;
                  font-family: system-ui, sans-serif;
                  font-size: 14px;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                  animation: slideIn 0.3s ease-out;
                  max-width: 350px;
                  line-height: 1.4;
                \`;
                
                notification.innerHTML = \`
                  <div style="font-weight: 600; margin-bottom: 8px;">Language Changed to \${languageNames[langCode]}</div>
                  <div style="margin-bottom: 8px;">If translation doesn't appear automatically:</div>
                  <div style="font-size: 12px;">
                    1. Right-click on the page<br>
                    2. Select "Translate to \${languageNames[langCode]}"<br>
                    3. Or use your browser's translate button
                  </div>
                \`;
                
                // Add animation styles
                const style = document.createElement('style');
                style.textContent = \`
                  @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                  }
                \`;
                document.head.appendChild(style);
                
                document.body.appendChild(notification);
                
                // Remove notification after 5 seconds
                setTimeout(() => {
                  notification.remove();
                  style.remove();
                }, 5000);
              };
            `,
          }}
        />
        <script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ErrorBoundary>
          <ClientOnlyLanguageProvider>
            <main className="relative min-h-screen">{props.children}</main>
          </ClientOnlyLanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
