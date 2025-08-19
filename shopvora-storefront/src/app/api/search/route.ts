import { NextRequest, NextResponse } from "next/server"
import { listProducts } from "@lib/data/products"

function generateSearchSuggestions(query: string, products: any[]): string[] {
  const suggestions: string[] = []
  const queryLower = query.toLowerCase().trim()

  // Add exact product matches first
  products.forEach(product => {
    const title = product.title?.toLowerCase() || ''
    if (title.includes(queryLower)) {
      suggestions.push(product.title)
    }
  })

  // Add category-based suggestions that match existing products
  const existingCategories = ['shirts', 'sweatshirts', 'pants', 'merch', 'clothing', 'apparel']
  existingCategories.forEach(category => {
    if (category.includes(queryLower) && !suggestions.includes(category)) {
      suggestions.push(category)
    }
  })

  // Add product type suggestions based on existing products
  const productTypes = ['t-shirt', 'sweatshirt', 'sweatpants', 'shorts', 'clothing', 'apparel', 'fashion']
  productTypes.forEach(type => {
    if (type.includes(queryLower) && !suggestions.includes(type)) {
      suggestions.push(type)
    }
  })

  // Add brand-based suggestions (Medusa is the brand in this case)
  const brands = ['medusa', 'shopvora']
  brands.forEach(brand => {
    if (brand.includes(queryLower) && !suggestions.includes(brand)) {
      suggestions.push(brand)
    }
  })

  // Add specific product suggestions based on query
  if (queryLower.includes('shirt') || queryLower.includes('tee')) {
    if (!suggestions.includes('Medusa T-Shirt')) suggestions.push('Medusa T-Shirt')
    if (!suggestions.includes('t-shirt')) suggestions.push('t-shirt')
    if (!suggestions.includes('shirts')) suggestions.push('shirts')
  }

  if (queryLower.includes('sweat') || queryLower.includes('hoodie')) {
    if (!suggestions.includes('Medusa Sweatshirt')) suggestions.push('Medusa Sweatshirt')
    if (!suggestions.includes('sweatshirt')) suggestions.push('sweatshirt')
    if (!suggestions.includes('sweatpants')) suggestions.push('sweatpants')
  }

  if (queryLower.includes('pant') || queryLower.includes('trouser')) {
    if (!suggestions.includes('Medusa Sweatpants')) suggestions.push('Medusa Sweatpants')
    if (!suggestions.includes('sweatpants')) suggestions.push('sweatpants')
    if (!suggestions.includes('pants')) suggestions.push('pants')
  }

  if (queryLower.includes('short')) {
    if (!suggestions.includes('Medusa Shorts')) suggestions.push('Medusa Shorts')
    if (!suggestions.includes('shorts')) suggestions.push('shorts')
  }

  if (queryLower.includes('cloth') || queryLower.includes('fashion') || queryLower.includes('apparel')) {
    if (!suggestions.includes('clothing')) suggestions.push('clothing')
    if (!suggestions.includes('apparel')) suggestions.push('apparel')
    if (!suggestions.includes('fashion')) suggestions.push('fashion')
    if (!suggestions.includes('Medusa T-Shirt')) suggestions.push('Medusa T-Shirt')
    if (!suggestions.includes('Medusa Sweatshirt')) suggestions.push('Medusa Sweatshirt')
  }

  // Add size suggestions
  const sizes = ['S', 'M', 'L', 'XL']
  sizes.forEach(size => {
    if (size.toLowerCase().includes(queryLower) && !suggestions.includes(size)) {
      suggestions.push(size)
    }
  })

  // Add color suggestions
  const colors = ['black', 'white', 'gray', 'vintage']
  colors.forEach(color => {
    if (color.includes(queryLower) && !suggestions.includes(color)) {
      suggestions.push(color)
    }
  })

  // Remove duplicates and limit to 6 suggestions for better coverage
  return Array.from(new Set(suggestions)).slice(0, 6)
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''
    const limit = parseInt(searchParams.get('limit') || '10')
    const countryCode = searchParams.get('countryCode') || 'dk'

    // Clean and sanitize the query
    const cleanQuery = query.trim()

    if (!cleanQuery) {
      return NextResponse.json({
        products: [],
        suggestions: [],
        count: 0
      })
    }

    // Build query parameters for search
    const queryParams: any = {
      limit: Math.max(limit, 20), // Increase limit for better results
      fields: "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags",
      q: cleanQuery, // Use the query as is
    }

    const result = await listProducts({
      pageParam: 1,
      queryParams,
      countryCode,
    })

    // Generate search suggestions based on the clean query
    const suggestions = generateSearchSuggestions(cleanQuery, result.response.products)

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