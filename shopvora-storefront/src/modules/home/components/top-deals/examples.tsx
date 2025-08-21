"use client"

import { useState, useEffect } from "react"
import TopDeals, { Deal } from "./TopDeals"

// Example 1: Static data
const staticDeals: Deal[] = [
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

// Example 2: Component with API data fetching
export const TopDealsWithAPI = () => {
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
        // Fallback to static data if API fails
        setDeals(staticDeals)
      } finally {
        setLoading(false)
      }
    }

    fetchDeals()
  }, [])

  return <TopDeals deals={deals} loading={loading} />
}

// Example 3: Component with React Query (if you have it installed)
export const TopDealsWithReactQuery = () => {
  // This is an example of how you might use React Query
  // You would need to install @tanstack/react-query first
  
  /*
  const { data: deals, isLoading, error } = useQuery({
    queryKey: ['deals'],
    queryFn: async () => {
      const response = await fetch('/api/deals')
      return response.json()
    }
  })

  if (error) {
    return <div>Error loading deals</div>
  }

  return <TopDeals deals={deals?.deals || []} loading={isLoading} />
  */
  
  // For now, return the static version
  return <TopDeals deals={staticDeals} />
}

// Example 4: Component with custom styling
export const TopDealsCustom = () => {
  return (
    <TopDeals 
      deals={staticDeals}
      title="Special Offers"
      seeAllUrl="/collections/special-offers"
    />
  )
}

// Example 5: Component with loading state
export const TopDealsLoading = () => {
  return <TopDeals loading={true} />
}

// Example 6: Component with empty state
export const TopDealsEmpty = () => {
  return <TopDeals deals={[]} />
}

// Example 7: Component with Medusa.js integration
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
        setDeals(staticDeals)
      } finally {
        setLoading(false)
      }
    }

    fetchMedusaDeals()
  }, [])

  return <TopDeals deals={deals} loading={loading} />
}

// Default export for basic usage
export default function TopDealsExamples() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Static Data Example</h2>
        <TopDeals deals={staticDeals} />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Custom Title Example</h2>
        <TopDeals 
          deals={staticDeals}
          title="Special Offers"
          seeAllUrl="/collections/special-offers"
        />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Loading State Example</h2>
        <TopDeals loading={true} />
      </div>
    </div>
  )
} 