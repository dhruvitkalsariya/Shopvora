"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface ProductCardProps {
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
  className?: string
}

export default function ProductCard({
  id,
  image,
  alt,
  rating,
  reviewCount,
  category,
  name,
  description,
  originalPrice,
  currentPrice,
  className = ""
}: ProductCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/products/${id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-sm font-semibold text-gray-800">
            {rating} ({reviewCount})
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs font-medium text-purple-600 uppercase tracking-wider mb-2">
          {category}
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>
          {description}
        </p>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          <span className="text-lg text-gray-500 line-through">
            {originalPrice}
          </span>
          <span className="text-xl font-bold text-purple-600">
            {currentPrice}
          </span>
        </div>
      </div>
    </motion.div>
  )
} 