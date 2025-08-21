# 🔄 Migration Guide: Reusable UI Components

This guide will help you migrate from existing components to the new reusable UI components library.

## 📋 Overview

The new UI components library provides:
- **Consistent Design**: All components follow the same design system
- **Better Performance**: Optimized animations and re-renders
- **Accessibility**: Built-in ARIA labels and keyboard navigation
- **TypeScript Support**: Full type safety with comprehensive interfaces
- **Flexibility**: Multiple variants and customization options

## 🎯 Components to Migrate

### 1. Button Components

#### Before (Old Custom Buttons)
```tsx
// Old custom button
<button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
  Click Me
</button>

// Old custom button with icon
<button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded">
  <ShoppingCart className="h-4 w-4" />
  Add to Cart
</button>

// Old loading button
<button 
  className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
  disabled={isLoading}
>
  {isLoading ? "Loading..." : "Submit"}
</button>
```

#### After (New Button Component)
```tsx
import { Button } from "@modules/common/components/ui"

// New button
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

// New button with icon
<Button 
  variant="primary" 
  icon={<ShoppingCart className="h-4 w-4" />}
  iconPosition="left"
>
  Add to Cart
</Button>

// New loading button
<Button variant="primary" isLoading={isLoading}>
  Submit
</Button>
```

#### Migration Steps:
1. Replace `<button>` elements with `<Button>` component
2. Convert className styles to variant props
3. Use `icon` and `iconPosition` props for icons
4. Replace loading states with `isLoading` prop

### 2. Product Cards

#### Before (Old Product Cards)
```tsx
// Old product card
<div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
  <div className="relative h-48 overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
    />
    {product.discount && (
      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
        {product.discount}% OFF
      </div>
    )}
  </div>
  <div className="p-4">
    <div className="text-xs font-medium text-purple-600 uppercase tracking-wider mb-2">
      {product.category}
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
    <div className="flex items-center gap-2 mb-4">
      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
      <span className="text-xl font-bold text-purple-600">${product.price}</span>
    </div>
    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
      Add to Cart
    </button>
  </div>
</div>
```

#### After (New ProductCard Component)
```tsx
import { ProductCard } from "@modules/common/components/ui"

// New product card
<ProductCard product={product} />
```

#### Migration Steps:
1. Replace entire product card JSX with `<ProductCard>` component
2. Pass product data as a single `product` prop
3. Remove manual styling and layout code

### 3. Header/Navigation

#### Before (Old Navigation)
```tsx
// Old navigation structure
<div className="sticky top-0 inset-x-0 z-50">
  <header className="relative bg-white border-b border-gray-200 shadow-sm w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center min-w-[160px] cursor-pointer">
          <Logo size="lg" className="h-10" />
        </div>
        
        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-6">
          <SearchComponent />
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-2">
          <CartButton />
          <UserDropdown />
        </div>
      </div>
    </div>
  </header>
</div>
```

#### After (New Header Component)
```tsx
import { Header } from "@modules/common/components/ui"

// New header
<Header
  categories={categories}
  onSearch={handleSearch}
  onCartClick={handleCartClick}
  onUserMenuClick={handleUserMenuClick}
  onNotificationClick={handleNotificationClick}
/>
```

#### Migration Steps:
1. Replace entire navigation JSX with `<Header>` component
2. Pass categories data as prop
3. Provide callback functions for interactions
4. Remove manual responsive logic

### 4. Footer

#### Before (Old Footer)
```tsx
// Old footer structure
<footer className="bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Customer Service */}
      <div className="group">
        <h4 className="text-lg font-bold text-purple-600 mb-6">Customer Service</h4>
        <ul className="space-y-3">
          {footerLinks.customerService.map((link) => (
            <li key={link.name}>
              <LocalizedClientLink href={link.href} className="text-gray-700 hover:text-purple-600">
                {link.name}
              </LocalizedClientLink>
            </li>
          ))}
        </ul>
      </div>
      {/* ... more sections */}
    </div>
  </div>
</footer>
```

#### After (New Footer Component)
```tsx
import { Footer } from "@modules/common/components/ui"

// New footer
<Footer
  links={footerLinks}
  showLogo={true}
  showSocial={true}
  showPayment={true}
  showLanguage={true}
/>
```

