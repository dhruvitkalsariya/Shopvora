"use client"

import { Suspense, useEffect, useState, useRef } from "react"
import { ShoppingCart, Menu, X, Search, User, Bell, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Logo from "@modules/common/components/logo"
import { useCustomer } from "@lib/hooks/use-customer"
import Button from "./Button"

interface HeaderProps {
  className?: string
  showSearch?: boolean
  showCart?: boolean
  showUserMenu?: boolean
  showNotifications?: boolean
  categories?: Array<{
    name: string
    href: string
    subcategories?: Array<{
      name: string
      href: string
      items?: string[]
    }>
  }>
  onSearch?: (query: string) => void
  onCartClick?: () => void
  onUserMenuClick?: () => void
  onNotificationClick?: () => void
  "data-testid"?: string
}

const Header = ({
  className = "",
  showSearch = true,
  showCart = true,
  showUserMenu = true,
  showNotifications = true,
  categories = [],
  onSearch,
  onCartClick,
  onUserMenuClick,
  onNotificationClick,
  "data-testid": dataTestId,
}: HeaderProps) => {
  const { customer, isLoggedIn } = useCustomer()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim())
    }
  }

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false)
    setActiveCategory(null)
  }

  return (
    <div className={`sticky top-0 inset-x-0 z-50 ${className}`} ref={menuRef} data-testid={dataTestId}>
      <header className="relative bg-white border-b border-gray-200 shadow-sm w-full">
        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center min-w-[160px] cursor-pointer">
              <Logo size="lg" className="h-10" />
            </div>

            {/* Desktop Search */}
            {showSearch && (
              <div className="hidden md:flex flex-1 max-w-2xl mx-6">
                <form onSubmit={handleSearch} className="w-full">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </form>
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              {showNotifications && isLoggedIn && (
                <button
                  onClick={onNotificationClick}
                  className="p-2 text-gray-600 hover:text-gray-900 relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>
              )}

              {/* Cart */}
              {showCart && (
                <button
                  onClick={onCartClick}
                  className="p-2 text-gray-600 hover:text-gray-900 relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-purple-600 rounded-full text-xs text-white flex items-center justify-center">
                    2
                  </span>
                </button>
              )}

              {/* User Menu */}
              {showUserMenu && (
                <div className="relative">
                  {!isLoggedIn ? (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={onUserMenuClick}
                      className="hidden md:block"
                    >
                      Login
                    </Button>
                  ) : (
                    <button
                      onClick={onUserMenuClick}
                      className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900"
                    >
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {customer?.first_name?.[0] || "U"}
                        </span>
                      </div>
                      <span className="hidden lg:block text-sm font-medium">
                        {customer?.first_name || "User"}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        {categories.length > 0 && (
          <div className="hidden md:block bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="relative group"
                    onMouseEnter={() => setActiveCategory(category.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <LocalizedClientLink
                      href={category.href}
                      className="flex items-center py-3 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      {category.name}
                      {category.subcategories && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </LocalizedClientLink>

                    {/* Dropdown Menu */}
                    {category.subcategories && activeCategory === category.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 rounded-lg py-2 z-50"
                      >
                        {category.subcategories.map((subcategory) => (
                          <LocalizedClientLink
                            key={subcategory.name}
                            href={subcategory.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                          >
                            {subcategory.name}
                          </LocalizedClientLink>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                {showSearch && (
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </form>
                )}

                {/* Mobile Categories */}
                {categories.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Categories
                    </h3>
                    {categories.map((category) => (
                      <LocalizedClientLink
                        key={category.name}
                        href={category.href}
                        className="block py-2 text-base text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={handleMenuClose}
                      >
                        {category.name}
                      </LocalizedClientLink>
                    ))}
                  </div>
                )}

                {/* Mobile User Actions */}
                <div className="space-y-2">
                  {!isLoggedIn ? (
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={onUserMenuClick}
                    >
                      Login
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <LocalizedClientLink
                        href="/account"
                        className="block py-2 text-base text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={handleMenuClose}
                      >
                        My Account
                      </LocalizedClientLink>
                      <LocalizedClientLink
                        href="/account/orders"
                        className="block py-2 text-base text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={handleMenuClose}
                      >
                        My Orders
                      </LocalizedClientLink>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  )
}

export default Header 