import { Metadata } from "next"
import CarouselDemo from "@modules/home/components/promotional-carousel/demo"

export const metadata: Metadata = {
  title: "Carousel Demo - Shopvora",
  description: "Demo page showcasing all carousel variants and features",
}

export default function CarouselDemoPage() {
  return <CarouselDemo />
} 