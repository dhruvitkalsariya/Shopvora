import ProductGrid from "@modules/home/components/product-grid"
import { sampleProducts, collectionProducts } from "@modules/home/components/sample-products"

export default function ProductGridDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Featured Products Section */}
        <section className="mb-16">
          <ProductGrid 
            products={sampleProducts}
            title="Featured Products"
            showViewAll={true}
          />
        </section>

        {/* Explore New Collection Section */}
        <section>
          <ProductGrid 
            products={collectionProducts}
            title="Explore new Collection"
            showViewAll={true}
          />
        </section>
      </div>
    </div>
  )
} 