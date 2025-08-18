"use client"

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function CartButton() {
  const [cartCount, setCartCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate cart data loading
    const timer = setTimeout(() => {
      setCartCount(1) // Mock cart count
      setLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <LocalizedClientLink
        className="hover:text-ui-fg-base flex gap-2"
        href="/cart"
        data-testid="nav-cart-link"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="text-sm">(0)</span>
      </LocalizedClientLink>
    )
  }

  return (
    <LocalizedClientLink
      className="hover:text-ui-fg-base flex gap-2 relative"
      href="/cart"
      data-testid="nav-cart-link"
    >
      <ShoppingCart className="h-5 w-5" />
      <span className="text-sm">({cartCount})</span>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </LocalizedClientLink>
  )
}
