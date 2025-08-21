"use client"

import TopDeals, { Deal } from "./TopDeals"
import { useState, useEffect } from "react"

// Example deals data
const exampleDeals: Deal[] = [
  {
    id: 1,
    image: "/images/Top Categories/Electronics-Categories.png",
    title: "Apple iPads",
    discount: "30–50% OFF",
    url: "/collections/apple-ipads"
  },
  {
    id: 2,
    image: "/images/Top Categories/Footwear-Categories.png",
    title: "Puma, Adidas & More",
    discount: "20–40% OFF",
    url: "/collections/sports-shoes"
  },
  {
    id: 3,
    image: "/images/Top Categories/Electronics-Categories.png",
    title: "iPad Accessories",
    discount: "30–50% OFF",
    url: "/collections/apple-ipads-accessories"
  },
  {
    id: 4,
    image: "/images/Top Categories/Fashion-Categories.png",
    title: "Kurta Sets",
    discount: "Up To 70% OFF",
    url: "/collections/kurta-sets"
  },
  {
    id: 5,
    image: "/images/Top Categories/Fashion-Categories.png",
    title: "Tops, Jeans & More",
    discount: "20–80% OFF",
    url: "/collections/tops-jeans"
  }
]

// Example usage component
export default function TopDealsUsageExample() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Example 1: Basic Usage */}
      <div className="mb-12">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              TopDeals Component Usage Examples
            </h1>
            <p className="text-gray-600">
              Demonstrating different ways to use the TopDeals component
            </p>
          </div>
        </div>
        
        <TopDeals deals={exampleDeals} />
      </div>

      {/* Example 2: Custom Title and URL */}
      <div className="mb-12">
        <TopDeals 
          deals={exampleDeals}
          title="Special Offers"
          seeAllUrl="/collections/special-offers"
        />
      </div>

      {/* Example 3: Empty State */}
      <div className="mb-12">
        <TopDeals deals={[]} />
      </div>
    </div>
  )
}

// Example of how to use with API data
export const TopDealsWithAPI = () => {
  // This is an example of how you might fetch data from an API
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true)
        // Example API call - replace with your actual endpoint
        const response = await fetch('/api/deals')
        const data = await response.json()
        setDeals(data.deals || [])
      } catch (error) {
        console.error('Failed to fetch deals:', error)
        // Fallback to example data if API fails
        setDeals(exampleDeals)
      } finally {
        setLoading(false)
      }
    }

    fetchDeals()
  }, [])

  if (loading) {
    return <TopDeals deals={[]} />
  }

  return <TopDeals deals={deals} />
}

// Example of how to use with Medusa.js
export const TopDealsWithMedusa = () => {
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMedusaDeals = async () => {
      try {
        setLoading(true)
        // Example Medusa.js API call
        const response = await fetch('/store/products?limit=5&discount=true')
        const data = await response.json()
        
        // Transform Medusa data to our Deal format
        const transformedDeals: Deal[] = data.products.map((product: any, index: number) => ({
          id: product.id,
          image: product.thumbnail || "/images/placeholder.jpg",
          title: product.title,
          discount: `${Math.floor(Math.random() * 50) + 10}% OFF`, // Example discount
          url: `/products/${product.handle}`
        }))
        
        setDeals(transformedDeals)
      } catch (error) {
        console.error('Failed to fetch Medusa deals:', error)
        setDeals(exampleDeals)
      } finally {
        setLoading(false)
      }
    }

    fetchMedusaDeals()
  }, [])

  if (loading) {
    return <TopDeals deals={[]} />
  }

  return <TopDeals deals={deals} />
} 