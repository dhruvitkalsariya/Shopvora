# Recently Viewed Component

A modern, responsive component for displaying recently viewed products, designed specifically for logged-in users. This component combines the container UI from "Explore New Collection" with the card UI from "Popular Products".

## Features

- 🎨 **Consistent Design**: Uses the same container styling as "Explore New Collection" with purple gradient background
- 🃏 **Product Cards**: Implements the same card design as "Popular Products" with all interactive elements
- 👤 **User-Specific**: Only shows for logged-in users (controlled by `isLoggedIn` prop)
- 🎭 **Smooth Animations**: Framer Motion animations with staggered entrance effects
- 📱 **Responsive**: Fully responsive grid layout (1-5 columns based on screen size)
- 🎯 **Interactive**: Hover effects, wishlist functionality, and smooth transitions
- 🏷️ **Status Badges**: NEW, discount, out of stock, and "Recently Viewed" badges
- 🖼️ **Image Optimization**: Next.js Image component with fallback images
- ♿ **Accessible**: Proper alt texts and semantic HTML

## Usage

```tsx
import RecentlyViewed from "@modules/home/components/recently-viewed"

// In your component
<RecentlyViewed isLoggedIn={true} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isLoggedIn` | `boolean` | `false` | Controls whether the component is visible |

## Component Structure

```
recently-viewed/
├── index.tsx          # Main component
└── README.md          # Documentation
```

## Data Structure

The component uses the following data structure for recently viewed products:

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
  viewedAt: Date
}
```

## Styling

The component uses:
- **Container**: Same purple gradient background as "Explore New Collection" (`rgba(219, 208, 253, 0.4)`)
- **Cards**: Same styling as "Popular Products" with purple borders and hover effects
- **Typography**: Gradient text for the main heading
- **Badges**: Purple "Recently Viewed" badge on each product card

## Animations

- **Staggered entrance**: Cards appear with a staggered delay
- **Hover effects**: Scale, lift, and color transitions
- **Wishlist toggle**: Heart icon animation and color changes
- **Image zoom**: Subtle zoom effect on hover

## Responsive Breakpoints

- **Mobile**: 1 column
- **Tablet**: 2 columns  
- **Large screens**: 4 columns
- **Extra large**: 5 columns

## Integration

The component is integrated into the main homepage below the "Top Deals" section and only appears for logged-in users. It can be easily integrated into other pages by importing and using the component with the appropriate `isLoggedIn` prop.

## Customization

To customize the component:

1. **Modify data**: Update the `recentlyViewedProducts` array in `index.tsx`
2. **Change styling**: Update the background color, card styling, or animations
3. **Add features**: Implement actual recently viewed tracking logic
4. **API integration**: Connect to backend API for real recently viewed data

## Future Enhancements

- Real-time recently viewed tracking
- API integration for dynamic data
- User preferences for display options
- Analytics tracking for recently viewed interactions 