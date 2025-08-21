# 🎨 Reusable UI Components

This directory contains a comprehensive collection of reusable UI components for the Shopvora application. These components are designed to be modular, accessible, and easy to customize.

## 📦 Components Overview

### 1. Button Component
A flexible button component with multiple variants, sizes, and states.

**Features:**
- Multiple variants (primary, secondary, outline, danger, transparent, ghost)
- Different sizes (sm, md, lg, xl)
- Loading states with spinner
- Icon support (left/right positioning)
- Link functionality
- Form submission support
- Smooth animations

**Usage:**
```tsx
import { Button } from "@modules/common/components/ui"

// Basic button
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

// Button with icon
<Button 
  variant="secondary" 
  icon={<ShoppingCart className="h-4 w-4" />}
  iconPosition="left"
>
  Add to Cart
</Button>

// Loading button
<Button variant="primary" isLoading={true}>
  Processing...
</Button>

// Link button
<Button href="/products" variant="outline">
  View Products
</Button>
```

### 2. Card Component
A versatile card component for displaying content with various layouts.

**Features:**
- Multiple variants (default, elevated, outlined, flat)
- Image support with hover effects
- Badge system
- Header and footer sections
- Hover animations
- Clickable functionality

**Usage:**
```tsx
import { Card } from "@modules/common/components/ui"

// Basic card
<Card variant="elevated" padding="lg">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>

// Card with image and badge
<Card
  image={{
    src: "/product-image.jpg",
    alt: "Product Name",
    className: "h-48"
  }}
  badge={{
    text: "NEW",
    variant: "success",
    position: "top-right"
  }}
  hover={true}
  clickable={true}
  onClick={handleCardClick}
>
  <h3>Product Name</h3>
  <p>Product description...</p>
</Card>
```

### 3. ProductCard Component
A specialized card component designed specifically for product displays.

**Features:**
- Product image with hover effects
- Rating display with stars
- Price comparison (original vs discounted)
- Category labels
- Add to cart and wishlist buttons
- Discount badges

**Usage:**
```tsx
import { ProductCard } from "@modules/common/components/ui"

const product = {
  id: "1",
  name: "iPhone 15 Pro",
  price: 999,
  originalPrice: 1199,
  image: "/iphone-15-pro.jpg",
  rating: 4.8,
  reviewCount: 1247,
  category: "Electronics",
  discount: 17
}

<ProductCard product={product} />
```

### 4. TopDealsCard Component
A specialized card component for promotional deals and offers.

**Features:**
- Category tags (top-left)
- Deal badges (top-right) with different colors
- Product images with hover effects
- Discount text display
- "Show Deals" call-to-action button
- Sparkle icon for "HOT DEAL" tags
- Smooth animations and transitions

**Usage:**
```tsx
import { TopDealsCard } from "@modules/common/components/ui"

const deal = {
  id: 1,
  title: "iPhone 15 Pro Max",
  category: "Electronics",
  dealTag: "HOT DEAL",
  image: "/iphone-15-pro-max.jpg",
  discountText: "Up To 40% OFF",
  href: "/category/electronics",
  bgColor: "bg-blue-50",
  borderColor: "border-blue-200"
}

<TopDealsCard {...deal} index={0} />
```

### 5. TopDealsSection Component
A complete section component for displaying multiple deal cards in a grid layout.

**Features:**
- Section header with title and "See All" link
- Responsive grid layout (2-5 columns)
- Staggered animations for cards
- Configurable title and see-all URL
- Automatic card spacing and alignment

**Usage:**
```tsx
import { TopDealsSection } from "@modules/common/components/ui"

const deals = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    category: "Electronics",
    dealTag: "HOT DEAL",
    image: "/iphone-15-pro-max.jpg",
    discountText: "Up To 40% OFF",
    href: "/category/electronics"
  },
  // ... more deals
]

<TopDealsSection
  title="Top Deals"
  seeAllUrl="/collections/top-deals"
  deals={deals}
/>
```

