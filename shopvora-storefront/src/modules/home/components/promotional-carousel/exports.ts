// Main carousel components
export { default as PromotionalCarousel } from "./index"
export { default as PromotionalCarouselWrapper } from "./page-wrapper"
export { default as EnhancedCarousel } from "./enhanced-carousel"
export { default as ProductCarousel } from "./product-carousel"

// Carousel data and types
export {
  promotionalCarouselData,
  seasonalCarouselData,
  minimalCarouselData,
  type CarouselSlide,
} from "./carousel-data"

// Custom hook
export { useCarousel } from "@lib/hooks/use-carousel"

// Demo component
export { default as CarouselDemo } from "./demo" 