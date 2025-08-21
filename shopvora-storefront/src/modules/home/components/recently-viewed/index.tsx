"use client"

import { motion } from "framer-motion"
import { ArrowRight, Heart, Eye, ShoppingCart, Star } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useCustomer } from "@lib/hooks/use-customer"

// Sample recently viewed products data
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
  }
]

const RecentlyViewed = () => {
  const { isLoggedIn, isLoading } = useCustomer()
  const [wishlist, setWishlist] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)

  // Check if user is logged in and has recently viewed products
  useEffect(() => {
    if (isLoggedIn && recentlyViewedProducts.length > 0) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isLoggedIn])

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
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const cardHoverVariants = {
    initial: { 
      y: 0,
      scale: 1
    },
    hover: { 
      y: -12,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  }

  const imageHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.08,
      transition: {
        duration: 0.4
      }
    }
  }

  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  // Don't render if user is not logged in or no recently viewed products
  if (isLoading) {
    return null // Show loading state
  }

  if (!isVisible) {
    return null
  }

  return (
    <section 
      className="w-full py-16 sm:px-4 md:px-8"
      style={{
        backgroundColor: 'rgba(219, 208, 253, 0.4)' // DBD0FD with 40% opacity - same as Explore New Collection
      }}
    >
      <div className="w-full mx-auto">
        {/* Header Section - Same as Explore New Collection */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-0"
            style={{
              background: 'linear-gradient(135deg, #2A1454 0%, #6B46C1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Recently Viewed
          </motion.h2>    

          {/* See All Recently Viewed Link */}
          <LocalizedClientLink
            href="/account/recently-viewed"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 group"
          >
            <span className="mr-2">See All </span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </LocalizedClientLink>
        </motion.div>

        {/* Products Grid - Same card structure as Popular Products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8"
        >
          {recentlyViewedProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              initial="initial"
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white rounded-2xl overflow-hidden border relative transition-all duration-300"
                style={{
                  borderColor: "rgb(90 26 211 / 50%)",
                  borderWidth: "2px",
                }}
                whileHover={{
                  boxShadow: "0 8px 32px 0 rgba(90,26,211,0.15)",
                }}
              >
                {/* Product Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <motion.div
                    variants={imageHoverVariants}
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
                  <motion.div
                    variants={buttonVariants}
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                  >
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors duration-200">
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                    {product.inStock && (
                      <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors duration-200">
                        <ShoppingCart className="w-4 h-4 text-white" />
                      </button>
                    )}
                  </motion.div>
                  
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

                  {/* Recently Viewed Badge */}
                  <div className="absolute bottom-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    Recently Viewed
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
      </div>
    </section>
  )
}

export default RecentlyViewed 