"use client"

import { motion } from "framer-motion"
import { ArrowRight, Heart } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { useState } from "react"

const popularProducts = [
  {
    id: 1,
    name: "Laptop Intel Core i7",
    category: "Laptop & PC",
    description: "High-performance laptop with Intel Core i7 processor, perfect for work and gaming. Features 16GB RAM and 512GB SSD.",
    currentPrice: "Rs.49,999",
    originalPrice: "Rs.51,999",
    rating: 4.5,
    reviewCount: 300,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    href: "/products/laptop-intel-core",
    isNew: false,
    discount: 4
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Fold",
    category: "Smartphone",
    description: "Revolutionary foldable smartphone with 7.6-inch display. Experience the future of mobile technology.",
    currentPrice: "Rs.89,999",
    originalPrice: "Rs.95,999",
    rating: 4.8,
    reviewCount: 450,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    href: "/products/samsung-galaxy-z-series",
    isNew: true,
    discount: 6
  },
  {
    id: 3,
    name: "ASUS ROG Gaming Laptop",
    category: "Laptop & PC",
    description: "Gaming laptop with AMD Ryzen processor and RTX graphics. Built for ultimate gaming performance.",
    currentPrice: "Rs.65,999",
    originalPrice: "Rs.69,999",
    rating: 4.3,
    reviewCount: 280,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    href: "/products/laptop-asus-amd-ryzen",
    isNew: false,
    discount: 6
  },
  {
    id: 4,
    name: "Organic Face Cream",
    category: "Beauty & Skincare",
    description: "Natural organic face cream with vitamin E and aloe vera. Nourishes and hydrates your skin.",
    currentPrice: "Rs.1,299",
    originalPrice: "Rs.1,599",
    rating: 4.2,
    reviewCount: 120,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    href: "/products/boots-cream",
    isNew: false,
    discount: 19
  }
]

const PopularProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Popular Products
            </h2>
          </div>
          <LocalizedClientLink
            href="/products"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 group"
          >
            <span>See All</span>
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </LocalizedClientLink>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {popularProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <LocalizedClientLink href={product.href}>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-purple-300">
                  {/* Product Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hidden">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xl">📦</span>
                        </div>
                        <span className="text-gray-500 text-xs">Product Image</span>
                      </div>
                    </div>
                    
                    {/* Heart Icon */}
                    <button 
                      className={`absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200 z-10 ${
                        wishlist.includes(product.id) 
                          ? 'bg-red-500 text-white' 
                          : 'hover:bg-white'
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        toggleWishlist(product.id)
                      }}
                    >
                      <Heart className={`w-4 h-4 transition-colors duration-200 ${
                        wishlist.includes(product.id) 
                          ? 'text-white fill-current' 
                          : 'text-gray-600 hover:text-red-500'
                      }`} />
                    </button>
                    
                    {/* New Badge */}
                    {product.isNew && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        New
                      </div>
                    )}
                    
                    {/* Discount Badge */}
                    {product.discount > 0 && (
                      <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        -{product.discount}%
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4">
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm font-medium text-gray-900 ml-1">
                          {product.rating}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">
                          ({product.reviewCount})
                        </span>
                      </div>
                    </div>
                    
                    {/* Category */}
                    <p className="text-xs text-gray-500 mb-2 font-medium">
                      {product.category}
                    </p>
                    
                    {/* Product Name */}
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        {product.currentPrice}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </LocalizedClientLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PopularProducts 