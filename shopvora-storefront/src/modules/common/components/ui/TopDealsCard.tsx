"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface TopDealsCardProps {
  id: string | number
  title: string
  category: string
  dealTag: "HOT DEAL" | "BEST SELLER" | "FLASH SALE" | "TRENDING" | "LIMITED TIME"
  image: string
  discountText: string
  href: string
  bgColor?: string
  borderColor?: string
  index?: number
  className?: string
}

const TopDealsCard = ({
  id,
  title,
  category,
  dealTag,
  image,
  discountText,
  href,
  bgColor = "bg-blue-50",
  borderColor = "border-blue-200",
  index = 0,
  className = ""
}: TopDealsCardProps) => {
  const dealTagColors = {
    "HOT DEAL": "from-red-500 to-pink-500",
    "BEST SELLER": "from-purple-500 to-indigo-500",
    "FLASH SALE": "from-red-500 to-orange-500",
    "TRENDING": "from-pink-500 to-red-500",
    "LIMITED TIME": "from-yellow-500 to-orange-500"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${className}`}
    >
      <LocalizedClientLink href={href} className="block">
        <div 
          className={`relative rounded-2xl p-6 border-2 ${borderColor} transition-all duration-500 group-hover:shadow-xl group-hover:shadow-purple-200/50 group-hover:border-purple-400 overflow-hidden h-full ${bgColor}`}
        >
          {/* Category Tag - Top Left */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-purple-600 text-xs font-bold rounded-full shadow-md border border-purple-100">
              {category}
            </span>
          </div>

          {/* Deal Tag - Top Right */}
          <div className="absolute top-4 right-4 z-20">
            <span className={`inline-block px-3 py-1 bg-gradient-to-r ${dealTagColors[dealTag]} text-white text-xs font-bold rounded-full shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-red-300/50`}>
              {dealTag}
            </span>
          </div>

          {/* Sparkle Icon for Hot Deals */}
          {dealTag === "HOT DEAL" && (
            <div className="absolute top-12 right-4 z-20">
              <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
            </div>
          )}

          {/* Product Image Container */}
          <div className="relative w-full h-48 md:h-52 lg:h-56 mb-6 rounded-xl bg-white shadow-md overflow-hidden group-hover:shadow-lg transition-all duration-300">
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 20vw, 20vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                }}
              />
            </div>
          </div>
          
          {/* Product Title */}
          <h3 className="text-center text-sm md:text-base font-semibold text-gray-900 leading-tight line-clamp-2 mb-3">
            {title}
          </h3>
          
          {/* Discount Text */}
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-md">
              {discountText}
            </span>
          </div>
          
          {/* Show Deals Button */}
          <div className="text-center">
            <motion.button
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Show Deals</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Hover Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </LocalizedClientLink>
    </motion.div>
  )
}

export default TopDealsCard 