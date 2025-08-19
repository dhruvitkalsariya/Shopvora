"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, X, Facebook, Linkedin, Youtube, Globe } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useLanguage } from "@lib/context/language-context"
import { getLanguageCode, getLanguageName } from "@lib/translations"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage } = useLanguage()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowLanguageDropdown(false)
      }
    }

    if (showLanguageDropdown) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [showLanguageDropdown])

  const footerLinks = {
    customerService: [
      { name: "Help Centre", href: "/help" },
      { name: "How To Buy", href: "/how-to-buy" },
      { name: "Payment", href: "/payment" },
      { name: "Shipping", href: "/shipping" },
      { name: "Return & Refund", href: "/returns" },
      { name: "Warranty Policy", href: "/warranty" }
    ],
    about: [
      { name: "Contact Us", href: "/contact" },
      { name: "About Us", href: "/about" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Seller Centre", href: "/seller" }
    ],
    quickLinks: [
      { name: "Shop: Men", href: "/shop/men" },
      { name: "Shop: Women", href: "/shop/women" },
      { name: "Shop: Kids", href: "/shop/kids" },
      { name: "Shop: Beauty, Toys & More", href: "/shop/beauty-toys" },
      { name: "Shop: Electronics", href: "/shop/electronics" },
      { name: "Shop: Home & Furniture", href: "/shop/home-furniture" }
    ]
  }

  const paymentMethods = [
    { name: "VISA", image: "/images/payment/Visa.svg" },
    { name: "Mastercard", image: "/images/payment/Mastercard.svg" },
    { name: "AMEX", image: "/images/payment/Amex.svg" },
    { name: "PayPal", image: "/images/payment/Paypal.svg" }
  ]

  const socialLinks = [
    { name: "X (Twitter)", icon: X, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ]

  const languages = [
    "English",
    "Hindi",
    "Gujarati",
    "Marathi",
    "Tamil",
    "Telugu"
  ]

  const handleLanguageChange = (languageName: string) => {
    const langCode = getLanguageCode(languageName)
    
    // Use global browser translation function with notification
    if (typeof window !== 'undefined' && (window as any).enableBrowserTranslation) {
      (window as any).enableBrowserTranslation(langCode, true) // Show notification
    }
    
    setLanguage(langCode)
    setShowLanguageDropdown(false)
  }

  // Get current language name for display
  const currentLanguageName = getLanguageName(language)

  return (
    <footer className="bg-gray-100">
      {/* Logo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200">
        <div className="flex justify-center">
          <img 
            src="/images/logo/Logo.svg" 
            alt="Shopvora Logo"
            className="h-12 w-auto"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div className="group">
            <h4 className="text-lg font-bold text-purple-600 mb-6 transition-colors duration-300">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {footerLinks.customerService.map((link) => (
                <li key={link.name}>
                  <LocalizedClientLink
                    href={link.href}
                    className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm relative group/link"
                  >
                    <span className="relative">
                    {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="group">
            <h4 className="text-lg font-bold text-purple-600 mb-6 transition-colors duration-300">
              About
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <LocalizedClientLink
                    href={link.href}
                    className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm relative group/link"
                  >
                    <span className="relative">
                    {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h4 className="text-lg font-bold text-purple-600 mb-6 transition-colors duration-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <LocalizedClientLink
                    href={link.href}
                    className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm relative group/link"
                  >
                    <span className="relative">
                    {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
        </div>

          {/* Payment */}
          <div className="group">
            <h4 className="text-lg font-bold text-purple-600 mb-6 transition-colors duration-300">
              Payment
            </h4>
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-white px-4 py-2 rounded-lg flex items-center justify-center min-w-[70px] h-10 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200"
                >
                  <img 
                    src={method.image} 
                    alt={method.name}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-purple-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                type="button"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-2 px-4 py-3 bg-white border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm hover:shadow-md"
                aria-expanded={showLanguageDropdown}
                aria-haspopup="listbox"
              >
                <Globe className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">
                  {currentLanguageName}
                </span>
                <ChevronDown 
                  className={`h-4 w-4 text-purple-600 transition-transform duration-300 ${
                    showLanguageDropdown ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {showLanguageDropdown && (
                <div 
                  className="absolute bottom-full left-0 mb-2 bg-white border-2 border-purple-200 rounded-lg shadow-xl z-50 min-w-[160px] max-h-64 overflow-y-auto"
                  role="listbox"
                >
                  <div className="p-2 border-b border-purple-100">
                    <p className="text-xs text-purple-600 font-medium">Select Language</p>
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => handleLanguageChange(lang)}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                        lang === currentLanguageName 
                          ? 'bg-purple-50 text-purple-700 font-medium' 
                          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                      }`}
                      role="option"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-600 text-center">
              © {currentYear} shopvora.com • All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-white rounded-full border-2 border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
