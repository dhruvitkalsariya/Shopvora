"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const categories = [
  {
    id: 1,
    name: "Skincare",
    image: "/images/Top Categories/Skincare-Categories.png",
    href: "/categories/skincare",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
    borderColor: "border-pink-200"
  },
  {
    id: 2,
    name: "Electronic",
    image: "/images/Top Categories/Electroinc-Categories.png",
    href: "/categories/electronics",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    borderColor: "border-blue-200"
  },
  {
    id: 3,
    name: "Footwear",
    image: "/images/Top Categories/Footwear-Categories.png",
    href: "/categories/footwear",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    borderColor: "border-amber-200"
  },
  {
    id: 4,
    name: "Laptop & PC",
    image: "/images/Top Categories/Laptop&pc-Categories.png",
    href: "/categories/laptop-pc",
    bgColor: "bg-gradient-to-br from-gray-50 to-slate-50",
    borderColor: "border-gray-200",
    icon: "💻"
  },
  {
    id: 5,
    name: "Smartphone",
    image: "/images/Top Categories/Smartphone-Categories.png",
    href: "/categories/smartphones",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    icon: "📱"
  },
  {
    id: 6,
    name: "Fashion",
    image: "/images/Top Categories/Fashion-Categories.png",
    href: "/categories/fashion",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    icon: "👕"
  }
]

const ExploreCategories = () => {
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
              Explore Top Categories
            </h2>
          </div>
          <LocalizedClientLink
            href="/categories"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 group"
          >
            <span>See All</span>
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </LocalizedClientLink>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <LocalizedClientLink
                href={category.href}
                className="block group"
              >
                <div className={`relative rounded-xl p-4 md:p-5 lg:p-6 ${category.bgColor} border ${category.borderColor} transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-100 group-hover:border-purple-300`}>
                  {/* Category Image */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-3 md:mb-4 rounded-full bg-white shadow-sm border-2 border-white flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, (max-width: 1024px) 80px, 96px"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-center text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                    {category.name}
                  </h3>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </LocalizedClientLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ExploreCategories 