"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, ShoppingBag } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { sampleCollections, type Collection } from "../sample-products"

interface CollectionCardProps {
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
  index: number
}

function CollectionCard({
  id,
  image,
  alt,
  title,
  description,
  productCount,
  badge,
  category,
  discountRange,
  sampleProducts,
  index
}: CollectionCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Badge - Only show on hover */}
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
          >
            {badge}
          </motion.div>
        </div>
      )}

      {/* Collection Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Product Count Badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
          <div className="flex items-center gap-1">
            <ShoppingBag className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-semibold text-gray-800">
              {productCount}
            </span>
            <span className="text-xs text-gray-500">items</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg"
          >
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
              {category}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Collection Content */}
      <div className="p-6">
        {/* Collection Title and Discount Row */}
        <div className="flex items-start justify-between mb-3">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2 flex-1 mr-4"
          >
            {title}
          </motion.h3>
          
          {/* Discount Badge - Always visible, positioned on right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.6 }}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex-shrink-0"
          >
            {discountRange}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.6 }}
          className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2"
        >
          {description}
        </motion.p>

        {/* Sample Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.7 }}
          className="mb-4"
        >
          <div className="flex flex-wrap gap-1">
            {sampleProducts.slice(0, 3).map((product, idx) => (
              <span
                key={idx}
                className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium"
              >
                {product}
              </span>
            ))}
            {sampleProducts.length > 3 && (
              <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                +{sampleProducts.length - 3} more
              </span>
            )}
          </div>
        </motion.div>

        {/* Explore Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <span>Explore Collection</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-2 -right-2 w-20 h-20 bg-purple-200 rounded-full opacity-20"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 180 : 0
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  )
}

export default function ExploreNewCollection() {
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
    <section 
      className="w-full py-16 sm:px-4 md:px-8"
      style={{
        backgroundColor: 'rgba(219, 208, 253, 0.4)' // DBD0FD with 40% opacity
      }}
    >
      <div className="w-full mx-auto">
        {/* Header Section */}
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
            Explore New Collections
          </motion.h2>    

          {/* See All Collections Link */}
          <LocalizedClientLink
            href="/collections"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 group"
          >
            <span className="mr-2">See All Collections</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </LocalizedClientLink>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {sampleCollections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              {...collection}
              index={index}
            />
          ))}
        </motion.div>        
      </div>
    </section>
  )
} 