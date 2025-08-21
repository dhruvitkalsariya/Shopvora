"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { useState } from "react"
import "./top-deals.css"

// Top Deals product data with tags
const topDealsData = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    category: "Electronics",
    dealTag: "HOT DEAL",
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
    dealTag: "BEST SELLER",
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
    dealTag: "FLASH SALE",
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
    dealTag: "TRENDING",
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
    dealTag: "LIMITED TIME",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    href: "/category/womens-clothing",
    discountText: "20-60% OFF",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200"
  }
]

const TopDeals = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        duration: 0.6,
        ease: "easeOut" as const
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

  return (
    <section className="w-full py-16 sm:px-4 md:px-8">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10"
        >
          <motion.h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-0">
            Top Deals
          </motion.h2>
          <motion.div>
            <LocalizedClientLink
              href="/deals"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 group"
            >
              <span className="mr-2">See All </span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </LocalizedClientLink>
          </motion.div>
        </motion.div>

        {/* Top Deals Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {topDealsData.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              onHoverStart={() => setHoveredCard(product.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <LocalizedClientLink href={product.href} className="block">
                <div className={`relative rounded-2xl p-6 border-2 ${product.borderColor} transition-all duration-500 group-hover:shadow-xl group-hover:shadow-purple-200/50 group-hover:border-purple-400 overflow-hidden h-full`} style={{ backgroundColor: product.bgColor }}>
                  {/* Category Tag - Top Left */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-purple-600 text-xs font-bold rounded-full shadow-md border border-purple-100">
                      {product.category}
                    </span>
                  </div>

                  {/* Deal Tag - Top Right */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-red-300/50">
                      {product.dealTag}
                    </span>
                  </div>

                  {/* Sparkle Icon for Hot Deals */}
                  {product.dealTag === "HOT DEAL" && (
                    <div className="absolute top-12 right-4 z-20">
                      <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
                    </div>
                  )}

                  {/* Product Image Container */}
                  <div className="relative w-full h-48 md:h-52 lg:h-56 mb-6 rounded-xl bg-white shadow-md overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        priority={index < 3}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=${encodeURIComponent(product.title)}`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-center text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 leading-tight mb-3">
                    {product.title}
                  </h3>

                  {/* Discount Text */}
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-md">
                      {product.discountText}
                    </span>
                  </div>

                  {/* Explore Collection Button */}
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:from-purple-700 group-hover:to-pink-700">
                      <span className="mr-2">Show Deals</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-16 h-16 bg-purple-200 rounded-full opacity-20"
                    animate={{
                      scale: hoveredCard === product.id ? 1.3 : 1,
                      rotate: hoveredCard === product.id ? 180 : 0
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </LocalizedClientLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TopDeals