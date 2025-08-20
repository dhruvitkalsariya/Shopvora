"use client"

import { useState } from "react"
import CarouselController from "./hero/carousel-controller"
import CarouselIndicators from "./hero/carousel-indicators"

export default function CarouselComponentsDemo() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Carousel Components Demo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Showcasing carousel controller and indicators with Figma design colors
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

          {/* Carousel Indicators */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Carousel Indicators</h3>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Small Size</p>
                <CarouselIndicators
                  totalSlides={totalSlides}
                  currentSlide={currentSlide}
                  onSlideChange={handleSlideChange}
                  size="sm"
                />
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Medium Size (Default)</p>
                <CarouselIndicators
                  totalSlides={totalSlides}
                  currentSlide={currentSlide}
                  onSlideChange={handleSlideChange}
                  size="md"
                />
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Large Size</p>
                <CarouselIndicators
                  totalSlides={totalSlides}
                  currentSlide={currentSlide}
                  onSlideChange={handleSlideChange}
                  size="lg"
                />
              </div>
            </div>
          </div>

          {/* Carousel Controllers */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Carousel Controllers</h3>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Small Size</p>
                <CarouselController
                  onPrev={handlePrev}
                  onNext={handleNext}
                  size="sm"
                />
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Medium Size (Default)</p>
                <CarouselController
                  onPrev={handlePrev}
                  onNext={handleNext}
                  size="md"
                />
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Large Size</p>
                <CarouselController
                  onPrev={handlePrev}
                  onNext={handleNext}
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Combined Demo */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Combined Demo - Like Real Carousel
          </h2>
          
          {/* Slide Display */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-12 mb-8 text-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">Slide {currentSlide + 1}</h3>
              <p className="text-xl opacity-90">
                This simulates a real carousel with both indicators and controls
              </p>
            </div>
          </div>

          {/* Indicators */}
          <div className="mb-6">
            <CarouselIndicators
              totalSlides={totalSlides}
              currentSlide={currentSlide}
              onSlideChange={handleSlideChange}
              size="md"
            />
          </div>

          {/* Controllers */}
          <div className="flex justify-center">
            <CarouselController
              onPrev={handlePrev}
              onNext={handleNext}
              size="md"
            />
          </div>
        </div>

        {/* Color Palette */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Design Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                White circular background for controllers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                #2A1454 colored icons for controllers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                #2A1454 active indicator dots
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                #FFFFFF inactive indicator dots
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Hover effects and smooth transitions
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Usage</h3>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-2">
              <div>
                <p className="text-gray-500">Controllers:</p>
                <code>{`<CarouselController
  onPrev={handlePrev}
  onNext={handleNext}
  size="md"
/>`}</code>
              </div>
              <div>
                <p className="text-gray-500">Indicators:</p>
                <code>{`<CarouselIndicators
  totalSlides={5}
  currentSlide={currentSlide}
  onSlideChange={handleSlideChange}
  size="md"
/>`}</code>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Figma Color Palette</h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-2 shadow-lg"
                style={{ backgroundColor: '#FFFFFF' }}
              ></div>
              <p className="text-sm font-medium text-gray-700">Controller Background</p>
              <p className="text-xs text-gray-500">#FFFFFF</p>
            </div>
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-2 shadow-lg"
                style={{ backgroundColor: '#2A1454' }}
              ></div>
              <p className="text-sm font-medium text-gray-700">Icon & Active Dot Color</p>
              <p className="text-xs text-gray-500">#2A1454</p>
            </div>
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-2 shadow-lg border-2 border-gray-200"
                style={{ backgroundColor: '#FFFFFF' }}
              ></div>
              <p className="text-sm font-medium text-gray-700">Inactive Dot Color</p>
              <p className="text-xs text-gray-500">#FFFFFF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 