"use client"

import { Suspense, useEffect, useState } from "react"
import { ShoppingCart } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import Logo from "@modules/common/components/logo"
import SearchComponent from "@modules/layout/components/search"
import UserDropdown from "@modules/layout/components/user-dropdown"
import Notifications from "@modules/layout/components/notifications"
import { useCustomer } from "@lib/hooks/use-customer"


const categories = [
  { name: "Grocery", href: "/categories/grocery" },
  { name: "Mobiles", href: "/categories/mobiles" },
  { 
    name: "Fashion", 
    href: "/categories/fashion",
    subcategories: [
      {
        name: "Men's Top wear",
        href: "/categories/fashion/mens-topwear",
        items: ["All", "Men's T-shirts", "Men's Casual shirts", "Men's Formal shirts", "Men's Kurtas", "Men's Ethnic sets", "Men's Blazers", "Men's Raincoat", "Men's Suits"]
      },
      { name: "Men's Bottom wear", href: "/categories/fashion/mens-bottomwear" },
      { name: "Women Ethnic", href: "/categories/fashion/women-ethnic" },
      { name: "Men Footwear", href: "/categories/fashion/mens-footwear" },
      { name: "Watches and Accessories", href: "/categories/fashion/watches-accessories" },
      { name: "Women Western", href: "/categories/fashion/women-western" },
      { name: "Bags, Suitcases & Luggage", href: "/categories/fashion/bags-luggage" },
      { name: "Kids", href: "/categories/fashion/kids" },
      { name: "Essentials", href: "/categories/fashion/essentials" },
      { name: "Winter", href: "/categories/fashion/winter" }
    ]
  },
  { name: "Electronics", href: "/categories/electronics" },
  { name: "Home & Furniture", href: "/categories/home-furniture" },
  { name: "Appliances", href: "/categories/appliances" },
  { name: "Beauty, Toys & More", href: "/categories/beauty-toys" },
  { name: "Two Wheelers", href: "/categories/two-wheelers" }
]

export default function Nav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const { customer, isLoggedIn, isLoading } = useCustomer()


  // Fix hydration error by ensuring component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="sticky top-0 inset-x-0 z-50">
        <header className="relative bg-white border-b border-gray-200 shadow-sm w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center min-w-[160px]">
                <Logo size="lg" className="h-10" />
              </div>
              <div className="flex-1 max-w-2xl mx-6">
                <div className="relative">
                  <div className="w-full pl-10 pr-10 py-2 rounded-lg border placeholder-gray-500 text-sm bg-gray-100 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header className="relative bg-white border-b border-gray-200 shadow-sm w-full">
        {/* Row 1: Logo + Search + Actions (FULL WIDTH) */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo (consistent size) */}
            <div className="flex items-center min-w-[160px]">
              <Logo size="lg" className="h-10" />
            </div>

            {/* Search Component */}
            <SearchComponent />

            {/* Right Actions - Different for logged in vs logged out */}
            <div className="flex items-center space-x-2">
              {isLoading ? (
                // Loading state - show skeleton
                <>
                  <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                </>
              ) : !isLoggedIn ? (
                // Before Login State
                <>
                  <LocalizedClientLink
                    href="/account"
                    className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 shadow-sm"
                  >
                    Login
                  </LocalizedClientLink>
                  
                  <Suspense
                    fallback={
                      <div className="relative flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg transition-all duration-200">
                        <ShoppingCart className="h-5 w-5" />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                    }
                  >
                    <CartButton />
                  </Suspense>
                </>
              ) : (
                // After Login State
                <>
                  <Suspense
                    fallback={
                      <div className="relative flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg transition-all duration-200">
                        <ShoppingCart className="h-5 w-5" />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                    }
                  >
                    <CartButton />
                  </Suspense>

                  {/* Notifications */}
                  <Notifications />

                  {/* User Dropdown */}
                  <UserDropdown customer={customer} />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Divider between rows */}
        <div className="border-t border-gray-200" />

        {/* Row 2: Categories NAV (CONTAINER WIDTH) */}
        {/* <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => {
                  setActiveCategory(null)
                  setActiveSubcategory(null)
                }}
              >
                <LocalizedClientLink
                  href={category.href}
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 flex items-center space-x-1"
                >
                  <span>{category.name}</span>
                  {category.subcategories && <ChevronDown className="h-3 w-3" />}
                </LocalizedClientLink>

                {category.subcategories && activeCategory === category.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                    {category.subcategories.map((subcategory) => (
                      <div
                        key={subcategory.name}
                        className="relative"
                        onMouseEnter={() => setActiveSubcategory(subcategory.name)}
                        onMouseLeave={() => setActiveSubcategory(null)}
                      >
                        <LocalizedClientLink
                          href={subcategory.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                        >
                          <span>{subcategory.name}</span>
                          {subcategory.items && <ChevronDown className="h-3 w-3" />}
                        </LocalizedClientLink>

                        {subcategory.items && activeSubcategory === subcategory.name && (
                          <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg py-2">
                            <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                              More In {subcategory.name}
                            </div>
                            {subcategory.items.map((item) => (
                              <LocalizedClientLink
                                key={item}
                                href={`${subcategory.href}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {item}
                              </LocalizedClientLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav> */}
      </header>
    </div>
  )
}
