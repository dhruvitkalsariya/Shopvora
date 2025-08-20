"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  EnhancedPlayPauseButton,
  EnhancedNavigationButton,
  EnhancedShopButton,
  EnhancedSlideIndicator,
  CarouselControlsContainer
} from "./enhanced-carousel-buttons"

export default function EnhancedButtonsDemo() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const handleGoToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleShopClick = () => {
    console.log("Shop button clicked!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Enhanced Carousel Buttons
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beautiful, animated carousel controls with modern design and smooth interactions
          </p>
        </motion.div>

        {/* Play/Pause Button Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Play/Pause Button</h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <EnhancedPlayPauseButton
                isPlaying={isPlaying}
                onClick={handlePlayPause}
                size="sm"
              />
              <p className="text-gray-300 mt-2">Small</p>
            </div>
            <div className="text-center">
              <EnhancedPlayPauseButton
                isPlaying={isPlaying}
                onClick={handlePlayPause}
                size="md"
              />
              <p className="text-gray-300 mt-2">Medium</p>
            </div>
            <div className="text-center">
              <EnhancedPlayPauseButton
                isPlaying={isPlaying}
                onClick={handlePlayPause}
                size="lg"
              />
              <p className="text-gray-300 mt-2">Large</p>
            </div>
          </div>
        </motion.section>

        {/* Navigation Buttons Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Navigation Buttons</h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <EnhancedNavigationButton
                direction="prev"
                onClick={handlePrevSlide}
                size="sm"
              />
              <p className="text-gray-300 mt-2">Small</p>
            </div>
            <div className="text-center">
              <EnhancedNavigationButton
                direction="prev"
                onClick={handlePrevSlide}
                size="md"
              />
              <p className="text-gray-300 mt-2">Medium</p>
            </div>
            <div className="text-center">
              <EnhancedNavigationButton
                direction="prev"
                onClick={handlePrevSlide}
                size="lg"
              />
              <p className="text-gray-300 mt-2">Large</p>
            </div>
            <div className="text-center">
              <EnhancedNavigationButton
                direction="next"
                onClick={handleNextSlide}
                size="md"
              />
              <p className="text-gray-300 mt-2">Next</p>
            </div>
          </div>
        </motion.section>

        {/* Shop Buttons Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Shop Buttons</h2>
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <EnhancedShopButton
                text="SHOP NOW"
                onClick={handleShopClick}
                size="md"
                variant="primary"
              />
              <p className="text-gray-300 mt-2">Primary</p>
            </div>
            <div className="text-center">
              <EnhancedShopButton
                text="EXPLORE"
                onClick={handleShopClick}
                size="md"
                variant="secondary"
              />
              <p className="text-gray-300 mt-2">Secondary</p>
            </div>
            <div className="text-center">
              <EnhancedShopButton
                text="LEARN MORE"
                onClick={handleShopClick}
                size="md"
                variant="outline"
              />
              <p className="text-gray-300 mt-2">Outline</p>
            </div>
          </div>
        </motion.section>

        {/* Slide Indicators Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Slide Indicators</h2>
          <div className="flex justify-center">
            <CarouselControlsContainer>
              {Array.from({ length: totalSlides }, (_, index) => (
                <EnhancedSlideIndicator
                  key={index}
                  isActive={index === currentSlide}
                  onClick={() => handleGoToSlide(index)}
                  index={index}
                />
              ))}
            </CarouselControlsContainer>
          </div>
          <p className="text-gray-300 text-center mt-4">
            Current slide: {currentSlide + 1} of {totalSlides}
          </p>
        </motion.section>

        {/* Combined Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Complete Carousel Controls</h2>
          <div className="flex flex-col items-center space-y-8">
            {/* Top controls */}
            <div className="flex items-center space-x-4">
              <EnhancedPlayPauseButton
                isPlaying={isPlaying}
                onClick={handlePlayPause}
                size="md"
              />
              <span className="text-white text-sm">Auto-play: {isPlaying ? "ON" : "OFF"}</span>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <EnhancedNavigationButton
                direction="prev"
                onClick={handlePrevSlide}
                size="md"
              />
              <span className="text-white text-sm px-4">Slide {currentSlide + 1}</span>
              <EnhancedNavigationButton
                direction="next"
                onClick={handleNextSlide}
                size="md"
              />
            </div>

            {/* Shop button */}
            <EnhancedShopButton
              text="SHOP COLLECTION"
              onClick={handleShopClick}
              size="lg"
              variant="primary"
            />

            {/* Indicators */}
            <CarouselControlsContainer>
              {Array.from({ length: totalSlides }, (_, index) => (
                <EnhancedSlideIndicator
                  key={index}
                  isActive={index === currentSlide}
                  onClick={() => handleGoToSlide(index)}
                  index={index}
                />
              ))}
            </CarouselControlsContainer>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 