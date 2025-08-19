import { useState, useEffect, useCallback, useRef } from "react"

interface UseCarouselOptions {
  totalSlides: number
  autoPlayInterval?: number
  autoPlay?: boolean
  loop?: boolean
}

export function useCarousel({
  totalSlides,
  autoPlayInterval = 5000,
  autoPlay = true,
  loop = true,
}: UseCarouselOptions) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev === totalSlides - 1) {
        return loop ? 0 : prev
      }
      return prev + 1
    })
  }, [totalSlides, loop])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return loop ? totalSlides - 1 : prev
      }
      return prev - 1
    })
  }, [totalSlides, loop])

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
    }
  }, [totalSlides])

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const resumeAutoPlay = useCallback(() => {
    setIsPaused(false)
  }, [])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isAutoPlaying, isPaused, autoPlayInterval, nextSlide])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay,
    toggleAutoPlay,
    isAutoPlaying,
    isPaused,
  }
} 