# Shopvora - Modern E-commerce Frontend

A fully responsive and animated e-commerce frontend built with Next.js 15, Medusa, and Framer Motion.

## 🚀 Features

### ✨ UI/UX Features
- **Fully Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI Components** - Clean, professional design
- **Interactive Elements** - Hover effects, transitions, and micro-interactions
- **Text Animations** - Animated hero text and promotional content
- **Dynamic Navigation** - Multi-level category dropdowns

### 🛍️ E-commerce Features
- **Product Catalog** - Dynamic product fetching from Medusa backend
- **Category Management** - Hierarchical category structure
- **Search Functionality** - Product search with suggestions
- **Shopping Cart** - Real-time cart updates
- **Wishlist** - Save favorite products
- **User Authentication** - Login/Register functionality
- **Responsive Product Grid** - Optimized for all screen sizes

### 🎨 Design System
- **Purple Theme** - Consistent brand colors
- **Typography** - Modern font hierarchy
- **Icons** - Lucide React icons
- **Animations** - Smooth transitions and effects
- **Glass Morphism** - Modern visual effects

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Medusa (Headless Commerce)
- **Database**: PostgreSQL
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js 18+ 
- Yarn or npm
- Medusa backend running on `localhost:9000`
- PostgreSQL database

## 🚀 Quick Start

### 1. Clone and Install

```bash
cd shopvora-storefront
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Medusa Backend Configuration
MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_test_01HXYZ123456789

# Frontend Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:8000
NEXT_PUBLIC_STORE_CORS=http://localhost:8000,http://localhost:3000
```

### 3. Database Configuration

Ensure your Medusa backend is configured with these credentials:
- **Username**: dhruvit
- **Password**: 1112
- **Database**: shopvora
- **Host**: localhost
- **Port**: 5432

### 4. Start Development Server

```bash
yarn dev
```

The application will be available at `http://localhost:8000`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [countryCode]/     # Dynamic country routing
│   └── api/               # API routes
├── modules/               # Feature modules
│   ├── home/             # Homepage components
│   ├── layout/           # Layout components
│   ├── products/         # Product components
│   └── common/           # Shared components
├── lib/                  # Utilities and config
│   ├── data/            # Data fetching functions
│   └── util/            # Utility functions
└── styles/              # Global styles
```

## 🎯 Key Components

### Navigation (`src/modules/layout/templates/nav/`)
- Responsive header with search
- Multi-level category dropdowns
- User account menu
- Shopping cart integration

### Hero Section (`src/modules/home/components/hero/`)
- Animated promotional banners
- Auto-sliding carousel
- Interactive navigation arrows
- Floating decorative elements

### Explore Categories (`src/modules/home/components/explore-categories/`)
- Grid layout with hover effects
- Category cards with gradients
- Smooth animations on scroll

### Popular Products (`src/modules/home/components/popular-products/`)
- Dynamic product fetching
- Wishlist functionality
- Price formatting
- Rating display

### Footer (`src/modules/layout/templates/footer/`)
- Company information
- Newsletter signup
- Social media links
- Legal pages

## 🎨 Customization

### Colors
The theme uses a purple color scheme. To customize:

1. Update Tailwind config (`tailwind.config.js`)
2. Modify CSS variables in `src/styles/globals.css`
3. Update component color classes

### Animations
Custom animations are defined in `src/styles/globals.css`:
- `.animate-float` - Floating animation
- `.animate-pulse-slow` - Slow pulse
- `.text-gradient` - Gradient text effects

### Logo
Replace the logo component in `src/modules/common/components/logo/` with your own logo image.

## 🔧 API Integration

### Product Fetching
Products are fetched from the Medusa backend via:
- `GET /api/products` - Product listing
- Dynamic filtering and sorting
- Pagination support

### Categories
Categories are managed through:
- Static category structure in navigation
- Dynamic category fetching from backend
- Hierarchical category display

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Other Platforms
1. Build the application: `yarn build`
2. Start production server: `yarn start`
3. Configure your hosting platform

## 🔍 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load on demand
- **Caching**: API responses cached appropriately

## 🐛 Troubleshooting

### Common Issues

1. **Backend Connection Error**
   - Ensure Medusa backend is running on port 9000
   - Check environment variables
   - Verify database connection

2. **Build Errors**
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `yarn install`
   - Check TypeScript errors

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for CSS conflicts
   - Verify responsive breakpoints

## 📞 Support

For support and questions:
- Check the [Medusa documentation](https://docs.medusajs.com/)
- Review Next.js documentation
- Open an issue in the repository

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Next.js, Medusa, and Framer Motion** 