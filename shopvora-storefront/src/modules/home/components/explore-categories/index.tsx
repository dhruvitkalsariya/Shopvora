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
    color: "bg-gradient-to-br from-pink-100 to-purple-100"
  },
  {
    id: 2,
    name: "Electronic",
    image: "/images/categories/electronics.jpg",
    href: "/categories/electronics",
    color: "bg-gradient-to-br from-blue-100 to-indigo-100"
  },
  {
    id: 3,
    name: "Footwear",
    image: "/images/categories/footwear.jpg",
    href: "/categories/footwear",
    color: "bg-gradient-to-br from-amber-100 to-orange-100"
  },
  {
    id: 4,
    name: "Laptop & PC",
    image: "/images/categories/laptop.jpg",
    href: "/categories/laptop-pc",
    color: "bg-gradient-to-br from-gray-100 to-slate-100"
  },
  {
    id: 5,
    name: "Smartphone",
    image: "/images/categories/smartphone.jpg",
    href: "/categories/smartphones",
    color: "bg-gradient-to-br from-green-100 to-emerald-100"
  },
  {
    id: 6,
    name: "Fashion",
    image: "/images/categories/fashion.jpg",
    href: "/categories/fashion",
    color: "bg-gradient-to-br from-red-100 to-pink-100"
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing products across all categories with the best deals and offers
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
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
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <LocalizedClientLink
                href={category.href}
                className="block group"
              >
                <div className={`relative rounded-2xl p-6 ${category.color} transition-all duration-300 group-hover:shadow-lg`}>
                  {/* Placeholder for category image */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  </div>
                  
                  <h3 className="text-center font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </LocalizedClientLink>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <LocalizedClientLink
            href="/categories"
            className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <span>See All Categories</span>
            <ArrowRight className="h-5 w-5" />
          </LocalizedClientLink>
        </motion.div>
      </div>
    </section>
  )
}

export default ExploreCategories 