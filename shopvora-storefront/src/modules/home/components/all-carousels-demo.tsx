"use client"

import { useState } from "react"
import EnhancedCarousel from "./promotional-carousel/enhanced-carousel"
import HeroCarousel from "./hero/hero-carousel"
import ProductCarousel from "./promotional-carousel/product-carousel"
import { promotionalCarouselData } from "./promotional-carousel/carousel-data"
import { heroCarouselData } from "./hero/hero-carousel-data"

export default function AllCarouselsDemo() {
  const [activeCarousel, setActiveCarousel] = useState<'hero' | 'enhanced' | 'product'>('hero')

  // Sample product data for Product Carousel
  const sampleProducts = [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
      reviewCount: 128,
      badge: "BEST SELLER",
      discount: 30
    },
    {
      id: "2",
      name: "Premium Smart Watch",
      price: 199.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      reviewCount: 89,
      badge: "NEW",
      discount: 33
    },
    {
      id: "3",
      name: "Laptop Stand Pro",
      price: 49.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.3,
      reviewCount: 156,
      badge: "SALE",
      discount: 37
    },
    {
      id: "4",
      name: "Wireless Charging Pad",
      price: 29.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      reviewCount: 203,
      badge: "POPULAR",
      discount: 40
    },
    {
      id: "5",
      name: "Gaming Mouse RGB",
      price: 69.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      reviewCount: 94,
      badge: "GAMING",
      discount: 30
    },
    {
      id: "6",
      name: "Mechanical Keyboard",
      price: 129.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      reviewCount: 67,
      badge: "PREMIUM",
      discount: 28
    },
    {
      id: "7",
      name: "USB-C Hub",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.4,
      reviewCount: 178,
      badge: "ESSENTIAL",
      discount: 33
    },
    {
      id: "8",
      name: "Bluetooth Speaker",
      price: 79.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      reviewCount: 142,
      badge: "PORTABLE",
      discount: 33
    }
  ]

  const carouselConfigs = {
    hero: {
      title: "Hero Carousel",
      subtitle: "Click on images to navigate to different pages",
      color: "from-blue-600 to-purple-600",
      description: "Perfect for main hero sections with category navigation"
    },
    enhanced: {
      title: "Enhanced Carousel",
      subtitle: "Animated backgrounds with promotional content",
      color: "from-purple-600 to-pink-600",
      description: "Great for promotional content with animated effects"
    },
    product: {
      title: "Product Carousel",
      subtitle: "Product grid with ratings, prices, and add to cart",
      color: "from-green-600 to-teal-600",
      description: "Ideal for showcasing products with detailed information"
    }
  }

  const currentConfig = carouselConfigs[activeCarousel]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Carousel Components
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your project has 3 different carousel components. Choose one to view:
          </p>
          
          {/* Carousel Selection */}
          <div className="flex justify-center space-x-4 mb-8">
            {Object.entries(carouselConfigs).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setActiveCarousel(key as any)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCarousel === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {config.title}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Display */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className={`bg-gradient-to-r ${currentConfig.color} text-white p-4`}>
            <h2 className="text-2xl font-bold">{currentConfig.title}</h2>
            <p className="text-white/80">{currentConfig.subtitle}</p>
          </div>
          
          <div className="h-[600px]">
            {activeCarousel === 'hero' && (
              <HeroCarousel
                slides={heroCarouselData}
                height="h-full"
                autoPlayInterval={5000}
                showControls={true}
                showIndicators={true}
                showProgressBar={true}
                showPlayPause={true}
                enableSwipe={true}
              />
            )}
            
            {activeCarousel === 'enhanced' && (
              <EnhancedCarousel
                slides={promotionalCarouselData}
                height="h-full"
                autoPlayInterval={5000}
                showControls={true}
                showIndicators={true}
                showProgressBar={true}
                showPlayPause={true}
                enableSwipe={true}
              />
            )}
            
            {activeCarousel === 'product' && (
              <ProductCarousel
                products={sampleProducts}
                title="Featured Products"
                subtitle="Discover our best-selling items"
                height="h-full"
                autoPlayInterval={4000}
                showControls={true}
                showIndicators={true}
                showProgressBar={true}
                showPlayPause={true}
                enableSwipe={true}
                itemsPerSlide={4}
              />
            )}
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Carousel Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-600">Hero Carousel</th>
                  <th className="text-center py-3 px-4 font-semibold text-purple-600">Enhanced Carousel</th>
                  <th className="text-center py-3 px-4 font-semibold text-green-600">Product Carousel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Best Use Case</td>
                  <td className="py-3 px-4 text-center">Main hero section</td>
                  <td className="py-3 px-4 text-center">Promotional content</td>
                  <td className="py-3 px-4 text-center">Product showcase</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Image Navigation</td>
                  <td className="py-3 px-4 text-center">✅ Click to navigate</td>
                  <td className="py-3 px-4 text-center">❌ CTA buttons only</td>
                  <td className="py-3 px-4 text-center">❌ Add to cart only</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Background Style</td>
                  <td className="py-3 px-4 text-center">High-quality images</td>
                  <td className="py-3 px-4 text-center">Animated gradients</td>
                  <td className="py-3 px-4 text-center">Product cards</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Content Type</td>
                  <td className="py-3 px-4 text-center">Categories & navigation</td>
                  <td className="py-3 px-4 text-center">Promotional messages</td>
                  <td className="py-3 px-4 text-center">Product details</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Interactive Elements</td>
                  <td className="py-3 px-4 text-center">Hover effects, badges</td>
                  <td className="py-3 px-4 text-center">Particles, animations</td>
                  <td className="py-3 px-4 text-center">Ratings, prices</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Responsive Design</td>
                  <td className="py-3 px-4 text-center">✅ Full responsive</td>
                  <td className="py-3 px-4 text-center">✅ Full responsive</td>
                  <td className="py-3 px-4 text-center">✅ Grid responsive</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Auto-play Controls</td>
                  <td className="py-3 px-4 text-center">✅ All controls</td>
                  <td className="py-3 px-4 text-center">✅ All controls</td>
                  <td className="py-3 px-4 text-center">✅ All controls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Hero Carousel</h4>
            <p className="text-gray-600 mb-4">
              Use for main hero sections where you want users to click on images to navigate to different categories or pages.
            </p>
            <code className="bg-gray-100 px-3 py-1 rounded text-sm block">
              import HeroSection from "@modules/home/components/hero"
            </code>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Enhanced Carousel</h4>
            <p className="text-gray-600 mb-4">
              Use for promotional content with animated backgrounds and seasonal themes.
            </p>
            <code className="bg-gray-100 px-3 py-1 rounded text-sm block">
              import PromotionalCarousel from "@modules/home/components/promotional-carousel"
            </code>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="text-lg font-semibold text-green-600 mb-3">Product Carousel</h4>
            <p className="text-gray-600 mb-4">
              Use for showcasing products with ratings, prices, and add to cart functionality.
            </p>
            <code className="bg-gray-100 px-3 py-1 rounded text-sm block">
              import ProductCarousel from "@modules/home/components/promotional-carousel/product-carousel"
            </code>
          </div>
        </div>
      </div>
    </div>
  )
} 