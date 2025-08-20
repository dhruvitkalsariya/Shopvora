"use client"

import React from "react"
import { UserMenu, UserAvatar, UserBadge } from "@modules/common/components/user-components"
import { useCustomer } from "@lib/hooks/use-customer"

// Example of how to integrate user components into navigation
const UserNavExample = () => {
  const { customer, isLoggedIn, isLoading } = useCustomer()

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center space-x-3">
        <UserAvatar size="sm" name="Guest" />
        <div className="text-sm">
          <p className="text-gray-900 font-medium">Welcome Guest</p>
          <p className="text-gray-500">Please sign in</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-3">
      <UserMenu
        user={customer}
        isLoggedIn={isLoggedIn}
        onLogout={() => {
          // Handle logout logic
          console.log("User logged out")
        }}
      />
      
      {/* Alternative: Simple user display */}
      <div className="hidden md:flex items-center space-x-2">
        <UserAvatar
          src={customer?.avatar_url}
          name={`${customer?.first_name} ${customer?.last_name}`}
          size="sm"
        />
        <div className="text-sm">
          <p className="text-gray-900 font-medium">
            {customer?.first_name} {customer?.last_name}
          </p>
          <div className="flex items-center space-x-1">
            <UserBadge type="verified" size="sm" />
            <span className="text-gray-500 text-xs">Verified</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavExample 