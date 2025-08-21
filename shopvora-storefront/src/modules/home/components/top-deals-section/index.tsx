"use client"

import TopDeals, { Deal } from "../top-deals/TopDeals"

// Deals data for the homepage
const homepageDeals: Deal[] = [
  {
    id: 1,
    image: "/images/Top Categories/Electronics-Categories.png",
    title: "Apple iPads",
    discount: "30–50% OFF",
    url: "/collections/apple-ipads"
  },
  {
    id: 2,
    image: "/images/Top Categories/Footwear-Categories.png",
    title: "Puma, Adidas & More",
    discount: "20–40% OFF",
    url: "/collections/sports-shoes"
  },
  {
    id: 3,
    image: "/images/Top Categories/Electronics-Categories.png",
    title: "iPad Accessories",
    discount: "30–50% OFF",
    url: "/collections/apple-ipads-accessories"
  },
  {
    id: 4,
    image: "/images/Top Categories/Fashion-Categories.png",
    title: "Kurta Sets",
    discount: "Up To 70% OFF",
    url: "/collections/kurta-sets"
  },
  {
    id: 5,
    image: "/images/Top Categories/Fashion-Categories.png",
    title: "Tops, Jeans & More",
    discount: "20–80% OFF",
    url: "/collections/tops-jeans"
  }
]

const TopDealsSection = () => {
  return <TopDeals deals={homepageDeals} />
}

export default TopDealsSection 