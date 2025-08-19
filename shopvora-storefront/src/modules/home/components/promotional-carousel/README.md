# Carousel Components

A comprehensive collection of carousel components built with React, TypeScript, Framer Motion, and Tailwind CSS. These components are designed to be highly customizable, accessible, and performant.

## 🚀 Features

- **Auto-play functionality** with configurable intervals
- **Touch & swipe gestures** for mobile devices
- **Keyboard navigation** (arrow keys, spacebar)
- **Smooth animations** powered by Framer Motion
- **Responsive design** for all screen sizes
- **Accessibility support** with ARIA labels
- **Customizable themes** and styling
- **Multiple variants** for different use cases
- **TypeScript support** with full type safety

## 📦 Components

### 1. PromotionalCarousel
The main promotional carousel component with 3D text effects and animated backgrounds.

```tsx
import PromotionalCarousel from "@/modules/home/components/promotional-carousel"

export default function HomePage() {
  return <PromotionalCarousel />
}
```

### 2. EnhancedCarousel
A highly configurable carousel component with advanced features.

```tsx
import EnhancedCarousel from "@/modules/home/components/promotional-carousel/enhanced-carousel"
import { promotionalCarouselData } from "@/modules/home/components/promotional-carousel/carousel-data"

export default function CustomCarousel() {
  return (
    <EnhancedCarousel
      slides={promotionalCarouselData}
      height="h-[400px]"
      autoPlayInterval={5000}
      showControls={true}
      showIndicators={true}
      showProgressBar={true}
      showPlayPause={true}
      enableSwipe={true}
      className=""
    />
  )
}
```

### 3. ProductCarousel
A specialized carousel for showcasing products in a grid layout.

```tsx
import ProductCarousel from "@/modules/home/components/promotional-carousel/product-carousel"

const products = [
  {
    id: "1",
    name: "Product Name",
    price: 99.99,
    originalPrice: 129.99,
    image: "/product-image.jpg",
    rating: 4.5,
    reviewCount: 128,
    badge: "BEST SELLER",
    discount: 23,
  },
  // ... more products
]

export default function ProductsPage() {
  return (
    <ProductCarousel
      products={products}
      title="Featured Products"
      subtitle="Discover our most popular items"
      height="h-[500px]"
      itemsPerSlide={4}
    />
  )
}
```

## 🎨 Customization

### Carousel Data Structure

```typescript
interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundColor: string // Tailwind gradient classes
  accentColor: string
  image?: string // Optional background image
}
```

### Available Themes

The carousel comes with three pre-built themes:

1. **Promotional Theme** (`promotionalCarouselData`) - Eye-catching promotional banners
2. **Seasonal Theme** (`seasonalCarouselData`) - Holiday and seasonal variations
3. **Minimal Theme** (`minimalCarouselData`) - Clean and subtle design

### Custom Background Gradients

You can create custom background gradients using Tailwind CSS classes:

```typescript
const customSlides = [
  {
    id: 1,
    title: "CUSTOM SALE",
    subtitle: "SPECIAL OFFERS",
    description: "Limited time deals",
    ctaText: "SHOP NOW",
    ctaLink: "/sale",
    backgroundColor: "from-indigo-900 via-purple-800 to-pink-700",
    accentColor: "yellow"
  }
]
```

## ⚙️ Configuration Options

### EnhancedCarousel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `CarouselSlide[]` | - | Array of slide data |
| `height` | `string` | `"h-[400px]"` | Height of the carousel |
| `autoPlayInterval` | `number` | `5000` | Auto-play interval in milliseconds |
| `showControls` | `boolean` | `true` | Show navigation arrows |
| `showIndicators` | `boolean` | `true` | Show slide indicators |
| `showProgressBar` | `boolean` | `true` | Show progress bar |
| `showPlayPause` | `boolean` | `true` | Show play/pause button |
| `enableSwipe` | `boolean` | `true` | Enable swipe gestures |
| `className` | `string` | `""` | Additional CSS classes |

