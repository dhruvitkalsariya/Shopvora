export interface Product {
  id: string
  image: string
  alt: string
  rating: number
  reviewCount: number
  category: string
  name: string
  description: string
  originalPrice: string
  currentPrice: string
}

export const sampleProducts: Product[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    alt: "Laptop Intel Core",
    rating: 4.5,
    reviewCount: 300,
    category: "Laptop & PC",
    name: "Laptop intel core",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.51,999",
    currentPrice: "Rs.49,999"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    alt: "Samsung Galaxy Z Series",
    rating: 4.3,
    reviewCount: 245,
    category: "Smartphone",
    name: "Samsung Galaxy Z Series",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.89,999",
    currentPrice: "Rs.79,999"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Laptop ASUS AMD Ryzen",
    rating: 4.7,
    reviewCount: 189,
    category: "Laptop & PC",
    name: "LAPTOP ASUS AMD RYZEN",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.65,999",
    currentPrice: "Rs.59,999"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1402&q=80",
    alt: "Boots Cream",
    rating: 4.2,
    reviewCount: 156,
    category: "Footwear",
    name: "Boots Cream",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.3,999",
    currentPrice: "Rs.2,999"
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Wireless Headphones",
    rating: 4.6,
    reviewCount: 423,
    category: "Audio",
    name: "Wireless Headphones Pro",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.8,999",
    currentPrice: "Rs.6,999"
  }
]

export const collectionProducts: Product[] = [
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Blue Backpack",
    rating: 4.4,
    reviewCount: 234,
    category: "Bags & Accessories",
    name: "Premium Backpack",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.2,499",
    currentPrice: "Rs.1,999"
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Casual Shirt",
    rating: 4.1,
    reviewCount: 178,
    category: "Clothing",
    name: "Casual Cotton Shirt",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.1,999",
    currentPrice: "Rs.1,499"
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Red Handbag",
    rating: 4.3,
    reviewCount: 267,
    category: "Bags & Accessories",
    name: "Elegant Handbag",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.4,999",
    currentPrice: "Rs.3,999"
  },
  {
    id: "9",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Smart Watch",
    rating: 4.5,
    reviewCount: 345,
    category: "Wearables",
    name: "Smart Watch Pro",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.12,999",
    currentPrice: "Rs.9,999"
  },
  {
    id: "10",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    alt: "Beauty Products",
    rating: 4.2,
    reviewCount: 189,
    category: "Beauty",
    name: "Beauty Collection Set",
    description: "Here's a short description card of the product categories on this website...",
    originalPrice: "Rs.3,499",
    currentPrice: "Rs.2,799"
  }
]

export interface Collection {
  id: string
  image: string
  alt: string
  title: string
  description: string
  productCount: number
  badge?: string
  category: string
  discountRange: string
  sampleProducts: string[]
}

export const sampleCollections: Collection[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Summer Collection",
    title: "Summer Essentials",
    description: "Discover the latest trends in summer fashion with our curated collection of lightweight fabrics and vibrant colors.",
    productCount: 24,
    badge: "New Collection",
    category: "Fashion",
    discountRange: "25-40% OFF",
    sampleProducts: ["Cotton T-Shirts", "Summer Dresses", "Sunglasses", "Beach Hats"]
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Tech Gadgets",
    title: "Tech Innovation",
    description: "Cutting-edge technology and smart devices that enhance your digital lifestyle.",
    productCount: 18,
    badge: "Trending",
    category: "Electronics",
    discountRange: "15-35% OFF",
    sampleProducts: ["Smartphones", "Laptops", "Wireless Earbuds", "Smart Watches"]
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Luxury Bags",
    title: "Luxury Accessories",
    description: "Premium handbags and accessories crafted with the finest materials and timeless designs.",
    productCount: 12,
    badge: "Premium",
    category: "Accessories",
    discountRange: "30-45% OFF",
    sampleProducts: ["Designer Bags", "Leather Wallets", "Silk Scarves", "Gold Jewelry"]
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Audio Collection",
    title: "Sound & Music",
    description: "High-quality audio equipment and headphones for the ultimate listening experience.",
    productCount: 15,
    category: "Audio",
    discountRange: "20-30% OFF",
    sampleProducts: ["Wireless Headphones", "Bluetooth Speakers", "Studio Monitors", "DJ Equipment"]
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    alt: "Beauty Collection",
    title: "Beauty & Wellness",
    description: "Natural beauty products and wellness essentials for your daily self-care routine.",
    productCount: 32,
    badge: "Organic",
    category: "Beauty",
    discountRange: "25-35% OFF",
    sampleProducts: ["Organic Skincare", "Natural Makeup", "Essential Oils", "Hair Care"]
  }
] 