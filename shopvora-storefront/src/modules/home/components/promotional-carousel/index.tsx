import EnhancedCarousel from "./enhanced-carousel"
import { promotionalCarouselData } from "./carousel-data"

export default function PromotionalCarousel() {
  return (
    <EnhancedCarousel
      slides={promotionalCarouselData}
      height="h-full"
      autoPlayInterval={5000}
      showControls={true}
      showIndicators={true}
      showProgressBar={true}
      showPlayPause={true}
      enableSwipe={true}
      className=""
    />
  )
} 