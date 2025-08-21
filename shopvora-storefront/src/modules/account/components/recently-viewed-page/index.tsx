"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Heart, Eye, ShoppingCart, Star, Filter, SortAsc, Clock, Trash2 } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { useState, useEffect } from "react"

// Extended sample recently viewed products data
const recentlyViewedProducts = [
  {
    id: 1,
    name: "Laptop Intel Core i7",
    category: "LAPTOP & PC",
    description: "High-performance laptop with Intel Core i7 processor, perfect for work and gaming. Features 16GB RAM and 512GB SSD.",
    currentPrice: "Rs.49,999",
    originalPrice: "Rs.51,999",
    rating: 4.5,
    reviewCount: 300,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    href: "/products/laptop-intel-core",
    isNew: false,
    discount: 4,
    inStock: true,
    viewedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Flip",
    category: "SMARTPHONE",
    description: "Revolutionary foldable smartphone with compact design. Experience the future of mobile technology in your pocket.",
    currentPrice: "Rs.79,999",
    originalPrice: "Rs.85,999",
    rating: 4.7,
    reviewCount: 280,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    href: "/products/samsung-galaxy-z-flip",
    isNew: true,
    discount: 7,
    inStock: true,
    viewedAt: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
  },
  {
    id: 3,
    name: "ASUS ROG Gaming Laptop",
    category: "LAPTOP & PC",
    description: "Gaming laptop with AMD Ryzen processor and RTX graphics. Built for ultimate gaming performance and multitasking.",
    currentPrice: "Rs.65,999",
    originalPrice: "Rs.69,999",
    rating: 4.3,
    reviewCount: 280,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    href: "/products/laptop-asus-amd-ryzen",
    isNew: false,
    discount: 6,
    inStock: false,
    viewedAt: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
  },
  {
    id: 4,
    name: "Boots Cream",
    category: "BEAUTY & SKINCARE",
    description: "Natural organic face cream with vitamin E and aloe vera. Nourishes and hydrates your skin for a healthy glow.",
    currentPrice: "Rs.1,299",
    originalPrice: "Rs.1,599",
    rating: 4.2,
    reviewCount: 120,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    href: "/products/boots-cream",
    isNew: false,
    discount: 19,
    inStock: true,
    viewedAt: new Date(Date.now() - 8 * 60 * 60 * 1000) // 8 hours ago
  },
  {
    id: 5,
    name: "LAPTOP ASUS AMD RYZEN",
    category: "LAPTOP & PC",
    description: "Powerful laptop with AMD Ryzen processor, perfect for both work and entertainment. Features high-speed performance.",
    currentPrice: "Rs.45,999",
    originalPrice: "Rs.49,999",
    rating: 4.4,
    reviewCount: 190,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    href: "/products/laptop-asus-amd-ryzen",
    isNew: false,
    discount: 8,
    inStock: true,
    viewedAt: new Date(Date.now() - 12 * 60 * 60 * 1000) // 12 hours ago
  },
  {
    id: 6,
    name: "iPhone 15 Pro Max",
    category: "SMARTPHONE",
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system. Experience premium mobile technology.",
    currentPrice: "Rs.1,29,999",
    originalPrice: "Rs.1,39,999",
    rating: 4.8,
    reviewCount: 520,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    href: "/products/iphone-15-pro-max",
    isNew: true,
    discount: 7,
    inStock: true,
    viewedAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
  },
  {
    id: 7,
    name: "Nike Air Max 270",
    category: "FOOTWEAR",
    description: "Comfortable running shoes with Air Max technology. Perfect for daily wear and athletic activities.",
    currentPrice: "Rs.8,999",
    originalPrice: "Rs.11,999",
    rating: 4.6,
    reviewCount: 340,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    href: "/products/nike-air-max-270",
    isNew: false,
    discount: 25,
    inStock: true,
    viewedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
  },
  {
    id: 8,
    name: "Designer Kurta Set",
    category: "FASHION",
    description: "Elegant designer kurta set with intricate embroidery. Perfect for special occasions and celebrations.",
    currentPrice: "Rs.3,999",
    originalPrice: "Rs.5,999",
    rating: 4.3,
    reviewCount: 180,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    href: "/products/designer-kurta-set",
    isNew: false,
    discount: 33,
    inStock: true,
    viewedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
  }
]

