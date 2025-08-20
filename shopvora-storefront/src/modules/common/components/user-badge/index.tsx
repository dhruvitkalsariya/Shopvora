import React from "react"
import { CheckCircle, Clock, XCircle, Star } from "lucide-react"

interface UserBadgeProps {
  type: "verified" | "pending" | "premium" | "vip" | "new" | "inactive"
  size?: "sm" | "md" | "lg"
  className?: string
  showIcon?: boolean
  children?: React.ReactNode
}

const UserBadge: React.FC<UserBadgeProps> = ({
  type,
  size = "md",
  className = "",
  showIcon = true,
  children
}) => {
  const badgeConfig = {
    verified: {
      icon: CheckCircle,
      colors: "bg-green-100 text-green-800 border-green-200",
      text: "Verified"
    },
    pending: {
      icon: Clock,
      colors: "bg-yellow-100 text-yellow-800 border-yellow-200",
      text: "Pending"
    },
    premium: {
      icon: Star,
      colors: "bg-purple-100 text-purple-800 border-purple-200",
      text: "Premium"
    },
    vip: {
      icon: Star,
      colors: "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500",
      text: "VIP"
    },
    new: {
      icon: Star,
      colors: "bg-blue-100 text-blue-800 border-blue-200",
      text: "New"
    },
    inactive: {
      icon: XCircle,
      colors: "bg-gray-100 text-gray-600 border-gray-200",
      text: "Inactive"
    }
  }

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  }

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  }

  const config = badgeConfig[type]
  const IconComponent = config.icon

  return (
    <span
      className={`inline-flex items-center space-x-1.5 rounded-full border font-medium ${config.colors} ${sizeClasses[size]} ${className}`}
    >
      {showIcon && <IconComponent className={iconSizes[size]} />}
      <span>{children || config.text}</span>
    </span>
  )
}

export default UserBadge 