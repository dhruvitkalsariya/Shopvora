"use client"

import { useState } from "react"
import { Star, Heart, ShoppingCart, Clock, Flame } from "lucide-react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

// Product card data interface
export interface ProductCardData {
  id: string | number
  image: string
  category: string
  brand: string
  name: string
  rating: number
  reviewCount: number
  originalPrice: number
  discountedPrice: number
  discountPercentage: number
  tags: string[]
  stockCount?: number
  dealEndTime?: string // ISO string for countdown
  url?: string
}

interface ProductCardProps {
  product: ProductCardData
  index?: number
}

// Countdown timer component
const CountdownTimer = ({ endTime }: { endTime: string }) => {
  const [timeLeft, setTimeLeft] = useState("")

  useState(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const end = new Date(endTime).getTime()
      const difference = end - now

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        setTimeLeft(`${hours}h ${minutes}m`)
      } else {
        setTimeLeft("Ended")
      }
    }, 1000)

    return () => clearInterval(timer)
  })

  return (
    <div className="flex items-center gap-1 text-xs font-semibold text-red-600">
      <Clock className="h-3 w-3" />
      <span>Ends in {timeLeft}</span>
    </div>
  )
}

// Stock status component
const StockStatus = ({ count }: { count: number }) => {
  if (count <= 0) {
    return (
      <div className="flex items-center gap-1 text-xs font-semibold text-red-600">
        <Flame className="h-3 w-3" />
        <span>Out of Stock</span>
      </div>
    )
  }

  if (count <= 5) {
    return (
      <div className="flex items-center gap-1 text-xs font-semibold text-orange-600">
        <Flame className="h-3 w-3" />
        <span>Only {count} left!</span>
      </div>
    )
  }

  return null
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer">
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Up to {product.discountPercentage}% OFF
        </div>
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setIsWishlisted(!isWishlisted)
        }}
        className="absolute top-4 left-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
      >
        <Heart 
          className={`h-4 w-4 ${
            isWishlisted 
              ? 'text-red-500 fill-red-500' 
              : 'text-gray-600'
          }`}
        />
      </button>

      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 20vw, 20vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }}
          />
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4">
        {/* Category Label */}
        <div className="mb-2">
          <span className="inline-block bg-[#8C30F5]/10 text-[#8C30F5] text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Brand and Product Name */}
        <div className="mb-2">
          <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviewCount})</span>
        </motion.div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-[#8C30F5]">
            ${product.discountedPrice}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        </div>

        {/* Product Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
          {product.tags.length > 3 && (
            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
              +{product.tags.length - 3}
            </span>
          )}
        </motion.div>

        {/* Deal Info */}
        <div className="mb-4">
          {product.stockCount !== undefined && (
            <StockStatus count={product.stockCount} />
          )}
          {product.dealEndTime && (
            <CountdownTimer endTime={product.dealEndTime} />
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-gradient-to-r from-[#8C30F5] to-[#7C2FD5] text-white py-3 px-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard 