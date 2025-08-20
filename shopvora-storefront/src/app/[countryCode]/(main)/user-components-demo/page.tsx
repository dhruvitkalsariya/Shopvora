"use client"

import React, { useState } from "react"
import { 
  UserAvatar, 
  UserBadge, 
  UserCard, 
  UserMenu, 
  UserProfileForm, 
  UserStats 
} from "@modules/common/components/user-components"

const UserComponentsDemo = () => {
  const [showProfileForm, setShowProfileForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Mock user data
  const mockUser = {
    id: "usr_123456",
    email: "john.doe@example.com",
    first_name: "John",
    last_name: "Doe",
    phone: "+1 (555) 123-4567",
    billing_address: {
      address_1: "123 Main Street",
      city: "New York",
      country_code: "US",
      postal_code: "10001"
    },
    avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }

  const mockStats = {
    totalOrders: 15,
    totalSpent: 1250.75,
    wishlistItems: 8,
    reviews: 12,
    loyaltyPoints: 2500,
    memberSince: "2023-01-15"
  }

  const handleProfileSubmit = async (data: any) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log("Profile data submitted:", data)
    setIsLoading(false)
    setShowProfileForm(false)
  }

  const handleLogout = () => {
    console.log("User logged out")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            User Components Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of reusable user interface components for your Next.js application.
            These components are designed to be modular, accessible, and easy to customize.
          </p>
        </div>

        {/* User Avatar Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">User Avatar</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <UserAvatar size="sm" name="John Doe" />
                <p className="text-sm text-gray-600 mt-2">Small</p>
              </div>
              <div className="text-center">
                <UserAvatar size="md" name="John Doe" />
                <p className="text-sm text-gray-600 mt-2">Medium</p>
              </div>
              <div className="text-center">
                <UserAvatar size="lg" name="John Doe" />
                <p className="text-sm text-gray-600 mt-2">Large</p>
              </div>
              <div className="text-center">
                <UserAvatar size="xl" name="John Doe" />
                <p className="text-sm text-gray-600 mt-2">Extra Large</p>
              </div>
              <div className="text-center">
                <UserAvatar 
                  size="lg" 
                  src={mockUser.avatar_url} 
                  name="John Doe" 
                />
                <p className="text-sm text-gray-600 mt-2">With Image</p>
              </div>
            </div>
          </div>
        </section>

        {/* User Badge Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">User Badges</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <UserBadge type="verified" />
              <UserBadge type="pending" />
              <UserBadge type="premium" />
              <UserBadge type="vip" />
              <UserBadge type="new" />
              <UserBadge type="inactive" />
              <UserBadge type="verified" size="sm" />
              <UserBadge type="premium" size="lg" />
            </div>
          </div>
        </section>

        {/* User Card Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">User Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UserCard 
              user={mockUser}
              onEdit={() => setShowProfileForm(true)}
            />
            <UserCard 
              user={mockUser}
              showActions={false}
            />
          </div>
        </section>

        {/* User Menu Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">User Menu</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-center">
              <UserMenu
                user={mockUser}
                isLoggedIn={true}
                onLogout={handleLogout}
              />
            </div>
          </div>
        </section>

        {/* User Stats Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">User Statistics</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Grid Layout</h3>
              <UserStats stats={mockStats} layout="grid" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">List Layout</h3>
              <UserStats stats={mockStats} layout="list" />
            </div>
          </div>
        </section>

        {/* User Profile Form Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">User Profile Form</h2>
          <div className="flex justify-center">
            <button
              onClick={() => setShowProfileForm(true)}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Open Profile Form
            </button>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Usage Examples</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Import</h3>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { UserAvatar, UserCard, UserMenu } from "@modules/common/components/user-components"`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Component Usage</h3>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// User Avatar
<UserAvatar 
  src={user.avatar_url} 
  name={user.name} 
  size="lg" 
/>

// User Card
<UserCard 
  user={userData}
  showActions={true}
  onEdit={handleEdit}
/>

// User Menu
<UserMenu
  user={userData}
  isLoggedIn={true}
  onLogout={handleLogout}
/>`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Profile Form Modal */}
      {showProfileForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <UserProfileForm
              user={mockUser}
              onSubmit={handleProfileSubmit}
              onCancel={() => setShowProfileForm(false)}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserComponentsDemo 