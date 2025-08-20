"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselControllerProps {
  onPrev: () => void
  onNext: () => void
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function CarouselController({ 
  onPrev, 
  onNext, 
  className = "",
  size = "md"
}: CarouselControllerProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <button
        onClick={onPrev}
        className={`${sizeClasses[size]} bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-105`}
        aria-label="Previous slide"
      >
        <ChevronLeft 
          className={iconSizes[size]} 
          style={{ color: '#2A1454' }} 
        />
      </button>
      
      <button
        onClick={onNext}
        className={`${sizeClasses[size]} bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-105`}
        aria-label="Next slide"
      >
        <ChevronRight 
          className={iconSizes[size]} 
          style={{ color: '#2A1454' }} 
        />
      </button>
    </div>
  )
} 