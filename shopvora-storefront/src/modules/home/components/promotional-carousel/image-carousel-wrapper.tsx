import ImageCarousel from "./image-carousel"
import { imageCarouselData } from "./image-carousel-data"

export default function ImageCarouselWrapper() {
  return (
    <section className="relative w-full">
      <ImageCarousel
        slides={imageCarouselData}
        height="h-[600px]"
        autoPlayInterval={5000}
        showControls={true}
        showIndicators={true}
        showProgressBar={true}
        showPlayPause={true}
        enableSwipe={true}
        className=""
      />
    </section>
  )
} 