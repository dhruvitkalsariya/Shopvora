"use client"

interface CarouselIndicatorsProps {
  totalSlides: number
  currentSlide: number
  onSlideChange: (index: number) => void
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function CarouselIndicators({
  totalSlides,
  currentSlide,
  onSlideChange,
  className = "",
  size = "md"
}: CarouselIndicatorsProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  }

  const spacingClasses = {
    sm: "space-x-1",
    md: "space-x-2", 
    lg: "space-x-3"
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`flex ${spacingClasses[size]}`}>
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`${sizeClasses[size]} rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400/50 hover:scale-110 ${
              index === currentSlide
                ? "bg-[#2A1454] scale-125" // Active dot - dark purple/blue from Figma
                : "bg-[#FFFFFF] hover:bg-gray-100 border border-gray-200" // Inactive dot - white from Figma
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
} 