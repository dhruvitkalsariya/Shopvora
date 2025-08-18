"use client"

import { motion } from "framer-motion"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { useState, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface Product {
  id: string
  title: string
  handle: string
  thumbnail?: string
  price_range: {
    min_price: {
      amount: number
      currency_code: string
    }
    max_price: {
      amount: number
      currency_code: string
    }
  }
  variants: Array<{
    id: string
    title: string
    prices: Array<{
      amount: number
      currency_code: string
    }>
  }>
}

interface PopularProductsProps {
  region: any
}

// Fallback price formatting function
const formatPrice = (amount: number, currencyCode: string = "INR") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode.toUpperCase(),
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount / 100) // Assuming amount is in cents
}

const PopularProducts = ({ region }: PopularProductsProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [wishlist, setWishlist] = useState<string[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products?limit=8&sort=popularity')
        const data = await response.json()
        setProducts(data.products || [])
      } catch (error) {
        console.error('Error fetching products:', error)
        // Fallback to mock data if API fails
        setProducts(mockProducts)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const toggleWishlist = (productId: string) => {
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

  // Mock products for fallback
  const mockProducts: Product[] = [
    {
      id: "1",
      title: "Premium Wireless Headphones",
      handle: "premium-wireless-headphones",
      thumbnail: "/images/products/headphones.jpg",
      price_range: {
        min_price: { amount: 299900, currency_code: "inr" },
        max_price: { amount: 299900, currency_code: "inr" }
      },
      variants: [{
        id: "1",
        title: "Default",
        prices: [{ amount: 299900, currency_code: "inr" }]
      }]
    },
    {
      id: "2",
      title: "Smart Fitness Watch",
      handle: "smart-fitness-watch",
      thumbnail: "/images/products/watch.jpg",
      price_range: {
        min_price: { amount: 499900, currency_code: "inr" },
        max_price: { amount: 499900, currency_code: "inr" }
      },
      variants: [{
        id: "2",
        title: "Default",
        prices: [{ amount: 499900, currency_code: "inr" }]
      }]
    },
    {
      id: "3",
      title: "Organic Cotton T-Shirt",
      handle: "organic-cotton-tshirt",
      thumbnail: "/images/products/tshirt.jpg",
      price_range: {
        min_price: { amount: 89900, currency_code: "inr" },
        max_price: { amount: 89900, currency_code: "inr" }
      },
      variants: [{
        id: "3",
        title: "Default",
        prices: [{ amount: 89900, currency_code: "inr" }]
      }]
    },
    {
      id: "4",
      title: "Premium Coffee Maker",
      handle: "premium-coffee-maker",
      thumbnail: "/images/products/coffee-maker.jpg",
      price_range: {
        min_price: { amount: 399900, currency_code: "inr" },
        max_price: { amount: 399900, currency_code: "inr" }
      },
      variants: [{
        id: "4",
        title: "Default",
        prices: [{ amount: 399900, currency_code: "inr" }]
      }]
    }
  ]

  const displayProducts = loading ? mockProducts : products

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Popular Products
            </h2>
            <p className="text-lg text-gray-600">
              Trending products loved by our customers
            </p>
          </div>
          <LocalizedClientLink
            href="/products"
            className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-1"
          >
            <span>See All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </LocalizedClientLink>
        </motion.div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-64 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {displayProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-100">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                    </div>
                    
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
                        wishlist.includes(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                    </button>

                    {/* Quick Add to Cart */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <LocalizedClientLink href={`/products/${product.handle}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                        {product.title}
                      </h3>
                    </LocalizedClientLink>

                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">(128)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">
                          {formatPrice(product.price_range.min_price.amount, product.price_range.min_price.currency_code)}
                        </span>
                        {product.price_range.max_price.amount > product.price_range.min_price.amount && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.price_range.max_price.amount, product.price_range.max_price.currency_code)}
                          </span>
                        )}
                      </div>
                      
                      {/* Discount Badge */}
                      {product.price_range.max_price.amount > product.price_range.min_price.amount && (
                        <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                          {Math.round(((product.price_range.max_price.amount - product.price_range.min_price.amount) / product.price_range.max_price.amount) * 100)}% OFF
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default PopularProducts 