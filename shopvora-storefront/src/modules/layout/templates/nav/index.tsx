"use client"

import { Suspense, useEffect, useState, useRef } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import Logo from "@modules/common/components/logo"
import SearchComponent from "@modules/layout/components/search"
import UserDropdown from "@modules/layout/components/user-dropdown"
import Notifications from "@modules/layout/components/notifications"
import ChevronDown from "@modules/common/icons/chevron-down"
import { useCustomer } from "@lib/hooks/use-customer"

// Complete category data with all dropdown menus
const categories = [
  { 
    name: "Grocery", 
    href: "/categories/grocery",
    subcategories: [
      { name: "Fresh Vegetables", href: "/categories/grocery/fresh-vegetables" },
      { name: "Fresh Fruits", href: "/categories/grocery/fresh-fruits" },
      { name: "Dairy & Eggs", href: "/categories/grocery/dairy-eggs" },
      { name: "Beverages", href: "/categories/grocery/beverages" },
      { name: "Snacks & Branded Foods", href: "/categories/grocery/snacks" },
      { name: "Staples", href: "/categories/grocery/staples" },
      { name: "Personal Care", href: "/categories/grocery/personal-care" },
      { name: "Home Care", href: "/categories/grocery/home-care" },
      { name: "Baby Care", href: "/categories/grocery/baby-care" },
      { name: "Pet Care", href: "/categories/grocery/pet-care" }
    ]
  },
  { 
    name: "Mobiles", 
    href: "/categories/mobiles",
    subcategories: [
      { name: "Smartphones", href: "/categories/mobiles/smartphones" },
      { name: "Mobile Accessories", href: "/categories/mobiles/accessories" },
      { name: "Mobile Cases", href: "/categories/mobiles/cases" },
      { name: "Power Banks", href: "/categories/mobiles/power-banks" },
      { name: "Mobile Chargers", href: "/categories/mobiles/chargers" },
      { name: "Mobile Cables", href: "/categories/mobiles/cables" },
      { name: "Mobile Screen Guards", href: "/categories/mobiles/screen-guards" },
      { name: "Mobile Stands", href: "/categories/mobiles/stands" }
    ]
  },
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
  { 
    name: "Electronics", 
    href: "/categories/electronics",
    subcategories: [
      { name: "Laptops", href: "/categories/electronics/laptops" },
      { name: "Computers & Accessories", href: "/categories/electronics/computers" },
      { name: "Gaming", href: "/categories/electronics/gaming" },
      { name: "Cameras", href: "/categories/electronics/cameras" },
      { name: "Audio & Video", href: "/categories/electronics/audio-video" },
      { name: "TV & Appliances", href: "/categories/electronics/tv-appliances" },
      { name: "Smart Devices", href: "/categories/electronics/smart-devices" },
      { name: "Office Electronics", href: "/categories/electronics/office" }
    ]
  },
  { 
    name: "Home & Furniture", 
    href: "/categories/home-furniture",
    subcategories: [
      { name: "Furniture", href: "/categories/home-furniture/furniture" },
      { name: "Home Decor", href: "/categories/home-furniture/home-decor" },
      { name: "Kitchen & Dining", href: "/categories/home-furniture/kitchen-dining" },
      { name: "Bedding & Bath", href: "/categories/home-furniture/bedding-bath" },
      { name: "Storage & Organization", href: "/categories/home-furniture/storage" },
      { name: "Lighting", href: "/categories/home-furniture/lighting" },
      { name: "Garden & Outdoor", href: "/categories/home-furniture/garden-outdoor" },
      { name: "Tools & Hardware", href: "/categories/home-furniture/tools-hardware" }
    ]
  },
  { 
    name: "Appliances", 
    href: "/categories/appliances",
    subcategories: [
      { name: "Kitchen Appliances", href: "/categories/appliances/kitchen" },
      { name: "Home Appliances", href: "/categories/appliances/home" },
      { name: "Personal Care Appliances", href: "/categories/appliances/personal-care" },
      { name: "Cleaning Appliances", href: "/categories/appliances/cleaning" },
      { name: "Air Conditioning", href: "/categories/appliances/air-conditioning" },
      { name: "Refrigerators", href: "/categories/appliances/refrigerators" },
      { name: "Washing Machines", href: "/categories/appliances/washing-machines" },
      { name: "Small Appliances", href: "/categories/appliances/small-appliances" }
    ]
  },
  { 
    name: "Beauty, Toys & More", 
    href: "/categories/beauty-toys",
    subcategories: [
      { name: "Beauty & Personal Care", href: "/categories/beauty-toys/beauty" },
      { name: "Toys & Games", href: "/categories/beauty-toys/toys-games" },
      { name: "Sports & Fitness", href: "/categories/beauty-toys/sports-fitness" },
      { name: "Books & Stationery", href: "/categories/beauty-toys/books-stationery" },
      { name: "Automotive", href: "/categories/beauty-toys/automotive" },
      { name: "Health & Wellness", href: "/categories/beauty-toys/health-wellness" },
      { name: "Baby Products", href: "/categories/beauty-toys/baby-products" },
      { name: "Pet Supplies", href: "/categories/beauty-toys/pet-supplies" }
    ]
  },
  { 
    name: "Two Wheelers", 
    href: "/categories/two-wheelers",
    subcategories: [
      { name: "Motorcycles", href: "/categories/two-wheelers/motorcycles" },
      { name: "Scooters", href: "/categories/two-wheelers/scooters" },
      { name: "Electric Vehicles", href: "/categories/two-wheelers/electric" },
      { name: "Bicycles", href: "/categories/two-wheelers/bicycles" },
      { name: "Two Wheeler Accessories", href: "/categories/two-wheelers/accessories" },
      { name: "Two Wheeler Parts", href: "/categories/two-wheelers/parts" },
      { name: "Two Wheeler Services", href: "/categories/two-wheelers/services" },
      { name: "Two Wheeler Insurance", href: "/categories/two-wheelers/insurance" }
    ]
  }
]

