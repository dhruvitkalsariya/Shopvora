import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import ExploreCategories from "@modules/home/components/explore-categories"
import PopularProducts from "@modules/home/components/popular-products"
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
      <Hero />
      {/* ExploreCategories - Commented Out */}
      {/*
      <ExploreCategories />
      */}
      
      {/* PopularProducts - Commented Out */}
      {/*
      <PopularProducts region={region} />
      */}
    </>
  )
}
