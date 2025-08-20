"use client"

import { useState } from "react"
import CarouselController from "./hero/carousel-controller"

export default function CarouselControllerDemo() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Carousel Controller Demo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Showcasing the new carousel controller component with white background and #2A1454 colored icons
          </p>
        </div>

        {/* Demo Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Current Slide: {currentSlide + 1} / {totalSlides}
          </h2>
          
          {/* Slide Display */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-12 mb-8 text-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">Slide {currentSlide + 1}</h3>
              <p className="text-xl opacity-90">
                This is a demo slide showing the carousel functionality
              </p>
            </div>
          </div>

          {/* Carousel Controllers - Different Sizes */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Small Size</h3>
              <div className="flex justify-center">
                <CarouselController
                  onPrev={handlePrev}
                  onNext={handleNext}
                  size="sm"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Medium Size (Default)</h3>
              <div className="flex justify-center">
                <CarouselController
                  onPrev={handlePrev}
                  onNext={handleNext}
                  size="md"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Large Size</h3>
              <div className="flex justify-center">
                <CarouselController
                  onPrev={handlePrev}
                  onNext={handleNext}
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Design Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                White circular background
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                #2A1454 colored icons
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Hover effects with shadow
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Smooth transitions
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Usage</h3>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <code>
                {`<CarouselController
  onPrev={handlePrev}
  onNext={handleNext}
  size="md"
/>`}
              </code>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Color Palette</h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-2 shadow-lg"
                style={{ backgroundColor: '#FFFFFF' }}
              ></div>
              <p className="text-sm font-medium text-gray-700">Background</p>
              <p className="text-xs text-gray-500">#FFFFFF</p>
            </div>
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-2 shadow-lg"
                style={{ backgroundColor: '#2A1454' }}
              ></div>
              <p className="text-sm font-medium text-gray-700">Icon Color</p>
              <p className="text-xs text-gray-500">#2A1454</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 