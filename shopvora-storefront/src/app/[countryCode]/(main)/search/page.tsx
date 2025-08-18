import { Suspense } from "react"
import { notFound } from "next/navigation"
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

  if (!q?.trim()) {
    notFound()
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Search Results for "{q}"
        </h1>
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
          <div className="flex justify-center space-x-4">
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