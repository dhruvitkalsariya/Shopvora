"use client"

import { useState } from "react"
import { ShoppingCart, Heart, Star, ArrowRight, Plus, Minus, Settings, User, Bell, Sparkles } from "lucide-react"
import { 
  Button, 
  Card, 
  ProductCard, 
  Header, 
  Footer, 
  TopDealsCard, 
  TopDealsSection 
} from "@modules/common/components/ui"

export default function ComponentsShowcase() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState("primary")

  const handleButtonClick = () => {
    console.log("Button clicked!")
  }

  const handleSearch = (query: string) => {
    console.log("Search query:", query)
  }

  // Sample product data for ProductCard
  const sampleProduct = {
    id: "1",
    name: "iPhone 15 Pro Max - 256GB - Natural Titanium",
    price: 1199,
    originalPrice: 1399,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviewCount: 1247,
    category: "Electronics",
    discount: 14
  }

  // Sample data for TopDealsSection
  const topDealsData = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      category: "Electronics",
      dealTag: "HOT DEAL" as const,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/electronics",
      discountText: "Up To 40% OFF",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "MacBook Pro M3",
      category: "Electronics",
      dealTag: "BEST SELLER" as const,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/electronics",
      discountText: "30-50% OFF",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      title: "Nike Air Max 270",
      category: "Shoes",
      dealTag: "FLASH SALE" as const,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/shoes",
      discountText: "25-45% OFF",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 4,
      title: "Designer Kurta Set",
      category: "Women's Clothing",
      dealTag: "TRENDING" as const,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/womens-clothing",
      discountText: "Up To 70% OFF",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      id: 5,
      title: "Branded Sari Collection",
      category: "Women's Clothing",
      dealTag: "LIMITED TIME" as const,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/category/womens-clothing",
      discountText: "20-60% OFF",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ]

  const categories = [
    {
      name: "Electronics",
      href: "/categories/electronics",
      subcategories: [
        { name: "Smartphones", href: "/categories/electronics/smartphones" },
        { name: "Laptops", href: "/categories/electronics/laptops" },
        { name: "Tablets", href: "/categories/electronics/tablets" },
        { name: "Audio", href: "/categories/electronics/audio" }
      ]
    },
    {
      name: "Fashion",
      href: "/categories/fashion",
      subcategories: [
        { name: "Men's Clothing", href: "/categories/fashion/mens" },
        { name: "Women's Clothing", href: "/categories/fashion/womens" },
        { name: "Shoes", href: "/categories/fashion/shoes" },
        { name: "Accessories", href: "/categories/fashion/accessories" }
      ]
    },
    {
      name: "Home & Garden",
      href: "/categories/home-garden",
      subcategories: [
        { name: "Furniture", href: "/categories/home-garden/furniture" },
        { name: "Decor", href: "/categories/home-garden/decor" },
        { name: "Kitchen", href: "/categories/home-garden/kitchen" },
        { name: "Garden", href: "/categories/home-garden/garden" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        categories={categories}
        onSearch={handleSearch}
        onCartClick={() => console.log("Cart clicked")}
        onUserMenuClick={() => console.log("User menu clicked")}
        onNotificationClick={() => console.log("Notifications clicked")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete UI Components Showcase
          </h1>
          <p className="text-lg text-gray-600">
            All reusable UI components for the Shopvora application
          </p>
        </div>

        {/* Button Components Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Button Components</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Button Variants */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Button Variants</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="transparent">Transparent</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>
            </Card>

            {/* Button Sizes */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Button Sizes</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                  <Button variant="primary" size="xl">Extra Large</Button>
                </div>
              </div>
            </Card>

            {/* Button with Icons */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Buttons with Icons</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="primary" 
                    icon={<ShoppingCart className="h-4 w-4" />}
                    iconPosition="left"
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="secondary" 
                    icon={<Heart className="h-4 w-4" />}
                    iconPosition="right"
                  >
                    Wishlist
                  </Button>
                  <Button 
                    variant="outline" 
                    icon={<ArrowRight className="h-4 w-4" />}
                    iconPosition="right"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Card>

            {/* Button States */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Button States</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" isLoading={isLoading}>
                    {isLoading ? "Loading..." : "Click to Load"}
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                  <Button variant="primary" fullWidth>
                    Full Width
                  </Button>
                </div>
                <button
                  onClick={() => setIsLoading(!isLoading)}
                  className="text-sm text-purple-600 hover:text-purple-700"
                >
                  Toggle Loading State
                </button>
              </div>
            </Card>
          </div>
        </section>

        {/* Card Components Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Card Components</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card Variants */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Card Variants</h3>
              <div className="space-y-4">
                <Card variant="default" padding="md">
                  <h4 className="font-semibold mb-2">Default Card</h4>
                  <p className="text-gray-600">This is a default card with basic styling.</p>
                </Card>
                <Card variant="elevated" padding="md">
                  <h4 className="font-semibold mb-2">Elevated Card</h4>
                  <p className="text-gray-600">This card has enhanced shadow and hover effects.</p>
                </Card>
                <Card variant="outlined" padding="md">
                  <h4 className="font-semibold mb-2">Outlined Card</h4>
                  <p className="text-gray-600">This card has a prominent border.</p>
                </Card>
                <Card variant="flat" padding="md">
                  <h4 className="font-semibold mb-2">Flat Card</h4>
                  <p className="text-gray-600">This card has a subtle background.</p>
                </Card>
              </div>
            </Card>

            {/* Card with Badges */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Cards with Badges</h3>
              <div className="space-y-4">
                <Card
                  variant="elevated"
                  padding="md"
                  badge={{
                    text: "NEW",
                    variant: "success",
                    position: "top-right"
                  }}
                >
                  <h4 className="font-semibold mb-2">Card with Success Badge</h4>
                  <p className="text-gray-600">This card has a green success badge.</p>
                </Card>
                <Card
                  variant="elevated"
                  padding="md"
                  badge={{
                    text: "SALE",
                    variant: "danger",
                    position: "top-left"
                  }}
                >
                  <h4 className="font-semibold mb-2">Card with Danger Badge</h4>
                  <p className="text-gray-600">This card has a red sale badge.</p>
                </Card>
                <Card
                  variant="elevated"
                  padding="md"
                  badge={{
                    text: "FEATURED",
                    variant: "primary",
                    position: "bottom-right"
                  }}
                >
                  <h4 className="font-semibold mb-2">Card with Primary Badge</h4>
                  <p className="text-gray-600">This card has a purple featured badge.</p>
                </Card>
              </div>
            </Card>
          </div>
        </section>

        {/* Product Card Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard product={sampleProduct} />
            <ProductCard product={{
              ...sampleProduct,
              id: "2",
              name: "MacBook Pro 14-inch M3",
              price: 1999,
              originalPrice: 2199,
              image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              rating: 4.9,
              reviewCount: 892,
              category: "Computers",
              discount: 9
            }} />
            <ProductCard product={{
              ...sampleProduct,
              id: "3",
              name: "AirPods Pro 2nd Generation",
              price: 249,
              originalPrice: 299,
              image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              rating: 4.7,
              reviewCount: 2156,
              category: "Audio",
              discount: 17
            }} />
          </div>
        </section>

        {/* Top Deals Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Deals Section</h2>
          
          <TopDealsSection
            title="Featured Deals"
            seeAllUrl="/collections/featured-deals"
            deals={topDealsData.slice(0, 3)}
          />
        </section>

        {/* Individual Top Deals Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Individual Top Deals Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topDealsData.map((deal, index) => (
              <TopDealsCard
                key={deal.id}
                {...deal}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Interactive Demo</h2>
          
          <Card variant="elevated" padding="lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Component Playground</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Button Customization */}
              <div>
                <h4 className="font-semibold mb-4">Customize Button</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Variant
                    </label>
                    <select
                      value={selectedVariant}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="primary">Primary</option>
                      <option value="secondary">Secondary</option>
                      <option value="outline">Outline</option>
                      <option value="danger">Danger</option>
                      <option value="transparent">Transparent</option>
                      <option value="ghost">Ghost</option>
                    </select>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant={selectedVariant as any} onClick={handleButtonClick}>
                      Custom Button
                    </Button>
                    <Button 
                      variant={selectedVariant as any} 
                      icon={<Settings className="h-4 w-4" />}
                      iconPosition="left"
                    >
                      With Icon
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card Customization */}
              <div>
                <h4 className="font-semibold mb-4">Customize Card</h4>
                <Card
                  variant="elevated"
                  padding="md"
                  hover={true}
                  clickable={true}
                  onClick={() => console.log("Card clicked!")}
                  badge={{
                    text: "DEMO",
                    variant: "primary",
                    position: "top-right"
                  }}
                >
                  <h4 className="font-semibold mb-2">Interactive Card</h4>
                  <p className="text-gray-600 mb-3">
                    This card is clickable and has hover effects. Try clicking it!
                  </p>
                  <div className="flex gap-2">
                    <Button variant="primary" size="sm">
                      Action 1
                    </Button>
                    <Button variant="outline" size="sm">
                      Action 2
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </section>

        {/* Usage Examples Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Usage Examples</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* E-commerce Example */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">E-commerce Layout</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Product Quick View</h4>
                  <Button variant="outline" size="sm" icon={<Heart className="h-4 w-4" />}>
                    Wishlist
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button variant="primary" icon={<ShoppingCart className="h-4 w-4" />} fullWidth>
                    Add to Cart
                  </Button>
                  <Button variant="secondary" size="sm">
                    Quick Buy
                  </Button>
                </div>
              </div>
            </Card>

            {/* Dashboard Example */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Dashboard Widget</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-purple-600" />
                    <span className="font-semibold">User Activity</span>
                  </div>
                  <Button variant="ghost" size="sm" icon={<Settings className="h-4 w-4" />}>
                    Settings
                  </Button>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Recent activity will appear here...</p>
                </div>
                <Button variant="outline" size="sm" fullWidth>
                  View All Activity
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Component Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Component Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" padding="lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Components</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Button (6 variants, 4 sizes)</li>
                <li>• Card (4 variants, badges)</li>
                <li>• ProductCard (specialized)</li>
                <li>• Header (navigation)</li>
                <li>• Footer (links, social)</li>
                <li>• TopDealsCard (promotional)</li>
                <li>• TopDealsSection (grid layout)</li>
              </ul>
            </Card>

            <Card variant="elevated" padding="lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Responsive design</li>
                <li>• Smooth animations</li>
                <li>• Accessibility support</li>
                <li>• TypeScript support</li>
                <li>• Customizable props</li>
                <li>• Consistent styling</li>
                <li>• Performance optimized</li>
              </ul>
            </Card>

            <Card variant="elevated" padding="lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage</h3>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Import components:</p>
                <code className="bg-gray-100 p-2 rounded text-xs block">
                  import {'{'} Button, Card, Header, Footer {'}'} from "@modules/common/components/ui"
                </code>
                <p className="mt-4 text-xs">
                  See documentation for detailed usage examples and props.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 