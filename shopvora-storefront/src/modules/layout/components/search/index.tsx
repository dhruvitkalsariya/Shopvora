"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

interface SearchResult {
  id: string
  title: string
  handle: string
  thumbnail?: string
}

interface SearchResponse {
  products: SearchResult[]
  suggestions: string[]
  count: number
}

export default function SearchComponent() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResponse>({ products: [], suggestions: [], count: 0 })
  const [isLoading, setIsLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        performSearch(query)
      } else {
        setResults({ products: [], suggestions: [], count: 0 })
        setShowDropdown(false)
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const performSearch = async (searchQuery: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&limit=10`)
      const data: SearchResponse = await response.json()
      setResults(data)
      setShowDropdown(true)
      setSelectedIndex(-1)
    } catch (error) {
      console.error("Search error:", error)
      setResults({ products: [], suggestions: [], count: 0 })
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = results.products.length + results.suggestions.length

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex(prev => (prev < totalItems - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0) {
          if (selectedIndex < results.products.length) {
            // Navigate to product
            router.push(`/products/${results.products[selectedIndex].handle}`)
          } else {
            // Use suggestion
            const suggestionIndex = selectedIndex - results.products.length
            setQuery(results.suggestions[suggestionIndex])
            router.push(`/search?q=${encodeURIComponent(results.suggestions[suggestionIndex])}`)
          }
        } else if (query.trim()) {
          // Search with current query
          router.push(`/search?q=${encodeURIComponent(query)}`)
        }
        setShowDropdown(false)
        break
      case "Escape":
        setShowDropdown(false)
        setSelectedIndex(-1)
        break
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    router.push(`/search?q=${encodeURIComponent(suggestion)}`)
    setShowDropdown(false)
  }

  const handleProductClick = (product: SearchResult) => {
    router.push(`/products/${product.handle}`)
    setShowDropdown(false)
  }

  const clearSearch = () => {
    setQuery("")
    setResults({ products: [], suggestions: [], count: 0 })
    setShowDropdown(false)
    setSelectedIndex(-1)
  }

  const showPopularSearches = () => {
    const popularSearches = {
      products: [],
      suggestions: [
        "mobiles",
        "tops",
        "shoes", 
        "furniture",
        "smart wearables",
        "electronics",
        "fashion",
        "home & garden"
      ],
      count: 0
    }
    setResults(popularSearches)
    setShowDropdown(true)
  }

  const handleFocus = () => {
    setIsFocused(true)
    // Show popular searches when focused, even without typing
    if (!query.trim()) {
      showPopularSearches()
    } else {
      setShowDropdown(true)
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className="flex-1 max-w-2xl mx-6" ref={searchRef}>
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search for Products, Brands and More"
          className="w-full pl-10 pr-10 py-2 rounded-lg border placeholder-gray-500 text-sm transition-all duration-200"
          style={{
            backgroundColor: 'rgba(106, 52, 209, 0.05)',
            color: query ? 'rgb(106, 52, 209)' : '#6b7280',
            borderColor: isFocused ? 'rgb(106, 52, 209)' : 'transparent',
            outline: 'none',
            boxShadow: isFocused ? 'none' : 'rgba(106, 52, 209, 0.2) 4px 3px 0px' 
          }}
        />
        
        {/* Search Icon */}
        <Search 
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" 
          style={{ 
            color: 'rgb(106, 52, 209)',
            opacity: 1
          }} 
        />
        
        {/* Clear Button */}
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute right-10 top-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#2A1454] border-t-transparent"></div>
          </div>
        )}

        {/* Search Dropdown */}
        {showDropdown && (results.products.length > 0 || results.suggestions.length > 0) && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
            {/* Products */}
            {results.products.length > 0 && (
              <div className="p-2">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide px-2 py-1">
                  Products
                </div>
                {results.products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`flex items-center space-x-3 px-2 py-2 rounded cursor-pointer hover:bg-gray-50 ${
                      selectedIndex === index ? 'bg-gray-50' : ''
                    }`}
                    onClick={() => handleProductClick(product)}
                  >
                    {product.thumbnail && (
                      <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        className="w-8 h-8 object-cover rounded"
                      />
                    )}
                    <span className="text-sm text-gray-700 flex-1">{product.title}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Suggestions */}
            {results.suggestions.length > 0 && (
              <div className="border-t border-gray-100">
                <div className="p-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide px-2 py-1">
                    Suggestions
                  </div>
                  {results.suggestions.map((suggestion, index) => (
                    <div
                      key={suggestion}
                      className={`px-2 py-2 rounded cursor-pointer hover:bg-gray-50 text-sm text-gray-700 ${
                        selectedIndex === results.products.length + index ? 'bg-gray-50' : ''
                      }`}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* No Results */}
        {showDropdown && query.trim() && !isLoading && results.products.length === 0 && results.suggestions.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4">
            <div className="text-center text-gray-500">
              <div className="text-sm font-medium mb-1">No results found</div>
              <div className="text-xs">Try searching with different keywords</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 