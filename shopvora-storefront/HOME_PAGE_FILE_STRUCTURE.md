# 🏠 Home Page File Structure - Shopvora

This document shows all the files that make up your home page layout, including header, carousels, and other sections.

## 📁 Main Home Page File

**📍 Primary File:**
```
src/app/[countryCode]/(main)/page.tsx
```
- **Purpose**: Main home page component that imports and arranges all sections
- **Contains**: All 3 carousels + Explore Categories section

## 🎯 Layout Structure

**📍 Layout File:**
```
src/app/[countryCode]/(main)/layout.tsx
```
- **Purpose**: Wraps the home page with header, footer, and global components
- **Contains**: Nav, CartMismatchBanner, FreeShippingPriceNudge, Footer

## 🚀 Header & Navigation Files

### Main Navigation
```
src/modules/layout/templates/nav/index.tsx
src/modules/layout/templates/nav/nav.tsx
```

### Header Components
```
src/modules/layout/components/cart-button/index.tsx
src/modules/layout/components/cart-dropdown/index.tsx
src/modules/layout/components/cart-mismatch-banner/index.tsx
src/modules/layout/components/country-select/index.tsx
src/modules/layout/components/medusa-cta/index.tsx
src/modules/layout/components/notifications/index.tsx
src/modules/layout/components/search/index.tsx
src/modules/layout/components/side-menu/index.tsx
src/modules/layout/components/user-dropdown/index.tsx
```

### Footer
```
src/modules/layout/templates/footer/index.tsx
```

## 🎠 Carousel Components (3 Types)

### 1. Hero Carousel (New - Click to Navigate)
```
src/modules/home/components/hero/hero-carousel.tsx
src/modules/home/components/hero/hero-carousel-data.ts
src/modules/home/components/hero/index.tsx
```
- **Features**: Click images to navigate, high-quality images, category badges
- **Data**: 5 slides with navigation links to different collections

### 2. Enhanced Carousel (Current - Promotional)
```
src/modules/home/components/promotional-carousel/enhanced-carousel.tsx
src/modules/home/components/promotional-carousel/carousel-data.ts
src/modules/home/components/promotional-carousel/index.tsx
src/modules/home/components/promotional-carousel/page-wrapper.tsx
```
- **Features**: Animated backgrounds, confetti effects, promotional content
- **Data**: 5 promotional slides with seasonal themes

### 3. Product Carousel (Product Showcase)
```
src/modules/home/components/promotional-carousel/product-carousel.tsx
```
- **Features**: Product cards, ratings, prices, add to cart buttons
- **Data**: 8 sample products with detailed information

## 🎨 Other Home Page Sections

### Explore Categories Section
```
src/modules/home/components/explore-categories/index.tsx
```
- **Features**: 6 category cards with icons and hover effects
- **Categories**: Skincare, Electronics, Footwear, Laptop & PC, Smartphone, Fashion

### Featured Products (Available but not used)
```
src/modules/home/components/featured-products/index.tsx
src/modules/home/components/featured-products/product-rail/index.tsx
```

### Popular Products (Available but not used)
```
src/modules/home/components/popular-products/index.tsx
```

## 🎭 Demo Pages

### Carousel Comparison Demo
```
src/modules/home/components/carousel-demo.tsx
src/app/[countryCode]/(main)/carousel-demo/page.tsx
```

### All Carousels Demo
```
src/modules/home/components/all-carousels-demo.tsx
src/app/[countryCode]/(main)/all-carousels-demo/page.tsx
```

## 🔧 Supporting Files

### Carousel Hook
```
src/lib/hooks/use-carousel.ts
```

### Data Files
```
src/lib/data/regions.ts
src/lib/data/cart.ts
src/lib/data/customer.ts
```

### Utility Files
```
src/lib/util/env.ts
```

## 📋 Current Home Page Layout Order

1. **Header** (Nav + Cart components)
2. **Hero Carousel** (Blue header - Click to navigate)
3. **Enhanced Carousel** (Purple header - Promotional content)
4. **Product Carousel** (Green header - Product showcase)
5. **Explore Categories** (Category grid)
6. **Footer**

## 🎯 Key Features by Section

### Header Section
- ✅ Navigation menu
- ✅ Search functionality
- ✅ Cart dropdown
- ✅ User account dropdown
- ✅ Country selector
- ✅ Cart mismatch banner
- ✅ Free shipping nudge

### Carousel Sections
- ✅ **Hero**: Image click navigation, category badges
- ✅ **Enhanced**: Animated backgrounds, promotional content
- ✅ **Product**: Product cards, ratings, add to cart

### Categories Section
- ✅ 6 category cards with icons
- ✅ Hover animations
- ✅ Responsive grid layout
- ✅ Navigation to category pages

## 🚀 How to Modify

### To Change Carousel Order:
Edit `src/app/[countryCode]/(main)/page.tsx` and reorder the sections

### To Add New Sections:
1. Create component in `src/modules/home/components/`
2. Import and add to `page.tsx`

### To Modify Header:
Edit files in `src/modules/layout/templates/nav/` and `src/modules/layout/components/`

### To Change Carousel Data:
- Hero: Edit `src/modules/home/components/hero/hero-carousel-data.ts`
- Enhanced: Edit `src/modules/home/components/promotional-carousel/carousel-data.ts`
- Product: Edit the `sampleProducts` array in `page.tsx`

## 🌐 URLs to Visit

- **Home Page**: `/` (shows all sections)
- **Carousel Demo**: `/carousel-demo` (compare Hero vs Enhanced)
- **All Carousels Demo**: `/all-carousels-demo` (interactive comparison)

---

**Total Files**: ~25+ files make up your complete home page layout! 