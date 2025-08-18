import { NextRequest, NextResponse } from 'next/server'
import { listProducts } from '@lib/data/products'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '12')
    const sort = searchParams.get('sort') || 'created_at'
    const countryCode = searchParams.get('countryCode') || 'in'

    // Build query parameters
    const queryParams: any = {
      limit,
      fields: "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags",
    }

    // Add sorting
    if (sort === 'popularity') {
      queryParams.order = 'metadata.popularity'
    } else if (sort === 'price_low') {
      queryParams.order = 'variants.calculated_price'
    } else if (sort === 'price_high') {
      queryParams.order = 'variants.calculated_price'
      queryParams.order_direction = 'desc'
    } else {
      queryParams.order = 'created_at'
      queryParams.order_direction = 'desc'
    }

    const result = await listProducts({
      pageParam: 1,
      queryParams,
      countryCode,
    })

    return NextResponse.json({
      products: result.response.products,
      count: result.response.count,
      nextPage: result.nextPage,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
} 