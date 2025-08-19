"use client"

import { useRef, useEffect } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useCarousel } from "@lib/hooks/use-carousel"

interface ImageCarouselSlide {
  id: number
  image: string
  alt: string
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

interface ImageCarouselProps {
  slides: ImageCarouselSlide[]
  height?: string
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
  showProgressBar?: boolean
  showPlayPause?: boolean
  enableSwipe?: boolean
  className?: string
}

export default function ImageCarousel({
  slides,
  height = "h-[400px]",
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  showProgressBar = true,
  showPlayPause = true,
  enableSwipe = true,
  className = "",
}: ImageCarouselProps) {
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

  return (
    <div className={`w-full ${className}`}>
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className={`relative w-full ${height} overflow-hidden`}
        tabIndex={0}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
        onFocus={pauseAutoPlay}
        onBlur={resumeAutoPlay}
      >
        {/* Carousel Content */}
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
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div className="relative w-full h-full">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Content Overlay */}
                {(currentSlideData.title || currentSlideData.subtitle || currentSlideData.description) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                    {currentSlideData.title && (
                      <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                        style={{
                          textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                        }}
                      >
                        {currentSlideData.title}
                      </motion.h1>
                    )}
                    
                    {currentSlideData.subtitle && (
                      <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl md:text-2xl font-semibold text-white mb-2"
                        style={{
                          textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
                        }}
                      >
                        {currentSlideData.subtitle}
                      </motion.h2>
                    )}
                    
                    {currentSlideData.description && (
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg text-white mb-6 max-w-2xl"
                        style={{
                          textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
                        }}
                      >
                        {currentSlideData.description}
                      </motion.p>
                    )}
                    
                    {currentSlideData.ctaText && currentSlideData.ctaLink && (
                      <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="px-8 py-3 bg-white text-gray-900 font-bold text-lg uppercase tracking-wider rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                        onClick={() => window.location.href = currentSlideData.ctaLink!}
                      >
                        {currentSlideData.ctaText}
                      </motion.button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Play/Pause Button (on carousel) */}
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

        {/* Progress Bar */}
        {showProgressBar && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
            <motion.div
              className="h-full bg-white"
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

      {/* Control Buttons - Positioned UNDER the carousel */}
      {showControls && (
        <div className="flex justify-center items-center space-x-4 mt-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: "#2A1454" }} />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" style={{ color: "#2A1454" }} />
          </button>
        </div>
      )}

      {/* Slide Indicators - Positioned UNDER the carousel */}
      {showIndicators && (
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 ${
                index === currentSlide
                  ? "bg-[#2A1454] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
} 