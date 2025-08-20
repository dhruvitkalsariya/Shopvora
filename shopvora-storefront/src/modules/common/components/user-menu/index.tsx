import React, { useState, useRef, useEffect } from "react"
import { ChevronDown, User, Settings, LogOut, Heart, Package, CreditCard } from "lucide-react"
import UserAvatar from "@modules/common/components/user-avatar"
import UserBadge from "@modules/common/components/user-badge"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface UserMenuProps {
  user: {
    id: string
    email: string
    first_name?: string
    last_name?: string
    avatar_url?: string
  }
  isLoggedIn: boolean
  onLogout?: () => void
  className?: string
}

const UserMenu: React.FC<UserMenuProps> = ({
  user,
  isLoggedIn,
  onLogout,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen])

  const fullName = `${user.first_name || ""} ${user.last_name || ""}`.trim() || "User"

  const menuItems = [
    {
      icon: User,
      label: "Profile",
      href: "/account",
      description: "View and edit your profile"
    },
    {
      icon: Package,
      label: "Orders",
      href: "/account/orders",
      description: "Track your orders"
    },
    {
      icon: Heart,
      label: "Wishlist",
      href: "/account/wishlist",
      description: "Your saved items"
    },
    {
      icon: CreditCard,
      label: "Payment Methods",
      href: "/account/payment-methods",
      description: "Manage payment options"
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/account/settings",
      description: "Account preferences"
    }
  ]

  if (!isLoggedIn) {
    return (
      <LocalizedClientLink
        href="/account"
        className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 ${className}`}
      >
        <User className="h-4 w-4" />
        <span>Login</span>
      </LocalizedClientLink>
    )
  }

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <UserAvatar
          src={user.avatar_url}
          name={fullName}
          size="sm"
        />
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-900 truncate max-w-[120px]">
            {fullName}
          </p>
          <p className="text-xs text-gray-500 truncate max-w-[120px]">
            {user.email}
          </p>
        </div>
        <ChevronDown 
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <UserAvatar
                src={user.avatar_url}
                name={fullName}
                size="md"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {fullName}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user.email}
                </p>
                <div className="mt-1">
                  <UserBadge type="verified" size="sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item) => (
              <LocalizedClientLink
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4 text-gray-400" />
                <div className="flex-1">
                  <p className="font-medium">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </LocalizedClientLink>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-2" />

          {/* Logout */}
          <button
            onClick={() => {
              if (onLogout) {
                onLogout()
              }
              setIsOpen(false)
            }}
            className="flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 w-full transition-colors duration-200"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign out</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default UserMenu 