"use client"

import { useState, useRef, useEffect } from "react"
import { User, LogOut, User as UserIcon, Package, Heart, X } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signout } from "@lib/data/customer"
import { useParams } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

interface UserDropdownProps {
  customer: HttpTypes.StoreCustomer | null
}

export default function UserDropdown({ customer }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { countryCode } = useParams() as { countryCode: string }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowLogoutModal(false)
      }
    }

    if (showLogoutModal) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [showLogoutModal])

  // Get customer display name
  const getCustomerName = () => {
    if (!customer) return "User"
    if (customer.first_name && customer.last_name) {
      return `${customer.first_name} ${customer.last_name}`
    }
    if (customer.first_name) {
      return customer.first_name
    }
    if (customer.email) {
      return customer.email.split('@')[0]
    }
    return "User"
  }

  const handleLogout = async () => {
    try {
      await signout(countryCode)
      setIsOpen(false)
      setShowLogoutModal(false)
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLogoutClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowLogoutModal(true)
    setIsOpen(false)
  }

  const closeLogoutModal = () => {
    setShowLogoutModal(false)
  }

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        {/* User Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-purple-600 rounded-lg transition-all duration-200"
        >
          <User className="h-5 w-5" />
        </button>

        {/* Dropdown Menu - Only show when clicked */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
            {/* User Info */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <UserIcon className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{getCustomerName()}</p>
                  <p className="text-xs text-gray-500">{customer?.email}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-1">
              <LocalizedClientLink
                href="/account"
                className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                <UserIcon className="h-4 w-4" />
                <span>My Profile</span>
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/account/orders"
                className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                <Package className="h-4 w-4" />
                <span>Orders</span>
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/wishlist"
                className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                <Heart className="h-4 w-4" />
                <span>Wishlist</span>
              </LocalizedClientLink>
            </div>

            {/* Logout Section */}
            <div className="border-t border-gray-100 pt-1">
              <button
                onClick={handleLogoutClick}
                className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-150"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ margin: 0, background: "rgba(0,0,0,0.4)" }}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 animate-in slide-in-from-top-2 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                  <LogOut className="h-4 w-4 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Confirm Logout</h3>
              </div>
              <button
                onClick={closeLogoutModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Are you sure you want to logout from your account?
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={closeLogoutModal}
                className="px-4 py-2 text-sm font-medium text-purple-600 bg-white border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-150"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-150"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 