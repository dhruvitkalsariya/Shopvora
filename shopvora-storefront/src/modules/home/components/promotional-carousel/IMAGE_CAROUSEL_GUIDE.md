# Image Carousel Guide

This guide explains how to use the new Image Carousel component with your own images.

## 📁 Where to Save Your Images

Save your carousel images in the following directory:
```
shopvora-storefront/public/images/banners/
```

**Recommended image specifications:**
- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 16:9 or 2:1 (landscape)
- **Resolution**: 1920x1080px or higher
- **File Size**: Optimize for web (under 500KB per image)

## 🚀 Quick Start

### 1. Add Your Images
Place your banner images in `/public/images/banners/` with descriptive names:
```
public/images/banners/
├── banner-1.jpg
├── banner-2.jpg
├── banner-3.jpg
├── banner-4.jpg
└── banner-5.jpg
```

### 2. Update the Data
Edit `image-carousel-data.ts` to match your images:

```typescript
export const imageCarouselData: ImageCarouselSlide[] = [
  {
    id: 1,
    image: "/images/banners/banner-1.jpg", // Your image path
    alt: "Your banner description",
    title: "YOUR TITLE",
    subtitle: "YOUR SUBTITLE", 
    description: "Your description text",
    ctaText: "SHOP NOW!",
    ctaLink: "/your-link"
  },
  // Add more slides...
]
```

### 3. Use the Component
Import and use the carousel in your page:

```tsx
import ImageCarouselWrapper from "@/modules/home/components/promotional-carousel/image-carousel-wrapper"

export default function YourPage() {
  return (
    <div>
      <ImageCarouselWrapper />
      {/* Your other content */}
    </div>
  )
}
```

## 🎨 Features

### Control Buttons (Under Carousel)
- **Position**: Below the carousel image
- **Style**: White circular buttons with shadow
- **SVG Color**: #2A1454 (dark purple)
- **Hover Effects**: Enhanced shadow and smooth transitions

### Slide Indicators
- **Position**: Below the carousel image
- **Active Color**: #2A1454
- **Inactive Color**: Gray
- **Click to Navigate**: Direct slide selection

### Auto-Play Features
- **Auto-play**: Enabled by default (5-second intervals)
- **Pause on Hover**: Automatically pauses when mouse is over carousel
- **Play/Pause Button**: Top-right corner of carousel
- **Progress Bar**: Bottom of carousel showing slide progress

### Touch & Keyboard Support
- **Swipe Gestures**: Swipe left/right on mobile
- **Keyboard Navigation**: Arrow keys and spacebar
- **Accessibility**: Full ARIA support

## ⚙️ Customization Options

### Basic Usage
```tsx
<ImageCarousel
  slides={yourSlides}
  height="h-[600px]"
/>
```

### Advanced Configuration
```tsx
<ImageCarousel
  slides={yourSlides}
  height="h-[500px]"
  autoPlayInterval={3000} // 3 seconds
  showControls={true}
  showIndicators={true}
  showProgressBar={true}
  showPlayPause={true}
  enableSwipe={true}
  className="custom-class"
/>
```

### Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `ImageCarouselSlide[]` | - | Array of slide data |
| `height` | `string` | `"h-[400px]"` | Height of the carousel |
| `autoPlayInterval` | `number` | `5000` | Auto-play interval in milliseconds |
| `showControls` | `boolean` | `true` | Show navigation arrows (under carousel) |
| `showIndicators` | `boolean` | `true` | Show slide indicators (under carousel) |
| `showProgressBar` | `boolean` | `true` | Show progress bar |
| `showPlayPause` | `boolean` | `true` | Show play/pause button |
| `enableSwipe` | `boolean` | `true` | Enable swipe gestures |
| `className` | `string` | `""` | Additional CSS classes |

## 📝 Slide Data Structure

```typescript
interface ImageCarouselSlide {
  id: number
  image: string        // Required: Image path
  alt: string          // Required: Alt text for accessibility
  title?: string       // Optional: Large title overlay
  subtitle?: string    // Optional: Subtitle overlay
  description?: string // Optional: Description text
  ctaText?: string     // Optional: Call-to-action button text
  ctaLink?: string     // Optional: Call-to-action link
}
```

## 🎯 Examples

### Minimal Image Carousel (No Text Overlay)
```typescript
const minimalSlides = [
  {
    id: 1,
    image: "/images/banners/banner-1.jpg",
    alt: "Product showcase"
  },
  {
    id: 2,
    image: "/images/banners/banner-2.jpg", 
    alt: "Sale promotion"
  }
]
```

### Full Featured Carousel
```typescript
const fullSlides = [
  {
    id: 1,
    image: "/images/banners/banner-1.jpg",
    alt: "Big Sale Banner",
    title: "BIG SALE",
    subtitle: "SPECIAL OFFERS",
    description: "NEW YEAR EDITION PROMOTION",
    ctaText: "SHOP NOW!",
    ctaLink: "/products"
  }
]
```

## 🔧 Troubleshooting

### Images Not Loading
- Check that image paths start with `/images/banners/`
- Verify images exist in the correct directory
- Ensure image file names match exactly (case-sensitive)

### Controls Not Styled Correctly
- The component uses inline styles for SVG colors
- Check that Tailwind CSS is properly configured
- Verify that the `#2A1454` color is being applied

### Performance Issues
- Optimize your images for web use
- Consider using WebP format for better compression
- Keep image file sizes under 500KB

## 🎨 Styling Customization

### Custom Button Colors
To change the button colors, modify the component:

```tsx
// In image-carousel.tsx, change these lines:
<ChevronLeft className="w-6 h-6" style={{ color: "#YOUR_COLOR" }} />
<ChevronRight className="w-6 h-6" style={{ color: "#YOUR_COLOR" }} />
```

### Custom Heights
```tsx
// Different height options:
height="h-[400px]"  // Standard
height="h-[600px]"  // Tall
height="h-[300px]"  // Short
height="h-screen"   // Full screen
```

## 📱 Responsive Design

The carousel is fully responsive and will:
- Scale images properly on all screen sizes
- Maintain aspect ratio
- Adjust text sizes for mobile devices
- Optimize touch interactions for mobile

## ♿ Accessibility

The carousel includes:
- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Alt text for all images
- Semantic HTML structure 