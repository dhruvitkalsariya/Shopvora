"use client"

import { useState } from "react"
import EnhancedCarousel from "./promotional-carousel/enhanced-carousel"
import HeroCarousel from "./hero/hero-carousel"
import { promotionalCarouselData } from "./promotional-carousel/carousel-data"
import { heroCarouselData } from "./hero/hero-carousel-data"

export default function CarouselDemo() {
  const [activeTab, setActiveTab] = useState<'enhanced' | 'hero'>('hero')

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Carousel Components Demo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Compare the different carousel components available in your project
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('hero')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'hero'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Hero Carousel (New)
            </button>
            <button
              onClick={() => setActiveTab('enhanced')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'enhanced'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Enhanced Carousel (Current)
            </button>
          </div>
        </div>

        {/* Carousel Display */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {activeTab === 'hero' ? (
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                <h2 className="text-2xl font-bold">Hero Carousel</h2>
                <p className="text-blue-100">
                  Click on images to navigate to different pages
                </p>
              </div>
              <div className="h-[600px]">
                <HeroCarousel
                  slides={heroCarouselData}
                  height="h-full"
                  autoPlayInterval={5000}
                  showControls={true}
                  showIndicators={true}
                  showProgressBar={true}
                  showPlayPause={true}
                  enableSwipe={true}
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
                <h2 className="text-2xl font-bold">Enhanced Carousel</h2>
                <p className="text-purple-100">
                  Current promotional carousel with animated backgrounds
                </p>
              </div>
              <div className="h-[600px]">
                <EnhancedCarousel
                  slides={promotionalCarouselData}
                  height="h-full"
                  autoPlayInterval={5000}
                  showControls={true}
                  showIndicators={true}
                  showProgressBar={true}
                  showPlayPause={true}
                  enableSwipe={true}
                />
              </div>
            </div>
          )}
        </div>

        {/* Feature Comparison */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hero Carousel Features
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Click on images to navigate to pages
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                High-quality background images
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Category badges and labels
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Hover effects and animations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Responsive design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                External link indicators
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enhanced Carousel Features
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Animated background elements
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Gradient color schemes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Confetti and particle effects
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Text shadows and glow effects
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                CTA button navigation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Seasonal theme support
              </li>
            </ul>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            How to Use
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Hero Carousel (Recommended for Home Page)
              </h4>
              <p className="text-gray-600 mb-3">
                Perfect for showcasing different product categories with beautiful images and direct navigation.
              </p>
              <code className="bg-gray-100 px-3 py-1 rounded text-sm">
                import HeroSection from "@modules/home/components/hero"
              </code>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Enhanced Carousel (Current)
              </h4>
              <p className="text-gray-600 mb-3">
                Great for promotional content with animated backgrounds and seasonal themes.
              </p>
              <code className="bg-gray-100 px-3 py-1 rounded text-sm">
                import PromotionalCarousel from "@modules/home/components/promotional-carousel"
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 