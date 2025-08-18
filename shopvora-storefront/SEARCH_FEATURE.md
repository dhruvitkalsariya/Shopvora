# Search Feature Implementation

## Overview
This document describes the search functionality implemented for the Shopvora storefront with the specified styling and features.

## Features Implemented

### 1. Search Styling
- **Search Icon Color**: `#2A1454` with 60% opacity
- **Input Background**: Light gray (`#fafafa`)
- **User Text Color**: `#2A1454` with 100% opacity when typing
- **Focus States**: Purple ring and border on focus

### 2. Dynamic Search Functionality
- **Real-time Search**: Debounced search with 300ms delay
- **Search Suggestions**: Dynamic suggestions based on:
  - Product titles
  - Categories (mobiles, tops, shoes, furniture, smart wearables)
  - Brands (motorola, samsung, apple, nike, adidas)
  - Product types (5g, fusion, edge, g85, g45)

### 3. Search Results
- **Product Results**: Shows actual products with thumbnails
- **Suggestions**: Shows relevant search suggestions
- **No Results**: Displays "No results found" message with helpful links

### 4. User Experience
- **Keyboard Navigation**: Arrow keys to navigate suggestions
- **Enter Key**: Select highlighted item or search current query
- **Escape Key**: Close dropdown
- **Click Outside**: Close dropdown
- **Clear Button**: Clear search input
- **Loading Indicator**: Shows while searching

### 5. Responsive Design
- **Mobile Friendly**: Works on all screen sizes
- **Touch Friendly**: Optimized for mobile interactions
- **Accessible**: Proper ARIA labels and keyboard navigation

## Files Created/Modified

### New Files
1. `src/app/api/search/route.ts` - Search API endpoint
2. `src/modules/layout/components/search/index.tsx` - Search component
3. `src/app/[countryCode]/(main)/search/page.tsx` - Search results page
4. `SEARCH_FEATURE.md` - This documentation

### Modified Files
1. `src/modules/layout/templates/nav/index.tsx` - Integrated search component

## API Endpoints

### GET /api/search
**Parameters:**
- `q` (string): Search query
- `limit` (number, optional): Number of results (default: 5)
- `countryCode` (string, optional): Country code (default: 'in')

**Response:**
```json
{
  "products": [
    {
      "id": "string",
      "title": "string",
      "handle": "string",
      "thumbnail": "string"
    }
  ],
  "suggestions": ["string"],
  "count": number
}
```

## Usage Examples

### Basic Search
1. Type in the search bar
2. Results appear in dropdown
3. Click on product to navigate to product page
4. Click on suggestion to search for that term

### Keyboard Navigation
1. Use arrow keys to navigate suggestions
2. Press Enter to select highlighted item
3. Press Escape to close dropdown

### Search Results Page
- Navigate to `/search?q=your-query` to see full search results
- Pagination available for large result sets
- "No results" page with helpful category links

## Styling Details

### Search Input
```css
background-color: #fafafa
border: transparent
focus: ring-2 ring-[#2A1454] border-[#2A1454]
```

### Search Icon
```css
color: #2A1454
opacity: 0.6
```

### User Text
```css
color: #2A1454 (when typing)
opacity: 1.0
```

## Future Enhancements
- Search history
- Popular searches
- Search analytics
- Advanced filters
- Search within categories
- Voice search integration 