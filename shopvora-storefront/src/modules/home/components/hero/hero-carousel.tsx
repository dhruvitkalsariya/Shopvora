"use client"

import { useRef, useEffect } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { useCarousel } from "@lib/hooks/use-carousel"
import { useRouter } from "next/navigation"
import {
  EnhancedPlayPauseButton,
  EnhancedNavigationButton,
  EnhancedShopButton,
  EnhancedSlideIndicator,
  CarouselControlsContainer
} from "./enhanced-carousel-buttons"

interface HeroSlide {
  id: number
  image: string
  alt: string
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  category?: string
  badge?: string
}

interface HeroCarouselProps {
  slides: HeroSlide[]
  height?: string
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
  showProgressBar?: boolean
  showPlayPause?: boolean
  enableSwipe?: boolean
  className?: string
  onSlideChange?: (currentSlide: number) => void
}

export default function HeroCarousel({
  slides,
  height = "h-[600px]",
  autoPlayInterval = 5000,
  showControls = true, // Changed back to true to show navigation arrows
  showIndicators = true, // Set to true to show enhanced indicators
  showProgressBar = true,
  showPlayPause = true,
  enableSwipe = true,
  className = "",
  onSlideChange,
}: HeroCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  
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

  // Notify parent component of slide changes
  useEffect(() => {
    onSlideChange?.(currentSlide)
  }, [currentSlide, onSlideChange])

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

  const handleSlideClick = (slide: HeroSlide) => {
    router.push(slide.ctaLink)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="w-full">
      {/* Main Carousel Container */}
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
          className="relative w-full h-full overflow-hidden"
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
              className="absolute inset-0 cursor-pointer group"
              onClick={() => handleSlideClick(currentSlideData)}
            >
              {/* Background Image */}
              <div className="relative w-full h-full">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                
                {/* Content Overlay - All text content commented out */}
                <div className="absolute inset-0 flex items-center">
                  <div className="ml-8 md:ml-16 lg:ml-24 max-w-2xl">
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="inline-block bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4"
                    >
                      {currentSlideData.badge}
                    </motion.div>

                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-2"
                    >
                      {currentSlideData.category}
                    </motion.div>

                    <motion.h1
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                      style={{
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                      }}
                    >
                      {currentSlideData.title}
                    </motion.h1>
                    
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-xl md:text-2xl font-semibold text-gray-200 mb-3"
                      style={{
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
                      }}
                    >
                      {currentSlideData.subtitle}
                    </motion.h2>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="text-lg text-gray-300 mb-6 max-w-xl"
                      style={{
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
                      }}
                    >
                      {currentSlideData.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <EnhancedShopButton
                        text={currentSlideData.ctaText}
                        onClick={() => handleSlideClick(currentSlideData)}
                        size="md"
                        variant="primary"
                      />
                    </motion.div>
                  </div>
                </div>            
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Navigation Arrows */}
        {showControls && slides.length > 1 && (
          <>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
              <EnhancedNavigationButton
                direction="prev"
                onClick={prevSlide}
                size="md"
              />
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
              <EnhancedNavigationButton
                direction="next"
                onClick={nextSlide}
                size="md"
              />
            </div>
          </>
        )}  
        {/* Enhanced Play/Pause Button */}
        {showPlayPause && slides.length > 1 && (
          <div className="absolute top-4 right-4 z-20">
            <EnhancedPlayPauseButton
              isPlaying={isAutoPlaying}
              onClick={toggleAutoPlay}
              size="md"
            />
          </div>
        )}
      

        {/* Slide Counter */}
        {slides.length > 1 && (
          <div className="absolute top-4 left-4 text-white/70 text-sm font-medium z-20 bg-black/20 px-3 py-1 rounded-full">
            {currentSlide + 1} / {slides.length}
          </div>
        )}
      </div>

      {/* Enhanced Slide Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="mt-6 w-full flex justify-center">
          <CarouselControlsContainer>
            {slides.map((_, index) => (
              <EnhancedSlideIndicator
                key={index}
                isActive={index === currentSlide}
                onClick={() => goToSlide(index)}
                index={index}
              />
            ))}
          </CarouselControlsContainer>
        </div>
      )}
    </div>
  )
}