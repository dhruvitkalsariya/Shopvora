"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface HeroBannerProps {
  className?: string
}

export default function HeroBanner({ className = "" }: HeroBannerProps) {
  const router = useRouter()

  const handleShopNow = () => {
    router.push("/products")
  }

  return (
    <section className={`relative w-full h-[550px] overflow-hidden ${className} my-10`}>
      {/* Background Image Container */}
      <div className="relative w-full h-full">
        {/* Adidas Sneakers Background Image */}
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1402&q=80"
          alt="Adidas Sneakers"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="ml-8 md:ml-16 lg:ml-24 max-w-2xl">
            {/* Top Selling Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-sm font-medium text-gray-600 mb-2"
            >
              Top Selling
            </motion.div>

            {/* Main Product Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-4 leading-tight"
            >
              Product Name Will Be Here
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc vitae rhoncus nisl. Orci vitae habitasse amet integer.
            </motion.p>
            
            {/* Pricing */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-lg text-gray-500 line-through">Rs.2,999</span>
              <span className="text-2xl md:text-3xl font-bold text-purple-600">Rs.1,999</span>
            </motion.div>
            
            {/* Shop Now Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button
                onClick={handleShopNow}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Shop now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 