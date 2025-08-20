import { Metadata } from "next"

import HeroSection from "@modules/home/components/hero"
import ExploreCategories from "@modules/home/components/explore-categories"
import PopularProducts from "@modules/home/components/popular-products"
import HeroBanner from "@modules/home/components/hero/hero-banner"
import ExploreNewCollection from "@modules/home/components/explore-new-collection"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Shopvora - Your Ultimate Shopping Destination",
  description:
    "Discover amazing products across all categories with the best deals and offers. Shop the latest trends in fashion, electronics, home & more.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <>
      {/* 1. Hero Carousel - Main hero section */}
      <section className="mb-8">
        <HeroSection />
      </section>
      {/* Original content */}
      <ExploreCategories />
      <PopularProducts />
      <HeroBanner/>     
      <ExploreNewCollection />
    </>
  )
}
