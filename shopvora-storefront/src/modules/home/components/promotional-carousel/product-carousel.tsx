"use client"

import { useRef, useEffect } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, Star } from "lucide-react"
import { useCarousel } from "@lib/hooks/use-carousel"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  badge?: string
  discount?: number
}

interface ProductCarouselProps {
  products: Product[]
  title?: string
  subtitle?: string
  height?: string
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
  showProgressBar?: boolean
  showPlayPause?: boolean
  enableSwipe?: boolean
  className?: string
  itemsPerSlide?: number
}

export default function ProductCarousel({
  products,
  title,
  subtitle,
  height = "h-[400px]",
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  showProgressBar = true,
  showPlayPause = true,
  enableSwipe = true,
  className = "",
  itemsPerSlide = 4,
}: ProductCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const totalSlides = Math.ceil(products.length / itemsPerSlide)
  
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
    totalSlides,
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

  const getCurrentProducts = () => {
    const startIndex = currentSlide * itemsPerSlide
    return products.slice(startIndex, startIndex + itemsPerSlide)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${height} ${className}`}
      tabIndex={0}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onFocus={pauseAutoPlay}
      onBlur={resumeAutoPlay}
    >
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-6">
          {title && (
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          )}
          {subtitle && (
            <p className="text-gray-600 text-lg">{subtitle}</p>
          )}
        </div>
      )}

      {/* Carousel Container */}
      <div className="relative w-full h-full">
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                {getCurrentProducts().map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.badge}
                        </div>
                      )}
                      {product.discount && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          -{product.discount}%
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-sm text-gray-600">
                          ({product.reviewCount})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      {showControls && totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 z-20 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 z-20 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Play/Pause Button */}
      {showPlayPause && totalSlides > 1 && (
        <button
          onClick={toggleAutoPlay}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 z-20 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      {showIndicators && totalSlides > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentSlide
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {showProgressBar && totalSlides > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 z-20">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      )}

      {/* Slide Counter */}
      {totalSlides > 1 && (
        <div className="absolute top-4 left-4 text-gray-600 text-sm font-medium z-20 bg-white/80 px-2 py-1 rounded">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}
    </div>
  )
} 