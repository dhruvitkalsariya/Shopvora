# 🚀 Components Quick Reference

Quick reference guide for all reusable UI components in the Shopvora application.

## 📦 Available Components

### Import All Components
```tsx
import { 
  Button, 
  Card, 
  ProductCard, 
  Header, 
  Footer, 
  TopDealsCard, 
  TopDealsSection 
} from "@modules/common/components/ui"
```

## 🎯 Component Usage Examples

### 1. Button Component
```tsx
// Basic button
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

// Button with icon
<Button 
  variant="secondary" 
  icon={<ShoppingCart />}
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

**Variants:** `primary`, `secondary`, `outline`, `danger`, `transparent`, `ghost`
**Sizes:** `sm`, `md`, `lg`, `xl`

### 2. Card Component
```tsx
// Basic card
<Card variant="elevated" padding="lg">
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>

// Card with image and badge
<Card
  image={{ src: "/image.jpg", alt: "Description" }}
  badge={{ text: "NEW", variant: "success" }}
  hover={true}
  clickable={true}
>
  <h3>Product Name</h3>
  <p>Description...</p>
</Card>
```

**Variants:** `default`, `elevated`, `outlined`, `flat`
**Padding:** `none`, `sm`, `md`, `lg`

### 3. ProductCard Component
```tsx
const product = {
  id: "1",
  name: "iPhone 15 Pro",
  price: 999,
  originalPrice: 1199,
  image: "/iphone.jpg",
  rating: 4.8,
  reviewCount: 1247,
  category: "Electronics",
  discount: 17
}

<ProductCard product={product} />
```

### 4. TopDealsCard Component
```tsx
const deal = {
  id: 1,
  title: "iPhone 15 Pro Max",
  category: "Electronics",
  dealTag: "HOT DEAL",
  image: "/iphone.jpg",
  discountText: "Up To 40% OFF",
  href: "/category/electronics"
}

<TopDealsCard {...deal} index={0} />
```

**Deal Tags:** `HOT DEAL`, `BEST SELLER`, `FLASH SALE`, `TRENDING`, `LIMITED TIME`

### 5. TopDealsSection Component
```tsx
const deals = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    category: "Electronics",
    dealTag: "HOT DEAL",
    image: "/iphone.jpg",
    discountText: "Up To 40% OFF",
    href: "/category/electronics"
  }
  // ... more deals
]

<TopDealsSection
  title="Top Deals"
  seeAllUrl="/collections/top-deals"
  deals={deals}
/>
```

### 6. Header Component
```tsx
const categories = [
  {
    name: "Electronics",
    href: "/categories/electronics",
    subcategories: [
      { name: "Smartphones", href: "/smartphones" }
    ]
  }
]

<Header
  categories={categories}
  onSearch={handleSearch}
  onCartClick={handleCartClick}
  onUserMenuClick={handleUserMenuClick}
  onNotificationClick={handleNotificationClick}
/>
```

### 7. Footer Component
```tsx
const links = {
  customerService: [
    { name: "Help Center", href: "/help" }
  ],
  about: [
    { name: "About Us", href: "/about" }
  ]
}

<Footer
  links={links}
  showLogo={true}
  showSocial={true}
  showPayment={true}
  showLanguage={true}
/>
```

## 🎨 Common Patterns

### E-commerce Product Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
```

### Deal Cards Grid
```tsx
<TopDealsSection
  title="Featured Deals"
  seeAllUrl="/deals"
  deals={deals}
/>
```

### Interactive Card
```tsx
<Card
  variant="elevated"
  hover={true}
  clickable={true}
  onClick={handleClick}
  badge={{ text: "NEW", variant: "success" }}
>
  <h3>Interactive Card</h3>
  <p>Click me!</p>
</Card>
```

### Button Group
```tsx
<div className="flex gap-3">
  <Button variant="primary" icon={<ShoppingCart />}>
    Add to Cart
  </Button>
  <Button variant="outline" icon={<Heart />}>
    Wishlist
  </Button>
</div>
```

## 🔧 Common Props

### Button Props
- `variant`: Button style variant
- `size`: Button size
- `icon`: Icon component
- `iconPosition`: `left` or `right`
- `isLoading`: Show loading state
- `disabled`: Disable button
- `fullWidth`: Full width button
- `href`: Render as link

### Card Props
- `variant`: Card style variant
- `padding`: Content padding
- `hover`: Enable hover effects
- `clickable`: Make card clickable
- `onClick`: Click handler
- `image`: Image configuration
- `badge`: Badge configuration

### TopDealsCard Props
- `title`: Product title
- `category`: Product category
- `dealTag`: Deal type badge
- `image`: Product image URL
- `discountText`: Discount text
- `href`: Link URL
- `index`: Animation delay index

## 🎯 Demo Pages

- **Complete Showcase**: `/components-showcase`
- **Top Deals Demo**: `/top-deals-demo`
- **UI Components Demo**: `/ui-components-demo`

## 📚 Documentation

- **Full Documentation**: `src/modules/common/components/ui/README.md`
- **Migration Guide**: `MIGRATION_GUIDE.md`
- **Component Source**: `src/modules/common/components/ui/`

## 🚀 Quick Start

1. **Import components**:
   ```tsx
   import { Button, Card, Header, Footer } from "@modules/common/components/ui"
   ```

2. **Use in your component**:
   ```tsx
   export default function MyPage() {
     return (
       <div>
         <Header categories={categories} />
         <Button variant="primary">Click Me</Button>
         <Footer />
       </div>
     )
   }
   ```

3. **Customize as needed**:
   ```tsx
   <Button 
     variant="primary" 
     size="lg"
     className="custom-class"
     onClick={handleClick}
   >
     Custom Button
   </Button>
   ``` 