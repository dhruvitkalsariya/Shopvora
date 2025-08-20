"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import HeroCarousel from "./hero/hero-carousel"
import CarouselController from "./hero/carousel-controller"
import CarouselIndicators from "./hero/carousel-indicators"
import CustomButton, { CarouselIndicatorButton } from "./hero/custom-button"
import { heroCarouselData } from "./hero/hero-carousel-data"
import { 
  Play, 
  Pause, 
  Settings, 
  Eye, 
  EyeOff, 
  Maximize, 
  Minimize,
  RotateCcw,
  Zap
} from "lucide-react"

export default function UserControllerWebpage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const [showProgress, setShowProgress] = useState(true)
  const [showIndicators, setShowIndicators] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [carouselHeight, setCarouselHeight] = useState("h-[600px]")
  const [autoPlayInterval, setAutoPlayInterval] = useState(5000)

  const totalSlides = heroCarouselData.length

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const resetCarousel = () => {
    setCurrentSlide(0)
    setIsAutoPlaying(true)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Carousel User Controller
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 mb-8"
          >
            Interactive carousel control panel with real-time customization
          </motion.p>
        </div>

        {/* Control Panel */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Settings className="w-6 h-6 mr-2" />
              Control Panel
            </h2>
            <div className="flex space-x-2">
              <CustomButton
                onClick={toggleFullscreen}
                variant="outline"
                size="sm"
                className="flex items-center"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </CustomButton>
              <CustomButton
                onClick={resetCarousel}
                variant="secondary"
                size="sm"
                className="flex items-center"
              >
                <RotateCcw className="w-4 h-4" />
              </CustomButton>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Auto Play Control */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Auto Play</label>
              <CustomButton
                onClick={toggleAutoPlay}
                variant={isAutoPlaying ? "primary" : "secondary"}
                size="md"
                className="w-full flex items-center justify-center"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </>
                )}
              </CustomButton>
            </div>

            {/* Controls Visibility */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Show Controls</label>
              <CustomButton
                onClick={() => setShowControls(!showControls)}
                variant={showControls ? "primary" : "secondary"}
                size="md"
                className="w-full flex items-center justify-center"
              >
                {showControls ? (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Visible
                  </>
                ) : (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Hidden
                  </>
                )}
              </CustomButton>
            </div>

            {/* Progress Bar */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Progress Bar</label>
              <CustomButton
                onClick={() => setShowProgress(!showProgress)}
                variant={showProgress ? "primary" : "secondary"}
                size="md"
                className="w-full flex items-center justify-center"
              >
                {showProgress ? (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Visible
                  </>
                ) : (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Hidden
                  </>
                )}
              </CustomButton>
            </div>

            {/* Indicators */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Indicators</label>
              <CustomButton
                onClick={() => setShowIndicators(!showIndicators)}
                variant={showIndicators ? "primary" : "secondary"}
                size="md"
                className="w-full flex items-center justify-center"
              >
                {showIndicators ? (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Visible
                  </>
                ) : (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Hidden
                  </>
                )}
              </CustomButton>
            </div>
          </div>

          {/* Advanced Controls */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Settings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Auto Play Interval: {autoPlayInterval}ms
                </label>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
                  value={autoPlayInterval}
                  onChange={(e) => setAutoPlayInterval(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Carousel Height
                </label>
                <select
                  value={carouselHeight}
                  onChange={(e) => setCarouselHeight(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A1454] focus:border-transparent"
                >
                  <option value="h-[400px]">Small (400px)</option>
                  <option value="h-[600px]">Medium (600px)</option>
                  <option value="h-[800px]">Large (800px)</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Display */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-[#2A1454] to-purple-600 text-white p-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Zap className="w-6 h-6 mr-2" />
              Interactive Carousel
            </h2>
            <p className="text-purple-100">
              Current slide: {currentSlide + 1} / {totalSlides}
            </p>
          </div>
          
          <div className={carouselHeight}>
            <HeroCarousel
              slides={heroCarouselData}
              height="h-full"
              autoPlayInterval={autoPlayInterval}
              showControls={showControls}
              showIndicators={showIndicators}
              showProgressBar={showProgress}
              showPlayPause={false}
              enableSwipe={true}
              onSlideChange={handleSlideChange}
            />
          </div>
        </motion.div>

        {/* Manual Controls */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Manual Controls
          </h2>
          
          <div className="flex flex-col items-center space-y-6">
            {/* Carousel Controller */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-3">Navigation Controls</p>
              <CarouselController
                onPrev={handlePrev}
                onNext={handleNext}
                size="lg"
              />
            </div>

            {/* Custom Indicators */}
            {showIndicators && (
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-3">Custom Indicators</p>
                <div className="flex space-x-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <CarouselIndicatorButton
                      key={index}
                      isActive={index === currentSlide}
                      onClick={() => handleSlideChange(index)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Standard Indicators */}
            {showIndicators && (
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-3">Standard Indicators</p>
                <CarouselIndicators
                  totalSlides={totalSlides}
                  currentSlide={currentSlide}
                  onSlideChange={handleSlideChange}
                  size="md"
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Status Display */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Status Information
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#2A1454]">{currentSlide + 1}</div>
              <div className="text-sm text-gray-600">Current Slide</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#2A1454]">{totalSlides}</div>
              <div className="text-sm text-gray-600">Total Slides</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#2A1454]">
                {isAutoPlaying ? "ON" : "OFF"}
              </div>
              <div className="text-sm text-gray-600">Auto Play</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 