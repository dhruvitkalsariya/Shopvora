# Top Deals Product Card Component

A clean and attractive product card component designed specifically for e-commerce promotional sections and top deals displays.

## 🎯 Features

### ✅ Layout & Structure
- **Compact vertical card** with rounded corners and soft shadows
- **Top-right discount badge** with bright gradient (red/pink)
- **Centered product image** with subtle scale animation on hover
- **Responsive design** for mobile and desktop

### ✅ Content Display
- **Category label** in small caps with brand color
- **Product name** (2-line max) and brand name
- **Star rating** + review count with icons
- **Discounted price** (bold & colored) and original price (strikethrough)
- **Product tags** as pill chips (e.g., 5G, Camera, Running)
- **Limited deal info**:
  - 🔥 Stock status (e.g., "Only 3 left!")
  - ⏰ Countdown timer (e.g., "Ends in 2 hours")

### ✅ Interactive Elements
- **Add to Cart button** with hover animation (glow effect)
- **❤️ Wishlist icon** with bounce animation on click
- **Subtle card entrance animation** (slide-up + fade-in)
- **Hover effects** with scale and shadow transitions

### ✅ Visual Style
- **Light background** with soft gradients
- **High contrast typography** for prices and deal info
- **Shopvora brand colors** (#8C30F5) throughout
- **Smooth animations** and micro-interactions

## 📋 Usage

### Basic Usage
```tsx
import ProductCard, { ProductCardData } from "./ProductCard"

const product: ProductCardData = {
  id: 1,
  image: "/images/product.jpg",
  category: "Electronics",
  brand: "Apple",
  name: "iPad Pro 12.9-inch (5th Generation) with M2 Chip",
  rating: 4.8,
  reviewCount: 1247,
  originalPrice: 1099,
  discountedPrice: 899,
  discountPercentage: 18,
  tags: ["5G", "M2 Chip", "ProMotion", "Face ID"],
  stockCount: 3,
  url: "/products/ipad-pro"
}

<ProductCard product={product} index={0} />
```

### Grid Layout Example
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
  {products.map((product, index) => (
    <ProductCard 
      key={product.id} 
      product={product} 
      index={index}
    />
  ))}
</div>
```

## 🔧 Props Interface

```tsx
interface ProductCardData {
  id: string | number
  image: string
  category: string
  brand: string
  name: string
  rating: number
  reviewCount: number
  originalPrice: number
  discountedPrice: number
  discountPercentage: number
  tags: string[]
  stockCount?: number
  dealEndTime?: string // ISO string for countdown
  url?: string
}

interface ProductCardProps {
  product: ProductCardData
  index?: number // For staggered animations
}
```

## 🎨 Design Features

### Visual Elements
- **Discount Badge**: Top-right corner with gradient background
- **Wishlist Button**: Top-left corner with heart icon
- **Product Image**: Centered with hover scale effect
- **Category Label**: Purple background with brand color
- **Rating Stars**: Yellow stars with review count
- **Price Display**: Bold discounted price with strikethrough original
- **Product Tags**: Gray pill chips with feature highlights
- **Deal Info**: Stock status or countdown timer
- **CTA Button**: Full-width "Add to Cart" with gradient

### Animation Features
- **Entrance Animation**: Staggered slide-up with fade-in
- **Hover Effects**: Card lift, image scale, shadow increase
- **Button Interactions**: Scale and glow effects
- **Wishlist Toggle**: Heart fill animation with bounce
- **Floating Elements**: Subtle background decorations

## 📱 Responsive Design

### Breakpoints
- **Mobile** (`< 640px`): Single column, compact spacing
- **Tablet** (`640px - 1024px`): 2-3 columns, medium spacing
- **Desktop** (`> 1024px`): 4-5 columns, full spacing

### Touch Interactions
- **Touch-friendly buttons** with proper sizing
- **Hover states** work on touch devices
- **Optimized images** with responsive sizing
- **Smooth scrolling** and gesture support

## ♿ Accessibility Features

### Screen Reader Support
- **Alt text** for all images
- **Semantic HTML** structure
- **ARIA labels** for interactive elements
- **Proper heading hierarchy**

### Keyboard Navigation
- **Tab navigation** through all interactive elements
- **Focus indicators** with high contrast
- **Enter/Space** key support for buttons
- **Escape key** handling for modals

### Visual Accessibility
- **High contrast** text and backgrounds
- **Color-blind friendly** design
- **Readable font sizes** and spacing
- **Clear visual hierarchy**

## 🚀 Performance Optimizations

### Image Optimization
- **Next.js Image** component with lazy loading
- **Responsive image sizes** for different screens
- **Fallback images** for failed loads
- **Optimized formats** (WebP, AVIF)

### Animation Performance
- **Hardware acceleration** for transforms
- **Optimized reflows** and repaints
- **Efficient animation** timing functions
- **Reduced motion** support

### Bundle Optimization
- **Tree shaking** for unused features
- **Code splitting** for large components
- **Minimal dependencies** for faster loading
- **Efficient re-renders** with proper keys

## 🎯 Use Cases

### E-commerce Applications
- **Product listings** with promotional deals
- **Featured products** sections
- **Flash sales** and limited-time offers
- **Category pages** with product grids

### Marketing Campaigns
- **Email marketing** product showcases
- **Social media** product highlights
- **Landing pages** with featured items
- **Promotional banners** and carousels

## 🔄 State Management

### Local State
- **Wishlist toggle** (heart button)
- **Hover states** for animations
- **Loading states** for images
- **Error states** for failed loads

### External Integration
- **Cart management** (Add to Cart)
- **Wishlist sync** with backend
- **Analytics tracking** for interactions
- **Inventory updates** for stock counts

## 🛠️ Customization

### Styling Options
```tsx
// Custom colors
const customColors = {
  primary: '#8C30F5',
  secondary: '#7C2FD5',
  accent: '#FF6B6B',
  background: '#F8FAFC'
}

// Custom animations
const customAnimations = {
  duration: 0.3,
  ease: 'easeOut',
  stagger: 0.1
}
```

### Component Variants
- **Compact mode** for dense layouts
- **Detailed mode** with more information
- **Minimal mode** for simple displays
- **Interactive mode** with full functionality

## 📊 Analytics Integration

### Tracking Events
- **Product views** and impressions
- **Add to cart** clicks
- **Wishlist** interactions
- **Deal engagement** metrics

### Performance Metrics
- **Load times** and image optimization
- **Interaction rates** and conversions
- **Error rates** and fallback usage
- **User engagement** patterns

## 🔧 Development

### Prerequisites
- React 18+
- TypeScript 4.5+
- Tailwind CSS 3.0+
- Framer Motion 10.0+

### Installation
```bash
npm install framer-motion lucide-react
```

### Testing
```bash
npm test ProductCard.test.tsx
```

## 📝 Examples

### Demo Page
Visit `/product-card-demo` to see the component in action with various product states and configurations.

### Integration Examples
- **Homepage featured products**
- **Category page listings**
- **Search results display**
- **Related products sections**

## 🤝 Contributing

When contributing to this component:

1. **Maintain TypeScript types** and interfaces
2. **Add accessibility features** for new elements
3. **Test responsive behavior** across devices
4. **Update documentation** for new features
5. **Follow design system** guidelines
6. **Add unit tests** for new functionality

## 📄 License

This component is part of the Shopvora design system and follows the project's licensing terms. 