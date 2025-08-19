export interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundColor: string
  accentColor: string
  image?: string
}

export const promotionalCarouselData: CarouselSlide[] = [
  {
    id: 1,
    title: "BIG SALE",
    subtitle: "SPECIAL OFFERS",
    description: "NEW YEAR EDITION PROMOTION",
    ctaText: "SHOP NOW!",
    ctaLink: "/products",
    backgroundColor: "from-purple-900 via-purple-800 to-purple-700",
    accentColor: "yellow"
  },
  {
    id: 2,
    title: "FLASH DEALS",
    subtitle: "LIMITED TIME",
    description: "UP TO 70% OFF SELECTED ITEMS",
    ctaText: "EXPLORE DEALS",
    ctaLink: "/collections",
    backgroundColor: "from-red-900 via-red-800 to-red-700",
    accentColor: "yellow"
  },
  {
    id: 3,
    title: "NEW ARRIVALS",
    subtitle: "FRESH STYLES",
    description: "DISCOVER THE LATEST TRENDS",
    ctaText: "SHOP NEW",
    ctaLink: "/products?sort=newest",
    backgroundColor: "from-blue-900 via-blue-800 to-blue-700",
    accentColor: "yellow"
  },
  {
    id: 4,
    title: "WEEKEND SALE",
    subtitle: "WEEKEND SPECIALS",
    description: "DON'T MISS OUT ON AMAZING DEALS",
    ctaText: "GRAB DEALS",
    ctaLink: "/sale",
    backgroundColor: "from-green-900 via-green-800 to-green-700",
    accentColor: "yellow"
  },
  {
    id: 5,
    title: "CLEARANCE",
    subtitle: "FINAL SALE",
    description: "LAST CHANCE TO SAVE BIG",
    ctaText: "FINAL SALE",
    ctaLink: "/clearance",
    backgroundColor: "from-orange-900 via-orange-800 to-orange-700",
    accentColor: "yellow"
  }
]

// Alternative themes for different seasons/occasions
export const seasonalCarouselData: CarouselSlide[] = [
  {
    id: 1,
    title: "HOLIDAY SALE",
    subtitle: "FESTIVE DEALS",
    description: "CELEBRATE WITH AMAZING DISCOUNTS",
    ctaText: "SHOP HOLIDAY",
    ctaLink: "/holiday-sale",
    backgroundColor: "from-red-900 via-red-800 to-red-700",
    accentColor: "yellow"
  },
  {
    id: 2,
    title: "SPRING COLLECTION",
    subtitle: "FRESH START",
    description: "EMBRACE THE NEW SEASON",
    ctaText: "SPRING STYLES",
    ctaLink: "/spring-collection",
    backgroundColor: "from-pink-900 via-pink-800 to-pink-700",
    accentColor: "yellow"
  },
  {
    id: 3,
    title: "SUMMER VIBES",
    subtitle: "HOT DEALS",
    description: "COOL OFF WITH AMAZING PRICES",
    ctaText: "SUMMER SALE",
    ctaLink: "/summer-sale",
    backgroundColor: "from-yellow-900 via-yellow-800 to-yellow-700",
    accentColor: "white"
  }
]

// Minimal theme for a cleaner look
export const minimalCarouselData: CarouselSlide[] = [
  {
    id: 1,
    title: "NEW ARRIVALS",
    subtitle: "DISCOVER",
    description: "Explore our latest collection",
    ctaText: "SHOP NOW",
    ctaLink: "/new-arrivals",
    backgroundColor: "from-gray-900 via-gray-800 to-gray-700",
    accentColor: "white"
  },
  {
    id: 2,
    title: "FEATURED",
    subtitle: "HIGHLIGHTS",
    description: "Curated selection for you",
    ctaText: "VIEW ALL",
    ctaLink: "/featured",
    backgroundColor: "from-slate-900 via-slate-800 to-slate-700",
    accentColor: "white"
  }
] 