### 6. Header Component
A comprehensive header component with navigation, search, and user features.

**Features:**
- Responsive design
- Search functionality
- User authentication states
- Shopping cart integration
- Category navigation with dropdowns
- Mobile menu
- Notification system

**Usage:**
```tsx
import { Header } from "@modules/common/components/ui"

const categories = [
  {
    name: "Electronics",
    href: "/categories/electronics",
    subcategories: [
      { name: "Smartphones", href: "/categories/electronics/smartphones" },
      { name: "Laptops", href: "/categories/electronics/laptops" }
    ]
  }
]

<Header
  categories={categories}
  onSearch={(query) => console.log('Search:', query)}
  onCartClick={() => router.push('/cart')}
  onUserMenuClick={() => router.push('/account')}
  onNotificationClick={() => router.push('/notifications')}
/>
```

### 7. Footer Component
A flexible footer component with multiple sections and features.

**Features:**
- Customizable link sections
- Social media integration
- Payment method display
- Language selector
- Logo display
- Responsive layout

**Usage:**
```tsx
import { Footer } from "@modules/common/components/ui"

const customLinks = {
  customerService: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" }
  ],
  about: [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy" }
  ]
}

<Footer
  links={customLinks}
  showLogo={true}
  showSocial={true}
  showPayment={true}
  showLanguage={true}
  onLanguageChange={(lang) => console.log('Language changed:', lang)}
/>
```

## 🎯 Design System

### Color Palette
- **Primary**: Purple (#8C30F5, #7C2FD5)
- **Secondary**: Gray scale (#F3F4F6 to #1F2937)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Danger**: Red (#EF4444)

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Font weights 600-700
- **Body**: Font weight 400-500
- **Small text**: Font weight 400

### Spacing
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)

### Border Radius
- **sm**: 0.25rem (4px)
- **md**: 0.5rem (8px)
- **lg**: 0.75rem (12px)
- **xl**: 1rem (16px)
- **full**: 9999px

## 🔧 Customization

### Theme Customization
All components use CSS custom properties for easy theming:

```css
:root {
  --color-primary: #8C30F5;
  --color-primary-dark: #7C2FD5;
  --color-secondary: #6B7280;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;
}
```

### Component Props
Each component accepts a `className` prop for additional styling:

```tsx
<Button 
  variant="primary" 
  className="custom-button-class"
>
  Custom Button
</Button>
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

Components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## 🚀 Performance

- Lazy loading for images
- Optimized animations
- Minimal re-renders
- Tree-shaking support

## 📝 Best Practices

1. **Consistent Usage**: Use the same component variants throughout the app
2. **Props Validation**: Always provide required props
3. **Error Handling**: Handle loading and error states
4. **Testing**: Use data-testid attributes for testing
5. **Documentation**: Keep component documentation updated

## 🔄 Migration Guide

### From Old Components
If you're migrating from existing components:

1. **Replace custom buttons** with the new Button component
2. **Update product cards** to use ProductCard
3. **Migrate navigation** to use Header component
4. **Replace footer sections** with Footer component
5. **Update deal cards** to use TopDealsCard
6. **Replace deal sections** with TopDealsSection

### Example Migration
```tsx
// Old way
<button className="bg-purple-600 text-white px-4 py-2 rounded">
  Click Me
</button>

// New way
<Button variant="primary" size="md">
  Click Me
</Button>
```

## 🤝 Contributing

When adding new components:

1. Follow the existing component structure
2. Include TypeScript interfaces
3. Add comprehensive props
4. Include accessibility features
5. Write documentation
6. Add to the index.ts export

## 📚 Additional Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Accessibility Guide](https://reactjs.org/docs/accessibility.html)

## 🎯 Demo Pages

- **Complete Showcase**: `/components-showcase` - All components with examples
- **Top Deals Demo**: `/top-deals-demo` - TopDeals components in action
- **UI Components Demo**: `/ui-components-demo` - Basic UI components 