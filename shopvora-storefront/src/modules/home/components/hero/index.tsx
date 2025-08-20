import HeroCarousel from "./hero-carousel"
import { heroCarouselData } from "./hero-carousel-data"

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <HeroCarousel
        slides={heroCarouselData}
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

export { HeroCarousel }
export { heroCarouselData } 