# Enhanced Carousel Buttons

This directory contains enhanced carousel button components with beautiful animations, modern design, and smooth interactions.

## Components

### 1. EnhancedPlayPauseButton
A beautiful play/pause button with smooth icon transitions and animated background rings.

**Props:**
- `isPlaying: boolean` - Current play state
- `onClick: () => void` - Click handler
- `size?: "sm" | "md" | "lg"` - Button size (default: "md")
- `className?: string` - Additional CSS classes

**Features:**
- Smooth icon transitions between play/pause
- Animated background rings
- Hover glow effects
- Scale animations on hover/tap
- Glass morphism design

### 2. EnhancedNavigationButton
Navigation arrows with direction-based animations and modern styling.

**Props:**
- `direction: "prev" | "next"` - Arrow direction
- `onClick: () => void` - Click handler
- `size?: "sm" | "md" | "lg"` - Button size (default: "md")
- `className?: string` - Additional CSS classes

**Features:**
- Direction-based hover animations
- Floating animation effect
- Glass morphism background
- Scale and shadow effects

### 3. EnhancedShopButton
Attractive shop/CTA button with gradient backgrounds and shimmer effects.

**Props:**
- `text: string` - Button text
- `onClick: () => void` - Click handler
- `size?: "sm" | "md" | "lg"` - Button size (default: "md")
- `variant?: "primary" | "secondary" | "outline"` - Button style (default: "primary")
- `className?: string` - Additional CSS classes

**Features:**
- Gradient backgrounds with shimmer animation
- Multiple style variants
- Icon animations on hover
- Lift effect on hover
- Smooth transitions

### 4. EnhancedSlideIndicator
Modern slide indicators with active state animations.

**Props:**
- `isActive: boolean` - Whether this indicator is active
- `onClick: () => void` - Click handler
- `index: number` - Indicator index for staggered animations
- `className?: string` - Additional CSS classes

**Features:**
- Gradient backgrounds for active state
- Glow animation for active indicators
- Staggered entrance animations
- Scale effects on hover

### 5. CarouselControlsContainer
Container component for organizing carousel controls with entrance animations.

**Props:**
- `children: React.ReactNode` - Child components
- `className?: string` - Additional CSS classes

## Usage Examples

### Basic Implementation
```tsx
import {
  EnhancedPlayPauseButton,
  EnhancedNavigationButton,
  EnhancedShopButton,
  EnhancedSlideIndicator,
  CarouselControlsContainer
} from "./enhanced-carousel-buttons"

// In your carousel component
<div className="relative">
  {/* Play/Pause Button */}
  <EnhancedPlayPauseButton
    isPlaying={isAutoPlaying}
    onClick={toggleAutoPlay}
    size="md"
  />
  
  {/* Navigation Buttons */}
  <EnhancedNavigationButton
    direction="prev"
    onClick={prevSlide}
    size="md"
  />
  <EnhancedNavigationButton
    direction="next"
    onClick={nextSlide}
    size="md"
  />
  
  {/* Shop Button */}
  <EnhancedShopButton
    text="SHOP NOW"
    onClick={handleShopClick}
    size="md"
    variant="primary"
  />
  
  {/* Slide Indicators */}
  <CarouselControlsContainer>
    {slides.map((_, index) => (
      <EnhancedSlideIndicator
        key={index}
        isActive={index === currentSlide}
        onClick={() => goToSlide(index)}
        index={index}
      />
    ))}
  </CarouselControlsContainer>
</div>
```

### Advanced Styling
```tsx
// Custom positioning and styling
<div className="absolute top-4 right-4 z-20">
  <EnhancedPlayPauseButton
    isPlaying={isAutoPlaying}
    onClick={toggleAutoPlay}
    size="lg"
    className="shadow-2xl"
  />
</div>

<div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
  <EnhancedNavigationButton
    direction="prev"
    onClick={prevSlide}
    size="md"
  />
</div>
```

## Design Features

### Color Scheme
- **Primary**: Purple gradient (#8B5CF6 to #6366F1)
- **Secondary**: White/light gray with glass effect
- **Accent**: Purple glow effects and shadows

### Animations
- **Entrance**: Fade-in with scale and slide effects
- **Hover**: Scale, lift, and glow effects
- **Active**: Pulsing glow for active states
- **Transitions**: Smooth 300ms transitions with cubic-bezier easing

### Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Focus states with visible rings
- Reduced motion support
- High contrast mode support

### Responsive Design
- Multiple size variants (sm, md, lg)
- Mobile-friendly touch targets
- Adaptive spacing and positioning
- Glass morphism effects

## Customization

### CSS Variables
You can customize the appearance by overriding CSS variables:

```css
:root {
  --carousel-primary: #8B5CF6;
  --carousel-secondary: #6366F1;
  --carousel-glow: rgba(147, 51, 234, 0.3);
  --carousel-shadow: rgba(0, 0, 0, 0.15);
}
```

### Animation Timing
Adjust animation durations in the CSS file:

```css
.enhanced-play-pause {
  animation: bounce-in 0.6s ease-out; /* Customize duration */
}
```

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Backdrop-filter support for glass morphism effects
- Framer Motion for advanced animations
- Graceful degradation for older browsers

## Performance
- Optimized animations using transform and opacity
- Hardware acceleration for smooth performance
- Reduced motion support for accessibility
- Efficient re-renders with React.memo optimization 