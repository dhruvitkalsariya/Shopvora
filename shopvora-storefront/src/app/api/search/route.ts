import { NextRequest, NextResponse } from 'next/server'
import { listProducts } from '@lib/data/products'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''
    const limit = parseInt(searchParams.get('limit') || '5')
    const countryCode = searchParams.get('countryCode') || 'in'

    if (!query.trim()) {
      return NextResponse.json({
        products: [],
        suggestions: [],
        count: 0
      })
    }

    // Build query parameters for search
    const queryParams: any = {
      limit: Math.max(limit, 10), // Increase limit for better results
      fields: "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags",
      q: query, // Search query
    }

    const result = await listProducts({
      pageParam: 1,
      queryParams,
      countryCode,
    })

    // Generate search suggestions based on the query
    const suggestions = generateSearchSuggestions(query, result.response.products)

    return NextResponse.json({
      products: result.response.products,
      suggestions,
      count: result.response.count,
    })
  } catch (error) {
    console.error('Error searching products:', error)
    return NextResponse.json(
      { error: 'Failed to search products' },
      { status: 500 }
    )
  }
}

function generateSearchSuggestions(query: string, products: any[]): string[] {
  const suggestions: string[] = []
  const queryLower = query.toLowerCase()

  // Add exact product matches first
  products.forEach(product => {
    const title = product.title?.toLowerCase() || ''
    if (title.includes(queryLower)) {
      suggestions.push(product.title)
    }
  })

  // Add category-based suggestions
  const categories = ['mobiles', 'tops', 'shoes', 'furniture', 'smart wearables', 'electronics', 'fashion', 'home & garden', 'appliances', 'beauty', 'toys']
  categories.forEach(category => {
    if (category.includes(queryLower) && !suggestions.includes(category)) {
      suggestions.push(category)
    }
  })

  // Add brand-based suggestions
  const brands = ['motorola', 'samsung', 'apple', 'nike', 'adidas', 'puma', 'reebok', 'sony', 'lg', 'xiaomi', 'oneplus']
  brands.forEach(brand => {
    if (brand.includes(queryLower) && !suggestions.includes(brand)) {
      suggestions.push(brand)
    }
  })

  // Add product type suggestions
  const productTypes = ['5g', 'fusion', 'edge', 'g85', 'g45', 'smartphone', 'laptop', 'headphones', 'watch', 'camera', 'speaker']
  productTypes.forEach(type => {
    if (type.includes(queryLower) && !suggestions.includes(type)) {
      suggestions.push(type)
    }
  })

  // Add specific product suggestions based on query
  if (queryLower.includes('moto') || queryLower.includes('motorola')) {
    suggestions.push('motorola mobiles 5g')
    suggestions.push('motorola 50 fusion')
    suggestions.push('motorola edge 50')
    suggestions.push('motorola g85 5g')
    suggestions.push('motorola g45 5g')
  }

  if (queryLower.includes('samsung')) {
    suggestions.push('samsung galaxy s24')
    suggestions.push('samsung galaxy a55')
    suggestions.push('samsung galaxy m55')
  }

  if (queryLower.includes('apple') || queryLower.includes('iphone')) {
    suggestions.push('iphone 15 pro')
    suggestions.push('iphone 15')
    suggestions.push('iphone 14')
  }

  // Combine query with suggestions for better matching
  const combinedSuggestions = suggestions.map(suggestion => {
    if (suggestion.toLowerCase().includes(queryLower)) {
      return suggestion
    }
    return `${query} ${suggestion}`
  })

  // Remove duplicates and limit to 8 suggestions for better coverage
  return Array.from(new Set(combinedSuggestions)).slice(0, 8)
} 