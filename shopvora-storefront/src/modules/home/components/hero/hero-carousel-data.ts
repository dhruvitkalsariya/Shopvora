export interface HeroSlide {
  id: number
  image: string
  alt: string
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  category?: string
  badge?: string
}

export const heroCarouselData: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Fashion Collection",
    title: "NEW FASHION",
    subtitle: "COLLECTION 2024",
    description: "Discover the latest trends in fashion with our exclusive new collection. From casual wear to elegant evening dresses.",
    ctaText: "SHOP NOW",
    ctaLink: "/collections/fashion",
    category: "Fashion",
    badge: "NEW"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Electronics Sale",
    title: "ELECTRONICS",
    subtitle: "MEGA SALE",
    description: "Get up to 70% off on the latest electronics. Smartphones, laptops, and gadgets at unbeatable prices.",
    ctaText: "EXPLORE DEALS",
    ctaLink: "/collections/electronics",
    category: "Electronics",
    badge: "SALE"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Home & Living",
    title: "HOME & LIVING",
    subtitle: "DECORATE YOUR SPACE",
    description: "Transform your home with our beautiful collection of furniture and home decor items.",
    ctaText: "SHOP HOME",
    ctaLink: "/collections/home-living",
    category: "Home & Living",
    badge: "TRENDING"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Sports & Fitness",
    title: "SPORTS & FITNESS",
    subtitle: "STAY ACTIVE",
    description: "Achieve your fitness goals with our premium sports equipment and activewear collection.",
    ctaText: "GET FIT",
    ctaLink: "/collections/sports-fitness",
    category: "Sports",
    badge: "HOT"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    alt: "Beauty & Cosmetics",
    title: "BEAUTY & COSMETICS",
    subtitle: "GLOW UP",
    description: "Enhance your natural beauty with our curated selection of premium cosmetics and skincare products.",
    ctaText: "SHOP BEAUTY",
    ctaLink: "/collections/beauty-cosmetics",
    category: "Beauty",
    badge: "POPULAR"
  }
]

// Alternative data for different themes
export const seasonalHeroData: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Holiday Sale",
    title: "HOLIDAY SALE",
    subtitle: "FESTIVE DEALS",
    description: "Celebrate the holidays with amazing discounts on all your favorite products.",
    ctaText: "SHOP HOLIDAY",
    ctaLink: "/holiday-sale",
    category: "Holiday",
    badge: "LIMITED TIME"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Spring Collection",
    title: "SPRING COLLECTION",
    subtitle: "FRESH START",
    description: "Embrace the new season with our vibrant spring collection featuring the latest trends.",
    ctaText: "SPRING STYLES",
    ctaLink: "/spring-collection",
    category: "Seasonal",
    badge: "NEW SEASON"
  }
]

// Minimal theme data
export const minimalHeroData: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Minimal Collection",
    title: "MINIMAL",
    subtitle: "ESSENTIALS",
    description: "Discover our curated collection of essential items designed for modern living.",
    ctaText: "EXPLORE",
    ctaLink: "/collections/minimal",
    category: "Essentials"
  }
] 