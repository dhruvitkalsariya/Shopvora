"use client"

import { ArrowRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

// Deal type definition
export type Deal = {
  id: string | number
  image: string
  title: string
  discount: string
  url?: string
}

// Props interface
interface TopDealsProps {
  deals?: Deal[]
  title?: string
  seeAllUrl?: string
}

// Loading skeleton component
const DealCardSkeleton = () => (
  <div className="relative rounded-2xl p-6 bg-white border border-gray-200 animate-pulse">
    <div className="absolute top-4 right-4">
      <div className="w-16 h-6 bg-gray-300 rounded-full"></div>
    </div>
    <div className="w-full h-48 md:h-52 lg:h-56 mb-6 rounded-xl bg-gray-200"></div>
    <div className="h-4 bg-gray-200 rounded mb-3"></div>
    <div className="h-8 bg-gray-200 rounded"></div>
  </div>
)

const TopDeals = ({ 
  deals = [], 
  title = "Top Deals",
  seeAllUrl = "/collections/top-deals"
}: TopDealsProps) => {

  // Show loading skeleton if no deals
  if (deals.length === 0) {
    return (
      <section className="w-full py-16 sm:px-4 md:px-8">
        <div className="w-full mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
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
          </div>

          {/* Loading Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <DealCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-16 sm:px-4 md:px-8">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
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
        </div>

        {/* Top Deals Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {deals.map((deal, index) => (
            <div key={deal.id} className="group">
              <LocalizedClientLink
                href={deal.url || "#"}
                className="block"
                aria-label={`Shop ${deal.title} with ${deal.discount} discount`}
              >
                <div className="relative rounded-2xl p-6 bg-white border border-gray-200 overflow-hidden">
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {deal.discount}
                    </span>
                  </div>

                  {/* Product Image Container */}
                  <div className="relative w-full h-48 md:h-52 lg:h-56 mb-6 rounded-xl bg-white shadow-md overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={deal.image}
                        alt={deal.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 20vw, 20vw"
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Product Title */}
                  <h3 className="text-center text-sm md:text-base font-semibold text-gray-900 leading-tight line-clamp-2 mb-3">
                    {deal.title}
                  </h3>
                  
                  {/* Shop Now Button */}
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#8C30F5] to-[#7C2FD5] text-white text-sm font-semibold rounded-lg shadow-md">
                      Shop now!
                    </span>
                  </div>
                </div>
              </LocalizedClientLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopDeals 