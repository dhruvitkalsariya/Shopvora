export interface ImageCarouselSlide {
  id: number
  image: string
  alt: string
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

// Sample carousel data - replace with your actual images
export const imageCarouselData: ImageCarouselSlide[] = [
  {
    id: 1,
    image: "/images/banners/banner-1.jpg",
    alt: "Big Sale Banner",
    title: "BIG SALE",
    subtitle: "SPECIAL OFFERS",
    description: "NEW YEAR EDITION PROMOTION",
    ctaText: "SHOP NOW!",
    ctaLink: "/products"
  },
  {
    id: 2,
    image: "/images/banners/banner-2.jpg",
    alt: "Flash Deals Banner",
    title: "FLASH DEALS",
    subtitle: "LIMITED TIME",
    description: "UP TO 70% OFF SELECTED ITEMS",
    ctaText: "EXPLORE DEALS",
    ctaLink: "/collections"
  },
  {
    id: 3,
    image: "/images/banners/banner-3.jpg",
    alt: "New Arrivals Banner",
    title: "NEW ARRIVALS",
    subtitle: "FRESH STYLES",
    description: "DISCOVER THE LATEST TRENDS",
    ctaText: "SHOP NEW",
    ctaLink: "/products?sort=newest"
  },
  {
    id: 4,
    image: "/images/banners/banner-4.jpg",
    alt: "Weekend Sale Banner",
    title: "WEEKEND SALE",
    subtitle: "WEEKEND SPECIALS",
    description: "DON'T MISS OUT ON AMAZING DEALS",
    ctaText: "GRAB DEALS",
    ctaLink: "/sale"
  },
  {
    id: 5,
    image: "/images/banners/banner-5.jpg",
    alt: "Clearance Banner",
    title: "CLEARANCE",
    subtitle: "FINAL SALE",
    description: "LAST CHANCE TO SAVE BIG",
    ctaText: "FINAL SALE",
    ctaLink: "/clearance"
  }
]

// Minimal carousel data (just images without text overlay)
export const minimalImageCarouselData: ImageCarouselSlide[] = [
  {
    id: 1,
    image: "/images/banners/minimal-1.jpg",
    alt: "Minimal Banner 1"
  },
  {
    id: 2,
    image: "/images/banners/minimal-2.jpg",
    alt: "Minimal Banner 2"
  },
  {
    id: 3,
    image: "/images/banners/minimal-3.jpg",
    alt: "Minimal Banner 3"
  }
] 