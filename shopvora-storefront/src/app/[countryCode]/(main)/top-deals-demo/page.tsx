"use client"

import { Header, Footer, TopDealsSection } from "@modules/common/components/ui"

export default function TopDealsDemo() {
  // Data matching the screenshot exactly
  const topDealsData = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      category: "Electronics",
      dealTag: "HOT DEAL" as const,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/electronics",
      discountText: "Up To 40% OFF",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "MacBook Pro M3",
      category: "Electronics",
      dealTag: "BEST SELLER" as const,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/electronics",
      discountText: "30-50% OFF",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      title: "Nike Air Max 270",
      category: "Shoes",
      dealTag: "FLASH SALE" as const,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/shoes",
      discountText: "25-45% OFF",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 4,
      title: "Designer Kurta Set",
      category: "Women's Clothing",
      dealTag: "TRENDING" as const,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/womens-clothing",
      discountText: "Up To 70% OFF",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      id: 5,
      title: "Branded Sari Collection",
      category: "Women's Clothing",
      dealTag: "LIMITED TIME" as const,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/womens-clothing",
      discountText: "20-60% OFF",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ]

  const categories = [
    {
      name: "Electronics",
      href: "/categories/electronics",
      subcategories: [
        { name: "Smartphones", href: "/categories/electronics/smartphones" },
        { name: "Laptops", href: "/categories/electronics/laptops" },
        { name: "Tablets", href: "/categories/electronics/tablets" },
        { name: "Audio", href: "/categories/electronics/audio" }
      ]
    },
    {
      name: "Fashion",
      href: "/categories/fashion",
      subcategories: [
        { name: "Men's Clothing", href: "/categories/fashion/mens" },
        { name: "Women's Clothing", href: "/categories/fashion/womens" },
        { name: "Shoes", href: "/categories/fashion/shoes" },
        { name: "Accessories", href: "/categories/fashion/accessories" }
      ]
    },
    {
      name: "Home & Garden",
      href: "/categories/home-garden",
      subcategories: [
        { name: "Furniture", href: "/categories/home-garden/furniture" },
        { name: "Decor", href: "/categories/home-garden/decor" },
        { name: "Kitchen", href: "/categories/home-garden/kitchen" },
        { name: "Garden", href: "/categories/home-garden/garden" }
      ]
    }
  ]

  const handleSearch = (query: string) => {
    console.log("Search query:", query)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        categories={categories}
        onSearch={handleSearch}
        onCartClick={() => console.log("Cart clicked")}
        onUserMenuClick={() => console.log("User menu clicked")}
        onNotificationClick={() => console.log("Notifications clicked")}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Top Deals Demo
          </h1>
          <p className="text-lg text-gray-600">
            Replicating the exact Top Deals section from the screenshot
          </p>
        </div>

        {/* Top Deals Section */}
        <TopDealsSection
          title="Top Deals"
          seeAllUrl="/collections/top-deals"
          deals={topDealsData}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 