export default function Nav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [clickedCategory, setClickedCategory] = useState<string | null>(null)
  const [clickedSubcategory, setClickedSubcategory] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { customer, isLoggedIn, isLoading } = useCustomer()
  const menuRef = useRef<HTMLDivElement>(null)
  const categoriesNavRef = useRef<HTMLElement>(null)

  // Fix hydration error by ensuring component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle clicks outside navigation categories to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      
      // Check if click is outside the categories navigation area
      if (categoriesNavRef.current && !categoriesNavRef.current.contains(target)) {
        // Also check if click is outside any dropdown menus
        const dropdownMenus = document.querySelectorAll('.nav-dropdown, .nav-submenu')
        let isClickingDropdown = false
        
        dropdownMenus.forEach(menu => {
          if (menu.contains(target)) {
            isClickingDropdown = true
          }
        })
        
        if (!isClickingDropdown) {
          setActiveCategory(null)
          setActiveSubcategory(null)
          setClickedCategory(null)
          setClickedSubcategory(null)
          setIsMobileMenuOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle route changes to close menus
  useEffect(() => {
    const handleRouteChange = () => {
      setActiveCategory(null)
      setActiveSubcategory(null)
      setClickedCategory(null)
      setClickedSubcategory(null)
      setIsMobileMenuOpen(false)
    }

    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])



  const handleCategoryClick = (categoryName: string, event: React.MouseEvent) => {
    event.stopPropagation()
    
    if (clickedCategory === categoryName) {
      // Close the category and reset all states
      setClickedCategory(null)
      setActiveCategory(null)
      setActiveSubcategory(null)
      setClickedSubcategory(null)
    } else {
      // Open the category and reset subcategory states
      setClickedCategory(categoryName)
      setActiveCategory(categoryName)
      setActiveSubcategory(null)
      setClickedSubcategory(null)
    }
  }

  const handleCategoryHover = (categoryName: string) => {
    if (clickedCategory === null) {
      setActiveCategory(categoryName)
    }
  }

  const handleCategoryLeave = () => {
    if (clickedCategory === null) {
      setActiveCategory(null)
      setActiveSubcategory(null)
    }
  }

  const handleSubcategoryClick = (subcategoryName: string, event: React.MouseEvent) => {
    event.stopPropagation()
    
    // Simple toggle logic - if same subcategory, close it; if different, open it
    if (clickedSubcategory === subcategoryName) {
      setClickedSubcategory(null)
      setActiveSubcategory(null)
    } else {
      setClickedSubcategory(subcategoryName)
      setActiveSubcategory(subcategoryName)
    }
  }

  const handleSubcategoryHover = (subcategoryName: string) => {
    // Show hover effect only if no subcategory is clicked
    if (clickedSubcategory === null) {
      setActiveSubcategory(subcategoryName)
    }
  }

  const handleSubcategoryLeave = () => {
    // Reset active subcategory on leave, but keep clicked subcategory
    if (clickedSubcategory === null) {
      setActiveSubcategory(null)
    }
  }

  const handleMenuClose = () => {
    setActiveCategory(null)
    setActiveSubcategory(null)
    setClickedCategory(null)
    setClickedSubcategory(null)
    setIsMobileMenuOpen(false)
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="sticky top-0 inset-x-0 z-50">
        <header className="relative bg-white border-b border-gray-200 shadow-sm w-full">
          <div className="nav-container px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center min-w-[160px]">
                <Logo size="lg" className="h-10" />
              </div>
              <div className="hidden md:flex flex-1 max-w-2xl mx-6">
                <div className="relative w-full">
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
          <div className="border-t border-gray-200" />
          <div className="nav-container px-4 sm:px-6 lg:px-8">
            <div className="nav-categories">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="nav-category-item">
                  <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
    )
  }

  return (
    <div className="sticky top-0 inset-x-0 z-50" ref={menuRef}>
      <header className="relative bg-white border-b border-gray-200 shadow-sm w-full">
        {/* Row 1: Logo + Search + Actions (FULL WIDTH) */}
        <div className="nav-container px-4 sm:px-6 lg:px-8" onClick={handleMenuClose}>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center min-w-[160px] cursor-pointer">
              <Logo size="lg" className="h-10" />
            </div>

            {/* Search Component - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-6">
              <SearchComponent />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              {isLoading ? (
                <>
                  <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                </>
              ) : !isLoggedIn ? (
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

                  <Notifications />
                  <UserDropdown customer={customer} />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search - Show when mobile menu is open */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <SearchComponent />
          </div>
        )}

        {/* Divider between rows */}
        <div className="border-t border-gray-200" />

        {/* Row 2: Categories NAV (CONTAINER WIDTH) */}
        <nav ref={categoriesNavRef} className="nav-container px-4 sm:px-6 lg:px-8" onClick={(e) => e.stopPropagation()}>
          <div className="nav-categories flex justify-evenly mx-[120px]">
            {categories.map((category) => (
                              <div
                  key={category.name}
                  className="nav-category-item"
                  onMouseEnter={() => handleCategoryHover(category.name)}
                  onMouseLeave={handleCategoryLeave}
                >
                <button
                  onClick={(e) => handleCategoryClick(category.name, e)}
                  className={`nav-category-button text-sm font-medium flex items-center justify-center space-x-1 transition-colors duration-200 focus:outline-none whitespace-nowrap ${
                    (activeCategory === category.name || clickedCategory === category.name)
                      ? 'text-purple-600 active'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  <span>{category.name}</span>
                  {category.subcategories && (
                    <ChevronDown 
                      className={`h-3 w-3 chevron-animate transition-transform duration-200 ${
                        (activeCategory === category.name || clickedCategory === category.name) 
                          ? 'rotate-180' 
                          : 'rotate-0'
                      }`} 
                    />
                  )}
                </button>

                {/* Desktop Mega Menu */}
                {category.subcategories && (activeCategory === category.name || clickedCategory === category.name) && (
                  <div className="hidden lg:block nav-dropdown w-60" onClick={(e) => e.stopPropagation()}>
                    <div className="grid grid-cols-1">
                      {category.subcategories.map((subcategory) => (
                        <div
                          key={subcategory.name}
                          className="relative group"
                          onMouseEnter={() => handleSubcategoryHover(subcategory.name)}
                          onMouseLeave={handleSubcategoryLeave}
                        >
                          <div
                            className={`nav-category-button block px-4 py-3 text-sm flex items-center justify-between transition-colors duration-200 cursor-pointer ${
                              (activeSubcategory === subcategory.name || clickedSubcategory === subcategory.name)
                                ? 'bg-purple-50 text-purple-600 active'
                                : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                            }`}
                            onClick={(e) => handleSubcategoryClick(subcategory.name, e)}
                          >
                            <span>{subcategory.name}</span>
                            {subcategory.items && (
                              <ChevronDown 
                                className={`h-3 w-3 chevron-animate subcategory-chevron transition-transform duration-200 ${
                                  (activeSubcategory === subcategory.name || clickedSubcategory === subcategory.name) ? 'rotate-180' : 'rotate-0'
                                }`} 
                              />
                            )}
                          </div>

                          {/* Submenu */}
                          {subcategory.items && (activeSubcategory === subcategory.name || clickedSubcategory === subcategory.name) && (
                            <div className="nav-submenu w-64" onClick={(e) => e.stopPropagation()}>
                              <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
                                More In {subcategory.name}
                              </div>
                              <div className="max-h-90 overflow-y-auto">
                                {subcategory.items.map((item) => (
                                  <LocalizedClientLink
                                    key={item}
                                    href={`${subcategory.href}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                                    onClick={handleMenuClose}
                                  >
                                    {item}
                                  </LocalizedClientLink>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleMenuClose}>
            <div className="absolute top-0 left-0 w-80 h-full bg-white shadow-lg overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                  <button
                    onClick={handleMenuClose}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="border-b border-gray-100">
                      <LocalizedClientLink
                        href={category.href}
                        className="block py-3 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                        onClick={handleMenuClose}
                      >
                        {category.name}
                      </LocalizedClientLink>
                      
                      {category.subcategories && (
                        <div className="pl-4 space-y-1">
                          {category.subcategories.slice(0, 5).map((subcategory) => (
                            <LocalizedClientLink
                              key={subcategory.name}
                              href={subcategory.href}
                              className="block py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200"
                              onClick={handleMenuClose}
                            >
                              {subcategory.name}
                            </LocalizedClientLink>
                          ))}
                          {category.subcategories.length > 5 && (
                            <LocalizedClientLink
                              href={category.href}
                              className="block py-2 text-sm text-purple-600 hover:text-purple-700 transition-colors duration-200"
                              onClick={handleMenuClose}
                            >
                              View All {category.name}
                            </LocalizedClientLink>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
