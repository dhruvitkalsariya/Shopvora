"use client"

import ProductCard, { ProductCardData } from "./ProductCard"

// Example product data
const exampleProducts: ProductCardData[] = [
  {
    id: 1,
    image: "/images/Top Categories/Electronics-Categories.png",
    category: "Electronics",
    brand: "Apple",
    name: "iPad Pro 12.9-inch (5th Generation) with M2 Chip",
    rating: 4.8,
    reviewCount: 1247,
    originalPrice: 1099,
    discountedPrice: 899,
    discountPercentage: 18,
    tags: ["5G", "M2 Chip", "ProMotion", "Face ID"],
    stockCount: 3,
    url: "/products/ipad-pro"
  },
  {
    id: 2,
    image: "/images/Top Categories/Footwear-Categories.png",
    category: "Fashion",
    brand: "Nike",
    name: "Air Jordan 1 Retro High OG",
    rating: 4.6,
    reviewCount: 892,
    originalPrice: 170,
    discountedPrice: 119,
    discountPercentage: 30,
    tags: ["Running", "Comfort", "Style"],
    dealEndTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
    url: "/products/air-jordan-1"
  },
  {
    id: 3,
    image: "/images/Top Categories/Electronics-Categories.png",
    category: "Electronics",
    brand: "Samsung",
    name: "Galaxy S24 Ultra 5G Smartphone",
    rating: 4.7,
    reviewCount: 2156,
    originalPrice: 1299,
    discountedPrice: 999,
    discountPercentage: 23,
    tags: ["5G", "Camera", "S Pen", "Durability"],
    stockCount: 15,
    url: "/products/galaxy-s24-ultra"
  },
  {
    id: 4,
    image: "/images/Top Categories/Fashion-Categories.png",
    category: "Fashion",
    brand: "Adidas",
    name: "Ultraboost 22 Running Shoes",
    rating: 4.5,
    reviewCount: 634,
    originalPrice: 190,
    discountedPrice: 133,
    discountPercentage: 30,
    tags: ["Running", "Comfort", "Energy Return"],
    stockCount: 0, // Out of stock
    url: "/products/ultraboost-22"
  },
  {
    id: 5,
    image: "/images/Top Categories/Fashion-Categories.png",
    category: "Home & Garden",
    brand: "Dyson",
    name: "V15 Detect Absolute Cordless Vacuum",
    rating: 4.9,
    reviewCount: 1873,
    originalPrice: 699,
    discountedPrice: 559,
    discountPercentage: 20,
    tags: ["Cordless", "Laser", "60min Runtime"],
    dealEndTime: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(), // 6 hours from now
    url: "/products/dyson-v15"
  }
]

export default function ProductCardDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Top Deals Product Card Demo
          </h1>
          <p className="text-gray-600">
            Showcasing the ProductCard component with various product states and features
          </p>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {exampleProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Features Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Product Card Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">🎨 Visual Design</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Compact vertical card layout</li>
                <li>• Rounded corners & soft shadows</li>
                <li>• Gradient discount badges</li>
                <li>• Hover animations & effects</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">📊 Product Info</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Category labels & brand names</li>
                <li>• Star ratings & review counts</li>
                <li>• Original & discounted pricing</li>
                <li>• Product tags & features</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">⏰ Deal Features</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Stock status indicators</li>
                <li>• Countdown timers</li>
                <li>• Limited availability alerts</li>
                <li>• Urgency messaging</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">🎯 Interactive Elements</h3>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Wishlist heart button</li>
                <li>• Add to cart CTA</li>
                <li>• Hover animations</li>
                <li>• Click feedback</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">📱 Responsive Design</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Mobile-first approach</li>
                <li>• Flexible grid layouts</li>
                <li>• Touch-friendly interactions</li>
                <li>• Optimized images</li>
              </ul>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-900 mb-2">♿ Accessibility</h3>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• Alt text for images</li>
                <li>• Keyboard navigation</li>
                <li>• Screen reader support</li>
                <li>• High contrast design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 