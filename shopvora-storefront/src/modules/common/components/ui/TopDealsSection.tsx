"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import TopDealsCard from "./TopDealsCard"

interface TopDealsData {
  id: string | number
  title: string
  category: string
  dealTag: "HOT DEAL" | "BEST SELLER" | "FLASH SALE" | "TRENDING" | "LIMITED TIME"
  image: string
  discountText: string
  href: string
  bgColor?: string
  borderColor?: string
}

interface TopDealsSectionProps {
  title?: string
  seeAllUrl?: string
  deals: TopDealsData[]
  className?: string
}

const TopDealsSection = ({
  title = "Top Deals",
  seeAllUrl = "/collections/top-deals",
  deals,
  className = ""
}: TopDealsSectionProps) => {
  return (
    <section className={`w-full py-16 sm:px-4 md:px-8 ${className}`}>
      <div className="w-full mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-0">
            {title}
          </h2>
          <LocalizedClientLink
            href={seeAllUrl}
            className="inline-flex items-center text-[#8C30F5] hover:text-[#7C2FD5] font-medium transition-colors duration-300 group"
          >
            <span className="mr-2">See All</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </LocalizedClientLink>
        </motion.div>

        {/* Top Deals Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {deals.map((deal, index) => (
            <TopDealsCard
              key={deal.id}
              {...deal}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopDealsSection 