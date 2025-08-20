import React from "react"
import { Mail, Phone, MapPin, Edit } from "lucide-react"
import UserAvatar from "@modules/common/components/user-avatar"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface UserCardProps {
  user: {
    id: string
    email: string
    first_name?: string
    last_name?: string
    phone?: string
    billing_address?: {
      address_1?: string
      city?: string
      country_code?: string
    }
    avatar_url?: string
  }
  showActions?: boolean
  className?: string
  onEdit?: () => void
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  showActions = true,
  className = "",
  onEdit
}) => {
  const fullName = `${user.first_name || ""} ${user.last_name || ""}`.trim() || "User"
  const location = user.billing_address ? 
    `${user.billing_address.city || ""}, ${user.billing_address.country_code || ""}`.trim() : 
    "Location not set"

  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 ${className}`}>
      <div className="p-6">
        {/* Header with Avatar and Name */}
        <div className="flex items-center space-x-4 mb-4">
          <UserAvatar
            src={user.avatar_url}
            name={fullName}
            size="lg"
            className="flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {fullName}
            </h3>
            <p className="text-sm text-gray-500">ID: {user.id}</p>
          </div>
          {showActions && (
            <button
              onClick={onEdit}
              className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200"
              title="Edit profile"
            >
              <Edit className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm">
            <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="text-gray-700 truncate">{user.email}</span>
          </div>
          
          {user.phone && (
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-700">{user.phone}</span>
            </div>
          )}
          
          <div className="flex items-center space-x-3 text-sm">
            <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="text-gray-700">{location}</span>
          </div>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex space-x-3">
              <LocalizedClientLink
                href="/account"
                className="flex-1 px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 text-center"
              >
                View Profile
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/account/orders"
                className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-center"
              >
                My Orders
              </LocalizedClientLink>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserCard 