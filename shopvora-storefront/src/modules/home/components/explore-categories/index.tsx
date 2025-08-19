"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const categories = [
  {
    id: 1,
    name: "Skincare",
    image: "/images/categories/skincare.jpg",
    href: "/categories/skincare",
    color: "bg-gradient-to-br from-pink-100 to-purple-100",
    icon: "🧴"
  },
  {
    id: 2,
    name: "Electronic",
    image: "/images/categories/electronics.jpg",
    href: "/categories/electronics",
    color: "bg-gradient-to-br from-blue-100 to-indigo-100",
    icon: "📺"
  },
  {
    id: 3,
    name: "Footwear",
    image: "/images/categories/footwear.jpg",
    href: "/categories/footwear",
    color: "bg-gradient-to-br from-amber-100 to-orange-100",
    icon: "👟"
  },
  {
    id: 4,
    name: "Laptop & PC",
    image: "/images/categories/laptop.jpg",
    href: "/categories/laptop-pc",
    color: "bg-gradient-to-br from-gray-100 to-slate-100",
    icon: "💻"
  },
  {
    id: 5,
    name: "Smartphone",
    image: "/images/categories/smartphone.jpg",
    href: "/categories/smartphones",
    color: "bg-gradient-to-br from-green-100 to-emerald-100",
    icon: "📱"
  },
  {
    id: 6,
    name: "Fashion",
    image: "/images/categories/fashion.jpg",
    href: "/categories/fashion",
    color: "bg-gradient-to-br from-red-100 to-pink-100",
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
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12"
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
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
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <LocalizedClientLink
                href={category.href}
                className="block group"
              >
                <div className={`relative rounded-2xl p-4 md:p-6 ${category.color} transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-100`}>
                  {/* Category Icon/Image */}
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-white/60 flex items-center justify-center shadow-sm">
                    <span className="text-xl md:text-2xl">{category.icon}</span>
                  </div>
                  
                  <h3 className="text-center text-sm md:text-base font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                    {category.name}
                  </h3>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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