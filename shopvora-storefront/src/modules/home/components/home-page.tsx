"use client"

import HeroBanner from "./hero-banner"
import ProductGrid from "./product-grid"
import TopDeals from "./top-deals"
import { sampleProducts, collectionProducts } from "./sample-products"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="w-full">
        <HeroBanner />
      </section>

      {/* Top Deals Section */}
      <section className="w-full">
        <TopDeals />
      </section>

      {/* Product Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <ProductGrid 
          products={sampleProducts}
          title="Featured Products"
          showViewAll={true}
        />
      </section>

      {/* Explore New Collection Section */}
      <section className="container mx-auto px-4 py-16">
        <ProductGrid 
          products={collectionProducts}
          title="Explore new Collection"
          showViewAll={true}
        />
      </section>

      {/* Additional Spacing */}
      <div className="h-16"></div>
    </div>
  )
} 