### ProductCarousel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `products` | `Product[]` | - | Array of product data |
| `title` | `string` | - | Section title |
| `subtitle` | `string` | - | Section subtitle |
| `height` | `string` | `"h-[400px]"` | Height of the carousel |
| `itemsPerSlide` | `number` | `4` | Number of products per slide |
| `autoPlayInterval` | `number` | `5000` | Auto-play interval |
| `showControls` | `boolean` | `true` | Show navigation arrows |
| `showIndicators` | `boolean` | `true` | Show slide indicators |
| `showProgressBar` | `boolean` | `true` | Show progress bar |
| `showPlayPause` | `boolean` | `true` | Show play/pause button |
| `enableSwipe` | `boolean` | `true` | Enable swipe gestures |
| `className` | `string` | `""` | Additional CSS classes |

## 🎯 Usage Examples

### Basic Promotional Carousel

```tsx
import PromotionalCarousel from "@/modules/home/components/promotional-carousel"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <PromotionalCarousel />
    </div>
  )
}
```

### Custom Themed Carousel

```tsx
import EnhancedCarousel from "@/modules/home/components/promotional-carousel/enhanced-carousel"

const customSlides = [
  {
    id: 1,
    title: "SUMMER SALE",
    subtitle: "HOT DEALS",
    description: "Up to 50% off summer collection",
    ctaText: "SHOP SUMMER",
    ctaLink: "/summer-sale",
    backgroundColor: "from-yellow-400 via-orange-500 to-red-500",
    accentColor: "white"
  }
]

export default function SummerSale() {
  return (
    <EnhancedCarousel
      slides={customSlides}
      height="h-[350px]"
      autoPlayInterval={4000}
      showPlayPause={false}
    />
  )
}
```

### Product Showcase

```tsx
import ProductCarousel from "@/modules/home/components/promotional-carousel/product-carousel"

const featuredProducts = [
  // ... product data
]

export default function FeaturedProducts() {
  return (
    <ProductCarousel
      products={featuredProducts}
      title="Featured Products"
      subtitle="Our most popular items"
      itemsPerSlide={3}
      height="h-[450px]"
    />
  )
}
```

## 🎨 Styling Customization

### Custom CSS Classes

You can override default styles by passing custom classes:

```tsx
<EnhancedCarousel
  slides={slides}
  className="border-4 border-blue-500 rounded-xl shadow-2xl"
/>
```

### Custom Animations

The carousel uses Framer Motion for animations. You can customize transitions:

```tsx
// In the component file, modify the motion.div transitions
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 1.05 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>
```

## ♿ Accessibility

The carousel components include:

- **ARIA labels** for all interactive elements
- **Keyboard navigation** support
- **Focus management** for screen readers
- **Semantic HTML** structure
- **Color contrast** compliance

### Keyboard Shortcuts

- `Arrow Left` - Previous slide
- `Arrow Right` - Next slide
- `Spacebar` - Toggle auto-play
- `Tab` - Navigate between controls

## 📱 Responsive Design

The carousel components are fully responsive and adapt to different screen sizes:

- **Mobile**: Optimized for touch interactions
- **Tablet**: Balanced layout with touch and mouse support
- **Desktop**: Full feature set with hover effects

## 🔧 Custom Hook

The carousel functionality is powered by a custom hook that can be reused:

```tsx
import { useCarousel } from "@/lib/hooks/use-carousel"

function CustomCarousel() {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay,
    toggleAutoPlay,
    isAutoPlaying,
  } = useCarousel({
    totalSlides: 5,
    autoPlayInterval: 5000,
    autoPlay: true,
    loop: true,
  })

  // Use the carousel logic in your component
}
```

## 🚀 Performance

The carousel components are optimized for performance:

- **Lazy loading** of images
- **Efficient re-renders** with React.memo
- **Optimized animations** with Framer Motion
- **Memory management** with proper cleanup

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Ensure image URLs are correct and accessible
2. **Auto-play not working**: Check if the component is mounted and visible
3. **Swipe not working**: Verify `enableSwipe` prop is set to `true`
4. **Keyboard navigation issues**: Ensure the carousel has focus

### Debug Mode

Enable debug logging by setting the environment variable:

```bash
NEXT_PUBLIC_CAROUSEL_DEBUG=true
```

## 📄 License

This carousel component library is part of the Shopvora project and follows the same licensing terms.

## 🤝 Contributing

To contribute to the carousel components:

1. Follow the existing code style and patterns
2. Add TypeScript types for new features
3. Include accessibility considerations
4. Test on multiple devices and screen sizes
5. Update documentation for new features

## 📞 Support

For questions or issues with the carousel components, please refer to the project documentation or create an issue in the repository. 