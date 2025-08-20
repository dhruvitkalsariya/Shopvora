# Home Page Components

This directory contains the components for the home page that match the Figma design with a hero banner featuring Adidas sneakers and product cards.

## Components

### HeroBanner (`hero-banner.tsx`)
A responsive hero banner component featuring:
- Adidas sneakers background image
- Purple text styling matching the Figma design
- "Top Selling" badge
- Product name and description
- Pricing with strikethrough original price
- "Shop now" call-to-action button
- Smooth animations using Framer Motion

### ProductCard (`product-card.tsx`)
A responsive product card component featuring:
- Product image with hover effects
- Rating badge overlay
- Category label
- Product name
- Description with text truncation
- Pricing with original and current prices
- Hover animations and transitions

### ProductGrid (`product-grid.tsx`)
A responsive grid layout component that:
- Displays multiple product cards
- Supports customizable titles
- Optional "See All" button
- Responsive grid layout (1-5 columns based on screen size)

### HomePage (`home-page.tsx`)
A complete home page component that combines:
- Hero banner section
- Featured products section
- Explore new collection section
- Proper spacing and layout

## Sample Data

### Sample Products (`sample-products.ts`)
Contains sample product data matching the Figma design:
- Laptops and PCs
- Smartphones
- Footwear
- Audio equipment
- Beauty products

## Demo Pages

### `/hero-demo`
Complete home page demo with all components

### `/hero-banner-demo`
Standalone hero banner demo

### `/product-grid-demo`
Standalone product grid demo

## Features

- **Responsive Design**: Works perfectly on all screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Hover Effects**: Interactive hover states on cards and buttons
- **Text Truncation**: Proper text overflow handling
- **Accessibility**: Proper alt texts and semantic HTML
- **Performance**: Optimized images and efficient rendering

## Usage

```tsx
import HomePage from "@modules/home/components/home-page"

export default function MyPage() {
  return <HomePage />
}
```

## Styling

The components use Tailwind CSS with:
- Purple color scheme matching the Figma design
- Responsive breakpoints
- Custom animations
- Shadow effects
- Gradient overlays

## Responsive Breakpoints

- Mobile: 1 column
- Small: 2 columns  
- Large: 3 columns
- XL: 4 columns
- 2XL: 5 columns 