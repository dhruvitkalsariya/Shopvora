import { Metadata } from "next"

import PromotionalCarouselWrapper from "@modules/home/components/promotional-carousel/page-wrapper"
import ExploreCategories from "@modules/home/components/explore-categories"
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
      <PromotionalCarouselWrapper />
      <ExploreCategories />
    </>
  )
}
