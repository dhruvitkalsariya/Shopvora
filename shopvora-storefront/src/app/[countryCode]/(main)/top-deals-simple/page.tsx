"use client"

import TopDeals from "@modules/home/components/top-deals"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function TopDealsSimpleDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <LocalizedClientLink
              href="/"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </LocalizedClientLink>
            <h1 className="text-2xl font-bold text-gray-900">Top Deals Simple Demo</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        className="text-center py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Top Deals Component
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            A simplified and reliable Top Deals section with smooth animations and responsive design.
          </p>
        </div>
      </motion.div>

      {/* Top Deals Component */}
      <TopDeals />

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Component Features</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Responsive Design</h4>
              <p className="text-gray-300">Works perfectly on all screen sizes</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Smooth Animations</h4>
              <p className="text-gray-300">Framer Motion powered animations</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Image Fallbacks</h4>
              <p className="text-gray-300">Graceful handling of missing images</p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
} 