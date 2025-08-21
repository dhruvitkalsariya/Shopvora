# Recently Viewed Page Component

A comprehensive page component for displaying all recently viewed products for logged-in users. This page is accessible at `/account/recently-viewed` and provides advanced filtering, sorting, and management features.

## Features

- 🎨 **Full Page Layout**: Complete page with header, filters, and product grid
- 🔍 **Advanced Filtering**: Filter by product categories
- 📊 **Sorting Options**: Sort by recent, oldest, price, and rating
- 🗑️ **History Management**: Clear all recently viewed history
- 🎭 **Smooth Animations**: Framer Motion animations throughout
- 📱 **Responsive Design**: Fully responsive grid layout
- 🎯 **Interactive Elements**: Wishlist, quick actions, and hover effects
- 🏷️ **Status Badges**: NEW, discount, out of stock, and time badges
- 🖼️ **Image Optimization**: Next.js Image component with fallbacks
- ♿ **Accessible**: Proper alt texts and semantic HTML

## Usage

```tsx
import RecentlyViewedPage from "@modules/account/components/recently-viewed-page"

// In your page component
<RecentlyViewedPage />
```

## Page Structure

```
/account/recently-viewed/
├── page.tsx                    # Next.js page component
└── @modules/account/components/recently-viewed-page/
    ├── index.tsx              # Main component
    └── README.md              # Documentation
```

## Features Breakdown

### Header Section
- **Back Navigation**: Link back to account dashboard
- **Page Title**: "Recently Viewed Products" with product count
- **Clear History**: Button to clear all recently viewed history

### Filtering & Sorting
- **Category Filter**: Filter by product categories (All, Laptop & PC, Smartphone, etc.)
- **Sort Options**: 
  - Most Recent (default)
  - Oldest First
  - Price: Low to High
  - Price: High to Low
  - Highest Rated

### Product Grid
- **Responsive Layout**: 1-4 columns based on screen size
- **Product Cards**: Same design as Popular Products with additional features
- **Time Badges**: Shows when each product was viewed (e.g., "2 hours ago")
- **Empty State**: Shows when no recently viewed products exist

## Data Structure

The component uses an extended product structure:

```typescript
interface RecentlyViewedProduct {
  id: number
  name: string
  category: string
  description: string
  currentPrice: string
  originalPrice: string
  rating: number
  reviewCount: number
  image: string
  href: string
  isNew: boolean
  discount: number
  inStock: boolean
  viewedAt: Date  // When the product was viewed
}
```

## Styling

- **Header**: White background with border bottom
- **Filters**: Clean filter buttons with purple active state
- **Product Cards**: White cards with purple borders and hover effects
- **Typography**: Consistent with the rest of the application
- **Colors**: Purple theme matching the brand

## Animations

- **Page Load**: Fade-in animation for the entire page
- **Product Cards**: Staggered entrance with hover effects
- **Filter Buttons**: Smooth color transitions
- **Sort Dropdown**: Standard select styling with focus states

## Responsive Breakpoints

- **Mobile**: 1 column
- **Tablet**: 2 columns  
- **Desktop**: 3 columns
- **Large Desktop**: 4 columns

## Authentication

This page is automatically protected by the account layout system:
- Only accessible to logged-in users
- Redirects to login page if not authenticated
- Uses the existing account authentication system

## Integration

The page integrates with:
- **Account Layout**: Uses the existing account dashboard layout
- **Navigation**: Back button links to account dashboard
- **Product Links**: All product cards link to their respective product pages
- **Wishlist**: Integrates with the existing wishlist system

## Future Enhancements

- **Real-time Updates**: Live updates when new products are viewed
- **API Integration**: Connect to backend for actual recently viewed data
- **Analytics**: Track user interactions with recently viewed products
- **Export/Import**: Allow users to export their viewing history
- **Recommendations**: Show related products based on viewing history
- **Bulk Actions**: Select multiple products for bulk operations 