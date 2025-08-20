# Top Deals Component

A modern, responsive component for displaying top deals and offers, based on the Figma design. This component features smooth animations, hover effects, and an attractive UI.

## Features

- 🎨 **Attractive Design**: Based on the Figma design with modern UI elements
- 🎭 **Smooth Animations**: Framer Motion animations with staggered children
- 📱 **Responsive**: Fully responsive grid layout
- 🎯 **Interactive**: Hover effects, scale animations, and smooth transitions
- 🏷️ **Discount Badges**: Eye-catching discount badges with rotation effects
- 🖼️ **Image Optimization**: Next.js Image component with fallback images
- ♿ **Accessible**: Proper alt texts and semantic HTML

## Usage

```tsx
import TopDeals from "@modules/home/components/top-deals"

// In your component
<TopDeals />
```

## Component Structure

```
top-deals/
├── index.tsx          # Main component
├── top-deals.css      # Additional styles
└── README.md          # Documentation
```

## Data Structure

The component uses the following data structure for deals:

```typescript
interface DealItem {
  id: number
  name: string
  image: string
  href: string
  discount: string
  bgColor: string
  borderColor: string
  imageFallback: string
}
```

## Styling

The component uses:
- **Tailwind CSS** for utility classes
- **Custom CSS** for additional animations and effects
- **Framer Motion** for smooth animations
- **Gradient backgrounds** for visual appeal

## Animations

- **Staggered entrance**: Cards appear with a staggered delay
- **Hover effects**: Scale, lift, and color transitions
- **Discount badges**: Rotation and glow effects
- **Shine effect**: Light sweep across cards on hover

## Responsive Breakpoints

- **Mobile**: 1 column
- **Tablet**: 2 columns  
- **Desktop**: 5 columns

## Customization

To customize the component:

1. **Modify data**: Update the `topDealsData` array in `index.tsx`
2. **Change colors**: Update the `bgColor` and `borderColor` properties
3. **Adjust animations**: Modify the Framer Motion variants
4. **Update styles**: Edit the CSS file for additional effects

## Demo

Visit `/top-deals-demo` to see the component in action.

## Dependencies

- `framer-motion`: For animations
- `lucide-react`: For icons
- `next/image`: For optimized images
- `@modules/common/components/localized-client-link`: For navigation

## Browser Support

- Modern browsers with CSS Grid support
- Fallbacks for older browsers
- Progressive enhancement approach 