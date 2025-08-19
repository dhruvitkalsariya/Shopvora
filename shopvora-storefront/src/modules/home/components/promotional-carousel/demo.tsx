"use client"

import PromotionalCarousel from "./index"
import EnhancedCarousel from "./enhanced-carousel"
import ProductCarousel from "./product-carousel"
import { promotionalCarouselData, seasonalCarouselData, minimalCarouselData } from "./carousel-data"

// Sample product data for the product carousel
const sampleProducts = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.5,
    reviewCount: 128,
    badge: "BEST SELLER",
    discount: 31,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 89,
    badge: "NEW",
    discount: 20,
  },
  {
    id: "3",
    name: "Premium Coffee Maker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop",
    rating: 4.3,
    reviewCount: 67,
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 156,
    discount: 20,
  },
  {
    id: "5",
    name: "Wireless Charging Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    rating: 4.2,
    reviewCount: 43,
  },
  {
    id: "6",
    name: "Smart Home Hub",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 92,
    badge: "TRENDING",
    discount: 28,
  },
  {
    id: "7",
    name: "Ultra HD Webcam",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 78,
  },
  {
    id: "8",
    name: "Gaming Mouse",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    rating: 4.9,
    reviewCount: 203,
    badge: "GAMING",
    discount: 22,
  },
]

export default function CarouselDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Carousel Component Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different carousel variants with advanced features including auto-play, 
            swipe gestures, keyboard navigation, and customizable themes.
          </p>
        </div>

        {/* Promotional Carousel */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Promotional Carousel
            </h2>
            <p className="text-gray-600">
              Eye-catching promotional banners with 3D text effects and animated backgrounds.
            </p>
          </div>
          <PromotionalCarousel />
        </section>

        {/* Seasonal Theme Carousel */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Seasonal Theme Carousel
            </h2>
            <p className="text-gray-600">
              Holiday and seasonal themed carousel with different color schemes.
            </p>
          </div>
          <EnhancedCarousel
            slides={seasonalCarouselData}
            height="h-[350px]"
            autoPlayInterval={4000}
            showControls={true}
            showIndicators={true}
            showProgressBar={true}
            showPlayPause={true}
            enableSwipe={true}
            className=""
          />
        </section>

        {/* Minimal Theme Carousel */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Minimal Theme Carousel
            </h2>
            <p className="text-gray-600">
              Clean and minimal design for a more subtle promotional approach.
            </p>
          </div>
          <EnhancedCarousel
            slides={minimalCarouselData}
            height="h-[300px]"
            autoPlayInterval={6000}
            showControls={true}
            showIndicators={true}
            showProgressBar={false}
            showPlayPause={false}
            enableSwipe={true}
            className=""
          />
        </section>

        {/* Product Carousel */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Product Carousel
            </h2>
            <p className="text-gray-600">
              Showcase products in a grid layout with ratings, prices, and action buttons.
            </p>
          </div>
          <ProductCarousel
            products={sampleProducts}
            title="Featured Products"
            subtitle="Discover our most popular items"
            height="h-[500px]"
            autoPlayInterval={5000}
            showControls={true}
            showIndicators={true}
            showProgressBar={true}
            showPlayPause={true}
            enableSwipe={true}
            itemsPerSlide={4}
          />
        </section>

        {/* Custom Configuration Examples */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Custom Configurations
            </h2>
            <p className="text-gray-600">
              Examples of different carousel configurations and features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Auto-play disabled */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Manual Control (No Auto-play)
              </h3>
              <EnhancedCarousel
                slides={promotionalCarouselData.slice(0, 3)}
                height="h-[250px]"
                autoPlayInterval={5000}
                showControls={true}
                showIndicators={true}
                showProgressBar={false}
                showPlayPause={false}
                enableSwipe={true}
                className=""
              />
            </div>

            {/* Swipe disabled */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                No Swipe Gestures
              </h3>
              <EnhancedCarousel
                slides={seasonalCarouselData}
                height="h-[250px]"
                autoPlayInterval={4000}
                showControls={true}
                showIndicators={true}
                showProgressBar={true}
                showPlayPause={true}
                enableSwipe={false}
                className=""
              />
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Carousel Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🎯 Auto-play</h3>
              <p className="text-gray-600 text-sm">
                Automatic slide transitions with configurable intervals
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">👆 Touch & Swipe</h3>
              <p className="text-gray-600 text-sm">
                Mobile-friendly swipe gestures for navigation
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">⌨️ Keyboard Navigation</h3>
              <p className="text-gray-600 text-sm">
                Arrow keys and spacebar for accessibility
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🎨 Customizable Themes</h3>
              <p className="text-gray-600 text-sm">
                Multiple color schemes and styling options
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📱 Responsive Design</h3>
              <p className="text-gray-600 text-sm">
                Optimized for all screen sizes and devices
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">♿ Accessibility</h3>
              <p className="text-gray-600 text-sm">
                ARIA labels and keyboard support included
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🎭 Smooth Animations</h3>
              <p className="text-gray-600 text-sm">
                Framer Motion powered transitions and effects
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">⚙️ Configurable Controls</h3>
              <p className="text-gray-600 text-sm">
                Show/hide navigation, indicators, and progress bars
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🔄 Loop Support</h3>
              <p className="text-gray-600 text-sm">
                Seamless infinite scrolling through slides
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 