#### Migration Steps:
1. Replace entire footer JSX with `<Footer>` component
2. Pass links data as prop
3. Configure visibility options
4. Remove manual layout and styling

## 🔧 Step-by-Step Migration Process

### Step 1: Install and Import
```tsx
// Add import to your component files
import { Button, Card, ProductCard, Header, Footer } from "@modules/common/components/ui"
```

### Step 2: Replace Components One by One
Start with the most commonly used components:

1. **Buttons** - Replace all custom buttons
2. **Product Cards** - Update product listings
3. **Header** - Update navigation
4. **Footer** - Update footer sections

### Step 3: Update Props and Handlers
```tsx
// Before
<button onClick={handleClick} className="custom-button-class">
  Click Me
</button>

// After
<Button 
  variant="primary" 
  onClick={handleClick}
  className="custom-button-class"
>
  Click Me
</Button>
```

### Step 4: Test and Refine
- Test all interactions
- Verify responsive behavior
- Check accessibility features
- Ensure consistent styling

## 📝 Common Migration Patterns

### Pattern 1: Button Variants
```tsx
// Map old classes to new variants
const variantMap = {
  'bg-purple-600 text-white': 'primary',
  'bg-white text-purple-600 border border-purple-600': 'secondary',
  'bg-transparent text-purple-600 border border-purple-600': 'outline',
  'bg-red-600 text-white': 'danger'
}
```

### Pattern 2: Size Mapping
```tsx
// Map old sizes to new sizes
const sizeMap = {
  'px-2 py-1 text-sm': 'sm',
  'px-4 py-2 text-base': 'md',
  'px-6 py-3 text-lg': 'lg',
  'px-8 py-4 text-xl': 'xl'
}
```

### Pattern 3: Icon Integration
```tsx
// Before: Manual icon placement
<div className="flex items-center gap-2">
  <Icon className="h-4 w-4" />
  <span>Button Text</span>
</div>

// After: Use icon props
<Button 
  icon={<Icon className="h-4 w-4" />}
  iconPosition="left"
>
  Button Text
</Button>
```

## 🚨 Breaking Changes

### 1. Prop Changes
- `className` still works but may not be needed
- New required props for some components
- Different prop names for similar functionality

### 2. Styling Changes
- Some custom CSS may conflict with component styles
- Remove redundant styling classes
- Use component variants instead of custom classes

### 3. Event Handler Changes
- Some event handlers may have different signatures
- New callback props for component interactions

## ✅ Migration Checklist

- [ ] Import new UI components
- [ ] Replace all custom buttons with Button component
- [ ] Update product cards to use ProductCard component
- [ ] Replace navigation with Header component
- [ ] Update footer with Footer component
- [ ] Test all interactions and animations
- [ ] Verify responsive behavior
- [ ] Check accessibility features
- [ ] Remove unused custom CSS
- [ ] Update component documentation

## 🆘 Troubleshooting

### Common Issues:

1. **Styling Conflicts**
   ```tsx
   // Solution: Remove conflicting classes
   <Button variant="primary" className="custom-class">
     // Only add classes that don't conflict with component styles
   </Button>
   ```

2. **Missing Props**
   ```tsx
   // Check component documentation for required props
   <ProductCard product={product} /> // product prop is required
   ```

3. **Event Handler Issues**
   ```tsx
   // Use the correct event handler signature
   <Button onClick={() => handleClick()} /> // Not onClick={handleClick}
   ```

### Getting Help:
- Check the component documentation in `src/modules/common/components/ui/README.md`
- View the demo page at `/ui-components-demo`
- Review the component source code for prop definitions

## 🎉 Benefits After Migration

1. **Consistency**: All components follow the same design system
2. **Maintainability**: Centralized component logic
3. **Performance**: Optimized animations and re-renders
4. **Accessibility**: Built-in accessibility features
5. **Type Safety**: Full TypeScript support
6. **Reusability**: Easy to use across the application

## 📚 Additional Resources

- [UI Components Documentation](./src/modules/common/components/ui/README.md)
- [Demo Page](./src/app/[countryCode]/(main)/ui-components-demo/page.tsx)
- [Component Source Code](./src/modules/common/components/ui/) 