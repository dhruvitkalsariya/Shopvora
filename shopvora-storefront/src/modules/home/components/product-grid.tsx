"use client"

import ProductCard from "./product-card"

interface Product {
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
}

interface ProductGridProps {
  products: Product[]
  title?: string
  showViewAll?: boolean
  className?: string
}

export default function ProductGrid({ 
  products, 
  title, 
  showViewAll = false, 
  className = "" 
}: ProductGridProps) {
  return (
    <section className={`w-full ${className}`}>
      {/* Header */}
      {(title || showViewAll) && (
        <div className="flex items-center justify-between mb-8">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {title}
            </h2>
          )}
          {showViewAll && (
            <button className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200">
              See All
            </button>
          )}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            {...product}
            className="w-full"
          />
        ))}
      </div>
    </section>
  )
} 