"use client"

import HeroBanner from "./hero-banner"
import ProductCard from "./product-card"
import ProductGrid from "./product-grid"
import { sampleProducts } from "./sample-products"

// Test component to verify all components work
export default function TestComponents() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Component Test Page</h1>
      
      {/* Test Hero Banner */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Hero Banner Test</h2>
        <HeroBanner />
      </section>

      {/* Test Single Product Card */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Single Product Card Test</h2>
        <div className="max-w-sm">
          <ProductCard {...sampleProducts[0]} />
        </div>
      </section>

      {/* Test Product Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Product Grid Test</h2>
        <ProductGrid 
          products={sampleProducts.slice(0, 3)}
          title="Test Products"
          showViewAll={true}
        />
      </section>
    </div>
  )
} 