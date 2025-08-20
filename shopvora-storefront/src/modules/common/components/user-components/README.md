# User Components

A comprehensive collection of reusable user interface components for your Next.js e-commerce application. These components are designed to be modular, accessible, and easy to customize.

## Components Overview

### 1. UserAvatar
A flexible avatar component that displays user profile pictures or fallback initials.

**Features:**
- Multiple sizes (sm, md, lg, xl)
- Image fallback to initials
- Clickable with hover effects
- Error handling for broken images

**Usage:**
```tsx
import { UserAvatar } from "@modules/common/components/user-components"

<UserAvatar 
  src={user.avatar_url} 
  name="John Doe" 
  size="lg" 
  onClick={handleAvatarClick}
/>
```

### 2. UserBadge
Status badges for displaying user roles, verification status, and membership levels.

**Types:**
- `verified` - Green badge for verified users
- `pending` - Yellow badge for pending verification
- `premium` - Purple badge for premium members
- `vip` - Gradient badge for VIP members
- `new` - Blue badge for new users
- `inactive` - Gray badge for inactive users

**Usage:**
```tsx
import { UserBadge } from "@modules/common/components/user-components"

<UserBadge type="verified" size="md" showIcon={true} />
```

### 3. UserCard
A comprehensive card component for displaying user information.

**Features:**
- User avatar and basic info
- Contact information display
- Action buttons (View Profile, My Orders)
- Editable mode with edit button
- Responsive design

**Usage:**
```tsx
import { UserCard } from "@modules/common/components/user-components"

<UserCard 
  user={userData}
  showActions={true}
  onEdit={handleEdit}
  className="custom-class"
/>
```

### 4. UserMenu
A dropdown menu component for user navigation and actions.

**Features:**
- User avatar and info in header
- Navigation links (Profile, Orders, Wishlist, etc.)
- Logout functionality
- Responsive design
- Keyboard navigation support

**Usage:**
```tsx
import { UserMenu } from "@modules/common/components/user-components"

<UserMenu
  user={userData}
  isLoggedIn={true}
  onLogout={handleLogout}
  className="custom-class"
/>
```

### 5. UserProfileForm
A comprehensive form component for editing user profile information.

**Features:**
- Personal information fields
- Address information
- Form validation
- Loading states
- Error handling
- Responsive design

**Usage:**
```tsx
import { UserProfileForm } from "@modules/common/components/user-components"

<UserProfileForm
  user={userData}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
  isLoading={isLoading}
/>
```

### 6. UserStats
A component for displaying user statistics and metrics.

**Features:**
- Multiple layout options (grid, list)
- Various stat types (orders, spending, reviews, etc.)
- Icon support
- Responsive design

**Usage:**
```tsx
import { UserStats } from "@modules/common/components/user-components"

<UserStats 
  stats={userStats}
  layout="grid"
  showIcons={true}
/>
```

## Installation and Setup

### 1. Import Components
```tsx
// Import individual components
import { UserAvatar } from "@modules/common/components/user-avatar"
import { UserCard } from "@modules/common/components/user-card"

// Or import all components
import { 
  UserAvatar, 
  UserBadge, 
  UserCard, 
  UserMenu, 
  UserProfileForm, 
  UserStats 
} from "@modules/common/components/user-components"
```

### 2. Data Structure
Ensure your user data follows this structure:

```tsx
interface User {
  id: string
  email: string
  first_name?: string
  last_name?: string
  phone?: string
  avatar_url?: string
  billing_address?: {
    address_1?: string
    city?: string
    country_code?: string
    postal_code?: string
  }
}
```

### 3. Integration Examples

#### Navigation Integration
```tsx
// In your navigation component
import { UserMenu } from "@modules/common/components/user-components"

const Navigation = () => {
  const { customer, isLoggedIn } = useCustomer()

  return (
    <nav>
      {/* Other nav items */}
      <UserMenu
        user={customer}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
    </nav>
  )
}
```

#### Profile Page Integration
```tsx
// In your profile page
import { UserCard, UserStats, UserProfileForm } from "@modules/common/components/user-components"

const ProfilePage = () => {
  const [showEditForm, setShowEditForm] = useState(false)
  const { customer } = useCustomer()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <UserCard 
          user={customer}
          onEdit={() => setShowEditForm(true)}
        />
      </div>
      <div className="lg:col-span-2">
        <UserStats stats={userStats} />
      </div>
      
      {showEditForm && (
        <UserProfileForm
          user={customer}
          onSubmit={handleProfileUpdate}
          onCancel={() => setShowEditForm(false)}
        />
      )}
    </div>
  )
}
```

## Customization

### Styling
All components use Tailwind CSS classes and can be customized using the `className` prop:

```tsx
<UserAvatar 
  className="border-2 border-purple-500 shadow-lg" 
  size="lg" 
  name="John Doe" 
/>
```

### Theming
Components follow your application's color scheme. The primary color is purple (`purple-600`) but can be easily changed by modifying the component files.

### Responsive Design
All components are responsive and work well on mobile, tablet, and desktop devices.

## Accessibility

Components include:
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Demo

Visit `/user-components-demo` to see all components in action with examples and usage patterns.

## Contributing

When adding new user components:

1. Create the component in the appropriate directory
2. Add TypeScript interfaces for props
3. Include proper accessibility attributes
4. Add the component to the index file
5. Update this README with documentation
6. Add examples to the demo page

## License

This component library is part of the Shopvora e-commerce platform. 