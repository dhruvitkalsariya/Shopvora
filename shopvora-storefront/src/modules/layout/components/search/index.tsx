"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, ArrowRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

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
  const [isProgrammaticUpdate, setIsProgrammaticUpdate] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Popular searches and categories
  const popularSearches = [
    "mobiles",
    "tops", 
    "shoes",
    "furniture",
    "smart wearables",
    "electronics",
    "fashion",
    "home & garden",
    "beauty",
    "toys",
    "sports",
    "books"
  ]

  // Debounced search effect
  useEffect(() => {
    // Skip search if this is a programmatic update
    if (isProgrammaticUpdate) {
      setIsProgrammaticUpdate(false)
      return
    }

    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        performSearch(query)
      } else {
        setResults({ products: [], suggestions: [], count: 0 })
        // Don't hide dropdown if focused and no query - show popular searches
        if (isFocused) {
          setShowDropdown(true)
        } else {
          setShowDropdown(false)
        }
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query, isFocused, isProgrammaticUpdate])

  // Read URL search parameters and populate input
  useEffect(() => {
    const urlQuery = searchParams.get('q')
    if (urlQuery && urlQuery !== query) {
      setIsProgrammaticUpdate(true)
      setQuery(urlQuery)
    }
  }, [searchParams]) // Removed query dependency to prevent infinite loop

  // Ensure input value is synchronized with query state
  useEffect(() => {
    if (inputRef.current && inputRef.current.value !== query) {
      inputRef.current.value = query
    }
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
      // Fallback to showing popular searches if API fails
      setResults({ 
        products: [], 
        suggestions: popularSearches.filter(item => 
          item.toLowerCase().includes(searchQuery.toLowerCase())
        ), 
        count: 0 
      })
      setShowDropdown(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Calculate total items based on what's actually being displayed
    let totalItems = 0
    let currentSuggestions: string[] = []
    
    if (query.trim()) {
      // When user has typed something, show products + suggestions
      totalItems = results.products.length + results.suggestions.length
      currentSuggestions = results.suggestions
    } else {
      // When no query, show popular searches
      totalItems = popularSearches.length
      currentSuggestions = popularSearches
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex(prev => {
          if (prev < totalItems - 1) {
            return prev + 1
          } else if (prev === -1) {
            // If nothing is selected, start from the first item
            return 0
          }
          return prev
        })
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex(prev => {
          if (prev > 0) {
            return prev - 1
          } else if (prev === 0) {
            // If at first item, go back to no selection
            return -1
          }
          return prev
        })
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0) {
          if (query.trim() && selectedIndex < results.products.length) {
            // Navigate to product
            router.push(`/products/${results.products[selectedIndex].handle}`)
          } else {
            // Use suggestion (either from search results or popular searches)
            const suggestionIndex = query.trim() ? selectedIndex - results.products.length : selectedIndex
            const selectedSuggestion = currentSuggestions[suggestionIndex]
            if (selectedSuggestion) {
              setQuery(selectedSuggestion)
              router.push(`/search?q=${encodeURIComponent(selectedSuggestion)}`)
            }
          }
        } else if (query.trim()) {
          // Search with current query
          router.push(`/search?q=${encodeURIComponent(query)}`)
        }
        setShowDropdown(false)
        setSelectedIndex(-1)
        break
      case "Escape":
        setShowDropdown(false)
        setSelectedIndex(-1)
        break
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
    // Always show dropdown when focused, even without query
    setShowDropdown(true)
    
    // If no query, show popular searches
    if (!query.trim()) {
      setResults({ 
        products: [], 
        suggestions: popularSearches, 
        count: 0 
      })
      setSelectedIndex(-1) // Reset selection when focusing
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    // Delay hiding dropdown to allow for clicks
    setTimeout(() => {
      // Only hide dropdown if not clicking on a suggestion
      if (!searchRef.current?.contains(document.activeElement)) {
        setShowDropdown(false)
      }
    }, 200)
  }

  const clearSearch = () => {
    setQuery("")
    setResults({ products: [], suggestions: popularSearches, count: 0 })
    setShowDropdown(true)
    setSelectedIndex(-1)
  }

  const handleProductClick = (product: SearchResult) => {
    setShowDropdown(false)
    setQuery("")
    router.push(`/products/${product.handle}`)
  }

  const handleSuggestionClick = (suggestion: string) => {
    // Close dropdown first to prevent interference
    setShowDropdown(false)
    setSelectedIndex(-1)
    
    // Set the query without triggering the debounced search
    setIsProgrammaticUpdate(true)
    setQuery(suggestion)
    
    // Focus the input and ensure the state is updated
    if (inputRef.current) {
      // Ensure the input is focused first
      inputRef.current.focus()
      
      // Directly set the input value to ensure it's updated
      inputRef.current.value = suggestion
      
      // Use multiple requestAnimationFrame calls to ensure state updates are processed
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (inputRef.current) {
            inputRef.current.select() // Select the text so user can easily modify it
          }
        })
      })
    }
    
    // Automatically perform search when suggestion is clicked
    setTimeout(() => {
      router.push(`/search?q=${encodeURIComponent(suggestion)}`)
    }, 300) // Increased delay to ensure state updates are processed
  }

  // Show popular searches when no query and focused
  const shouldShowPopularSearches = isFocused && !query.trim() && results.suggestions.length === 0

  return (
    <div className="flex-1 max-w-2xl mx-6" ref={searchRef}>
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            // Only update if this is a user input, not a programmatic update
            if (!isProgrammaticUpdate) {
              setQuery(e.target.value)
            }
          }}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search for products, brands and more"
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

        {/* Search Button */}
        {query && (
          <button
            onClick={() => {
              if (query.trim()) {
                router.push(`/search?q=${encodeURIComponent(query.trim())}`)
              }
            }}
            className="absolute right-10 top-1/2 -translate-y-1/2 h-8 w-8 bg-[#2A1454] text-white rounded-md flex items-center justify-center hover:bg-[#1a0f3a] transition-all duration-200 shadow-md hover:shadow-lg z-10"
            title="Search"
          >
            <Search className="h-4 w-4" />
          </button>
        )}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute right-20 top-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#2A1454] border-t-transparent"></div>
          </div>
        )}

        {/* Search Dropdown */}
        {showDropdown && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
            {/* Products */}
            {results.products.length > 0 && (
              <div className="p-2">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide px-2 py-1">
                  Products
                </div>
                {results.products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`flex items-center space-x-3 px-2 py-2 rounded cursor-pointer transition-all duration-150 hover:bg-purple-100 hover:shadow-sm border border-transparent hover:border-purple-200 ${
                      selectedIndex === index ? 'bg-purple-100 border-purple-200 shadow-sm' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleProductClick(product)
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault()
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
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
              <div className={`${results.products.length > 0 ? 'border-t border-gray-100' : ''}`}>
                <div className="p-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide px-2 py-1">
                    {query.trim() ? "Suggestions" : "Popular Searches"}
                  </div>
                  {results.suggestions.map((suggestion, index) => (
                    <div
                      key={suggestion}
                      className={`flex items-center justify-between px-2 py-2 rounded cursor-pointer transition-all duration-150 hover:bg-purple-100 hover:shadow-sm border border-transparent hover:border-purple-200 text-sm text-gray-700 ${
                        selectedIndex === results.products.length + index ? 'bg-purple-100 border-purple-200 shadow-sm' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleSuggestionClick(suggestion)
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault()
                      }}
                      onMouseEnter={() => setSelectedIndex(results.products.length + index)}
                    >
                      <span>{suggestion}</span>
                      <ArrowRight className="h-3 w-3 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches when no query and focused */}
            {shouldShowPopularSearches && (
              <div className="p-2">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide px-2 py-1">
                  Popular Searches
                </div>
                {popularSearches.map((suggestion, index) => (
                  <div
                    key={suggestion}
                    className={`flex items-center justify-between px-2 py-2 rounded cursor-pointer transition-all duration-150 hover:bg-purple-100 hover:shadow-sm border border-transparent hover:border-purple-200 text-sm text-gray-700 ${
                      selectedIndex === index ? 'bg-purple-100 border-purple-200 shadow-sm' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleSuggestionClick(suggestion)
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault()
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <span>{suggestion}</span>
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                  </div>
                ))}
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