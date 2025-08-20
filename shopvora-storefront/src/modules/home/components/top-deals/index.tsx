"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import "./top-deals.css"

// Top Deals data based on the Figma design
const topDealsData = [
  {
    id: 1,
    name: "Apple iPads",
    image: "/images/Top Categories/Electronics-Categories.png", // You can replace with actual iPad image
    href: "/collections/apple-ipads",
    discount: "10-40% OFF",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    imageFallback: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Puma, Adidas...",
    image: "/images/Top Categories/Footwear-Categories.png",
    href: "/collections/sports-shoes",
    discount: "20-40% OFF",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    imageFallback: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Apple iPads",
    image: "/images/Top Categories/Electronics-Categories.png",
    href: "/collections/apple-ipads-accessories",
    discount: "30-50% OFF",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    imageFallback: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Kurta Sets",
    image: "/images/Top Categories/Fashion-Categories.png",
    href: "/collections/kurta-sets",
    discount: "Up To 70% OFF",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    imageFallback: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Tops, Jeans...",
    image: "/images/Top Categories/Fashion-Categories.png",
    href: "/collections/tops-jeans",
    discount: "20-80% OFF",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
    borderColor: "border-pink-200",
    imageFallback: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
]

const TopDeals = () => {
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
      y: 20, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 md:mb-12 lg:mb-16"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-6 sm:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Top Deals
              </h2>
            </div>
            <LocalizedClientLink
              href="/collections/top-deals"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 group"
            >
              <span className="mr-2">See All</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </LocalizedClientLink>
          </motion.div>

          {/* Top Deals Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {topDealsData.map((deal, index) => (
              <motion.div
                key={deal.id}
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
                custom={index}
              >
                <LocalizedClientLink
                  href={deal.href}
                  className="block group"
                >
                  <div className={`relative rounded-2xl p-6 ${deal.bgColor} border-2 ${deal.borderColor} transition-all duration-500 group-hover:shadow-xl group-hover:shadow-purple-200/50 group-hover:border-purple-400 overflow-hidden`}>
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                        {deal.discount}
                      </span>
                    </div>

                    {/* Product Image Container */}
                    <div className="relative w-full h-48 md:h-52 lg:h-56 mb-6 rounded-xl bg-white shadow-md overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={deal.image}
                          alt={deal.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = deal.imageFallback;
                          }}
                        />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Product Name */}
                    <h3 className="text-center text-sm md:text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 leading-tight line-clamp-2 mb-3">
                      {deal.name}
                    </h3>
                    
                    {/* Shop Now Button */}
                    <div className="text-center">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                        Shop now!
                      </span>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </div>
                </LocalizedClientLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TopDeals 