const RecentlyViewedPage = () => {
  const [wishlist, setWishlist] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("recent")
  const [showFilters, setShowFilters] = useState(false)

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(recentlyViewedProducts.map(p => p.category)))]

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  // Filter and sort products
  const filteredAndSortedProducts = recentlyViewedProducts
    .filter(product => selectedCategory === "all" || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "recent":
          return b.viewedAt.getTime() - a.viewedAt.getTime()
        case "oldest":
          return a.viewedAt.getTime() - b.viewedAt.getTime()
        case "price-low":
          return parseInt(a.currentPrice.replace(/[^\d]/g, "")) - parseInt(b.currentPrice.replace(/[^\d]/g, ""))
        case "price-high":
          return parseInt(b.currentPrice.replace(/[^\d]/g, "")) - parseInt(a.currentPrice.replace(/[^\d]/g, ""))
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
    
    const diffInWeeks = Math.floor(diffInDays / 7)
    return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`
  }

  const clearAllHistory = () => {
    // In a real app, this would call an API to clear the user's recently viewed history
    console.log("Clear all recently viewed history")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <LocalizedClientLink
                href="/account"
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Account
              </LocalizedClientLink>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Recently Viewed Products</h1>
                <p className="text-sm text-gray-600 mt-1">
                  {recentlyViewedProducts.length} products viewed recently
                </p>
              </div>
            </div>
            
            <button
              onClick={clearAllHistory}
              className="flex items-center text-red-600 hover:text-red-700 transition-colors duration-200"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear History
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === "all" ? "All Categories" : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="recent">Most Recent</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Clock className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recently viewed products</h3>
            <p className="text-gray-600 mb-6">Start browsing products to see them here</p>
            <LocalizedClientLink
              href="/products"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Browse Products
            </LocalizedClientLink>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredAndSortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  initial={{ y: 0, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border relative transition-all duration-300 shadow-sm hover:shadow-xl"
                  style={{
                    borderColor: "rgb(90 26 211 / 20%)",
                    borderWidth: "1px",
                  }}
                >
                  {/* Product Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          target.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                    </motion.div>
                    
                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hidden">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xl">📦</span>
                        </div>
                        <span className="text-gray-500 text-xs">Product Image</span>
                      </div>
                    </div>
                    
                    {/* Overlay with action buttons */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors duration-200">
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                      {product.inStock && (
                        <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors duration-200">
                          <ShoppingCart className="w-4 h-4 text-white" />
                        </button>
                      )}
                    </div>
                    
                    {/* Heart Icon */}
                    <button 
                      className={`absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 ${
                        wishlist.includes(product.id) 
                          ? 'bg-red-500 text-white scale-110' 
                          : 'hover:bg-white hover:scale-110'
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        toggleWishlist(product.id)
                      }}
                    >
                      <Heart className={`w-5 h-5 transition-all duration-300 ${
                        wishlist.includes(product.id) 
                          ? 'text-white fill-current' 
                          : 'text-gray-600 hover:text-red-500'
                      }`} />
                    </button>
                    
                    {/* Status Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {/* New Badge */}
                      {product.isNew && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg"
                        >
                          NEW
                        </motion.div>
                      )}
                      
                      {/* Discount Badge */}
                      {product.discount > 0 && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                          className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg"
                        >
                          -{product.discount}%
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Out of Stock Badge */}
                    {!product.inStock && (
                      <div className="absolute bottom-4 left-4 bg-gray-800 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                        Out of Stock
                      </div>
                    )}

                    {/* Viewed Time Badge */}
                    <div className="absolute bottom-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                      {formatTimeAgo(product.viewedAt)}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-5">
                    {/* Category */}
                    <p className="text-xs text-gray-500 font-bold mb-2 tracking-wide">
                      {product.category}
                    </p>
                    
                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-900 ml-2">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">
                        ({product.reviewCount})
                      </span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl font-bold text-gray-900">
                        {product.currentPrice}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    {/* View Details Button */}
                    <LocalizedClientLink href={product.href}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        View Details
                      </motion.button>
                    </LocalizedClientLink>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default RecentlyViewedPage 