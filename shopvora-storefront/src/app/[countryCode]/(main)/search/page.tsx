import { Suspense } from "react"
import { notFound, redirect } from "next/navigation"
import { Metadata } from "next"

import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"

type Props = {
  params: Promise<{ countryCode: string }>
  searchParams: Promise<{ q?: string; page?: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { countryCode } = await props.params
  const { q } = await props.searchParams

  return {
    title: q ? `Search Results for "${q}" | Shopvora` : "Search | Shopvora",
    description: q ? `Search results for "${q}" on Shopvora` : "Search products on Shopvora",
  }
}

export default async function SearchPage(props: Props) {
  const { countryCode } = await props.params
  const { q, page = "1" } = await props.searchParams

  // If no search query, redirect to home page instead of showing 404
  if (!q?.trim()) {
    redirect(`/${countryCode}`)
  }

  const region = await getRegion(countryCode)

  if (!region) {
    notFound()
  }

  const pageNumber = parseInt(page)
  const limit = 12
  const offset = (pageNumber - 1) * limit

  const { response: { products, count } } = await listProducts({
    pageParam: pageNumber,
    queryParams: {
      q: q.trim(),
      limit,
      offset,
      fields: "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags",
    },
    countryCode,
  })

  const totalPages = Math.ceil(count / limit)

  return (
    <div className="content-container py-12 small:py-24">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Search Results for "{q}"
          </h1>
          <a
            href={`/${countryCode}`}
            className="text-[#2A1454] hover:underline text-sm font-medium"
          >
            ← Back to Home
          </a>
        </div>
        <p className="text-gray-600">
          {count} {count === 1 ? "product" : "products"} found
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <div className="text-lg font-medium mb-2">No products found</div>
            <div className="text-sm">
              Try searching with different keywords or browse our categories
            </div>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="/categories/mobiles"
              className="text-[#2A1454] hover:underline"
            >
              Browse Mobiles
            </a>
            <a
              href="/categories/fashion"
              className="text-[#2A1454] hover:underline"
            >
              Browse Fashion
            </a>
            <a
              href="/categories/electronics"
              className="text-[#2A1454] hover:underline"
            >
              Browse Electronics
            </a>
          </div>
          <a
            href={`/${countryCode}`}
            className="inline-block bg-[#2A1454] text-white px-6 py-2 rounded-lg hover:bg-[#1a0f3a] transition-colors"
          >
            Back to Home
          </a>
        </div>
      ) : (
        <>
          <ul
            className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
            data-testid="search-results-list"
          >
            {products.map((product) => (
              <li key={product.id}>
                <ProductPreview product={product} region={region} />
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                data-testid="search-pagination"
                page={pageNumber}
                totalPages={totalPages}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
} 