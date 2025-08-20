"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useCarousel } from "@lib/hooks/use-carousel"

interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundColor: string
  accentColor: string
  image?: string
}

interface EnhancedCarouselProps {
  slides: CarouselSlide[]
  height?: string
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
  showProgressBar?: boolean
  showPlayPause?: boolean
  enableSwipe?: boolean
  className?: string
}

export default function EnhancedCarousel({
  slides,
  height = "h-[400px]",
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  showProgressBar = true,
  showPlayPause = true,
  enableSwipe = true,
  className = "",
}: EnhancedCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay,
    toggleAutoPlay,
    isAutoPlaying,
    isPaused,
  } = useCarousel({
    totalSlides: slides.length,
    autoPlayInterval,
    autoPlay: true,
    loop: true,
  })

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault()
          prevSlide()
          break
        case "ArrowRight":
          event.preventDefault()
          nextSlide()
          break
        case " ":
          event.preventDefault()
          toggleAutoPlay()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [prevSlide, nextSlide, toggleAutoPlay])

  // Swipe handling
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      prevSlide()
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide()
    }
  }

  const currentSlideData = slides[currentSlide]

  // Generate random positions for confetti and circles only on client side
  const [confettiPositions, setConfettiPositions] = useState<Array<{left: string, top: string}>>([])
  const [circlePositions, setCirclePositions] = useState<Array<{left: string, top: string, width: string, height: string}>>([])

  useEffect(() => {
    // Generate confetti positions
    const confetti = [...Array(8)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setConfettiPositions(confetti)

    // Generate circle positions
    const circles = [...Array(5)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${20 + Math.random() * 30}px`,
      height: `${20 + Math.random() * 30}px`,
    }))
    setCirclePositions(circles)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${height} overflow-hidden ${className}`}
      tabIndex={0}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onFocus={pauseAutoPlay}
      onBlur={resumeAutoPlay}
    >
      {/* Carousel Container */}
      <motion.div
        className="relative w-full h-full"
        drag={enableSwipe ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.backgroundColor}`}
          >
            {/* Background Image (if provided) */}
            {currentSlideData.image && (
              <div className="absolute inset-0">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            )}

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Radiating lines */}
              <div className="absolute top-1/2 left-1/4 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-2 border-yellow-400/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-24 h-24 border border-yellow-300/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              <div className="absolute top-1/2 right-1/4 w-32 h-32 transform translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-2 border-yellow-400/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-20 h-20 border border-yellow-300/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              {/* Confetti-like elements */}
              {confettiPositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400/60 rounded-full"
                  style={{
                    left: pos.left,
                    top: pos.top,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2 + (i * 0.3),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* White circular outlines */}
              {circlePositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute border border-white/20 rounded-full"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    width: pos.width,
                    height: pos.height,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3 + (i * 0.4),
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
              {/* CTA Button */}
              <motion.button
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-4 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                onClick={() => window.location.href = currentSlideData.ctaLink}
              >
                {currentSlideData.ctaText}
              </motion.button>

              {/* Main Title */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-2"
                style={{
                  textShadow: `
                    0 0 10px rgba(255, 255, 0, 0.5),
                    0 0 20px rgba(255, 255, 0, 0.3),
                    0 0 30px rgba(255, 255, 0, 0.2),
                    2px 2px 0px rgba(139, 69, 19, 0.8),
                    4px 4px 0px rgba(139, 69, 19, 0.6),
                    6px 6px 0px rgba(139, 69, 19, 0.4)
                  `
                }}
              >
                {currentSlideData.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 mb-2"
                style={{
                  textShadow: `
                    0 0 8px rgba(255, 255, 0, 0.4),
                    0 0 16px rgba(255, 255, 0, 0.2),
                    1px 1px 0px rgba(139, 69, 19, 0.6),
                    2px 2px 0px rgba(139, 69, 19, 0.4)
                  `
                }}
              >
                {currentSlideData.subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white text-lg font-medium tracking-wide"
              >
                {currentSlideData.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation Arrows */}
      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Play/Pause Button */}
      {showPlayPause && (
        <button
          onClick={toggleAutoPlay}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
        >
          {isAutoPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>
      )}

      {/* Slide Indicators */}
      {showIndicators && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentSlide
                  ? "bg-purple-600 scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {showProgressBar && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      )}

      {/* Slide Counter */}
      <div className="absolute top-4 left-4 text-white/70 text-sm font-medium z-20">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
} 