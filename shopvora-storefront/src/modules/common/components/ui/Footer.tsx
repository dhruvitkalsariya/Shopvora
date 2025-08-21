"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Facebook, Linkedin, Youtube, Globe, X as XIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useLanguage } from "@lib/context/language-context"
import { getLanguageCode, getLanguageName } from "@lib/translations"

interface FooterProps {
  className?: string
  showLogo?: boolean
  showLinks?: boolean
  showSocial?: boolean
  showPayment?: boolean
  showLanguage?: boolean
  links?: {
    customerService?: Array<{ name: string; href: string }>
    about?: Array<{ name: string; href: string }>
    quickLinks?: Array<{ name: string; href: string }>
  }
  socialLinks?: Array<{ name: string; icon: any; href: string }>
  paymentMethods?: Array<{ name: string; image: string }>
  languages?: string[]
  logo?: {
    src: string
    alt: string
    className?: string
  }
  onLanguageChange?: (language: string) => void
  "data-testid"?: string
}

const Footer = ({
  className = "",
  showLogo = true,
  showLinks = true,
  showSocial = true,
  showPayment = true,
  showLanguage = true,
  links = {},
  socialLinks = [],
  paymentMethods = [],
  languages = [],
  logo = {
    src: "/images/logo/Logo.svg",
    alt: "Shopvora Logo",
    className: "h-12 w-auto"
  },
  onLanguageChange,
  "data-testid": dataTestId,
}: FooterProps) => {
  const currentYear = new Date().getFullYear()
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage } = useLanguage()

  // Default links if not provided
  const defaultLinks = {
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

  // Default social links if not provided
  const defaultSocialLinks = [
    { name: "X (Twitter)", icon: XIcon, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ]

  // Default payment methods if not provided
  const defaultPaymentMethods = [
    { name: "VISA", image: "/images/payment/Visa.svg" },
    { name: "Mastercard", image: "/images/payment/Mastercard.svg" },
    { name: "AMEX", image: "/images/payment/Amex.svg" },
    { name: "PayPal", image: "/images/payment/Paypal.svg" }
  ]

  // Default languages if not provided
  const defaultLanguages = [
    "English",
    "Hindi",
    "Gujarati",
    "Marathi",
    "Tamil",
    "Telugu"
  ]

  // Use provided props or defaults
  const footerLinks = {
    customerService: links.customerService || defaultLinks.customerService,
    about: links.about || defaultLinks.about,
    quickLinks: links.quickLinks || defaultLinks.quickLinks
  }

  const finalSocialLinks = socialLinks.length > 0 ? socialLinks : defaultSocialLinks
  const finalPaymentMethods = paymentMethods.length > 0 ? paymentMethods : defaultPaymentMethods
  const finalLanguages = languages.length > 0 ? languages : defaultLanguages

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

  const handleLanguageChange = (languageName: string) => {
    const langCode = getLanguageCode(languageName)
    
    // Use global browser translation function with notification
    if (typeof window !== 'undefined' && (window as any).enableBrowserTranslation) {
      (window as any).enableBrowserTranslation(langCode, true)
    }
    
    setLanguage(langCode)
    if (onLanguageChange) {
      onLanguageChange(langCode)
    }
    setShowLanguageDropdown(false)
  }

  // Get current language name for display
  const currentLanguageName = getLanguageName(language)

  return (
    <footer className={`bg-gray-100 ${className}`} data-testid={dataTestId}>
      {/* Logo Section */}
      {showLogo && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200">
          <div className="flex justify-center">
            <img 
              src={logo.src} 
              alt={logo.alt}
              className={logo.className}
            />
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      {showLinks && (
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

            {/* Language & Social */}
            <div className="space-y-6">
              {/* Language Selector */}
              {showLanguage && (
                <div className="relative" ref={languageDropdownRef}>
                  <h4 className="text-lg font-bold text-purple-600 mb-4">
                    Language
                  </h4>
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      {currentLanguageName}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showLanguageDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50"
                      >
                        {finalLanguages.map((lang) => (
                          <button
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {lang}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Social Links */}
              {showSocial && (
                <div>
                  <h4 className="text-lg font-bold text-purple-600 mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    {finalSocialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods */}
      {showPayment && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">We accept:</span>
              <div className="flex space-x-2">
                {finalPaymentMethods.map((method) => (
                  <img
                    key={method.name}
                    src={method.image}
                    alt={method.name}
                    className="h-8 w-auto"
                  />
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              © {currentYear} Shopvora. All rights reserved.
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer 