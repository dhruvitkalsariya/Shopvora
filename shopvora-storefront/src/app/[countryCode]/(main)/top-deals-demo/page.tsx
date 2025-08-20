"use client"

import TopDeals from "@modules/home/components/top-deals"

export default function TopDealsDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Top Deals Component Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a demonstration of the Top Deals component based on the Figma design. 
            The component features attractive animations, hover effects, and responsive design.
          </p>
        </div>
      </div>
      
      <TopDeals />
      
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Component Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Smooth Animations</h3>
              <p className="text-purple-700 text-sm">
                Framer Motion animations with staggered children and hover effects
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Responsive Design</h3>
              <p className="text-blue-700 text-sm">
                Fully responsive grid layout that adapts to different screen sizes
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Interactive Elements</h3>
              <p className="text-green-700 text-sm">
                Hover effects, scale animations, and smooth transitions
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Discount Badges</h3>
              <p className="text-orange-700 text-sm">
                Eye-catching discount badges with rotation and glow effects
              </p>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg">
              <h3 className="font-semibold text-pink-900 mb-2">Image Optimization</h3>
              <p className="text-pink-700 text-sm">
                Next.js Image component with fallback images and lazy loading
              </p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-900 mb-2">Accessibility</h3>
              <p className="text-indigo-700 text-sm">
                Proper alt texts, semantic HTML, and keyboard navigation support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 