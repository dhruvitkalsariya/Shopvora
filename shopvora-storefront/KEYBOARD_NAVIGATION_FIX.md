# Keyboard Navigation Fix for Search Component

## Issue Description
The search input field was showing suggestions when focused, but keyboard navigation (up/down arrow keys) was not working properly. Users could not navigate through suggestions using the keyboard.

## Root Cause
The keyboard navigation logic had several issues:

1. **Incorrect total items calculation**: When showing popular searches (no query), the code was calculating `totalItems` based on `results.products.length + results.suggestions.length`, but popular searches are stored in a separate array.

2. **Poor arrow key handling**: The arrow key logic didn't handle the case when nothing was selected and the user pressed down arrow.

3. **Inconsistent selection logic**: The Enter key handling didn't properly distinguish between search results and popular searches.

## Fixes Applied

### 1. Improved Total Items Calculation
```typescript
// Before
const totalItems = results.products.length + results.suggestions.length

// After
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
```

### 2. Enhanced Arrow Key Navigation
```typescript
// Arrow Down - Now starts from first item if nothing is selected
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

// Arrow Up - Now properly handles going back to no selection
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
```

### 3. Fixed Enter Key Handling
```typescript
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
```

### 4. Added Mouse Interaction
Added `onMouseEnter` handlers to all suggestion and product items to sync mouse hover with keyboard selection:

```typescript
onMouseEnter={() => setSelectedIndex(index)}
```

### 5. Improved Clear Search Functionality
```typescript
const clearSearch = () => {
  setQuery("")
  setResults({ products: [], suggestions: popularSearches, count: 0 })
  setShowDropdown(true)  // Show popular searches after clearing
  setSelectedIndex(-1)
}
```

## How to Test

### Test Case 1: Focus on Empty Search Field
1. Click on the search input field
2. Popular searches should appear
3. Press **Down Arrow** - should highlight first item
4. Press **Down Arrow** again - should move to next item
5. Press **Up Arrow** - should move to previous item
6. Press **Up Arrow** when on first item - should remove selection
7. Press **Enter** on a selected item - should search for that item

### Test Case 2: Type and Search
1. Type some text in the search field
2. Search results should appear
3. Use **Up/Down arrows** to navigate through results
4. Press **Enter** on a selected item - should navigate to product or search

### Test Case 3: Clear Search
1. Type some text and see search results
2. Click the clear button (X)
3. Popular searches should appear
4. Keyboard navigation should work with popular searches

### Test Case 4: Mouse and Keyboard Sync
1. Use mouse to hover over different items
2. The keyboard selection should sync with mouse hover
3. Use keyboard arrows after mouse hover - should continue from where mouse left off

## Expected Behavior

- **Focus**: When focusing on empty search field, popular searches appear
- **Arrow Down**: Starts from first item if nothing selected, moves down through items
- **Arrow Up**: Moves up through items, removes selection when at top
- **Enter**: Selects highlighted item or searches current query
- **Escape**: Closes dropdown and clears selection
- **Mouse**: Hovering over items updates keyboard selection
- **Clear**: Shows popular searches after clearing

## Files Modified
- `src/modules/layout/components/search/index.tsx` - Main search component with keyboard navigation fixes 