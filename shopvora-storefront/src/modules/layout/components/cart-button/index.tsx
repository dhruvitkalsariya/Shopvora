"use client"

import { ShoppingCart } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useCart } from "@lib/hooks/use-cart"

export default function CartButton() {
  const { cart, isLoading } = useCart()

  const itemCount = cart?.items?.length || 0
  const loading = isLoading

  if (loading) {
    return (
      <div className="relative flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg transition-all duration-200">
        <ShoppingCart className="h-5 w-5" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    )
  }

  return (
    <LocalizedClientLink
      href="/cart"
      className="relative flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-purple-600 rounded-lg transition-all duration-200"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </LocalizedClientLink>
  )
}
