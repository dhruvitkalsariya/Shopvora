import React from "react"
import { ShoppingBag, Heart, Star, Package, TrendingUp, Award } from "lucide-react"

interface UserStatsProps {
  stats: {
    totalOrders?: number
    totalSpent?: number
    wishlistItems?: number
    reviews?: number
    loyaltyPoints?: number
    memberSince?: string
  }
  layout?: "grid" | "list"
  showIcons?: boolean
  className?: string
}

const UserStats: React.FC<UserStatsProps> = ({
  stats,
  layout = "grid",
  showIcons = true,
  className = ""
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
  }

  const statItems = [
    {
      key: "totalOrders",
      label: "Total Orders",
      value: stats.totalOrders || 0,
      icon: ShoppingBag,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      key: "totalSpent",
      label: "Total Spent",
      value: stats.totalSpent ? formatCurrency(stats.totalSpent) : "$0",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      key: "wishlistItems",
      label: "Wishlist Items",
      value: stats.wishlistItems || 0,
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      key: "reviews",
      label: "Reviews",
      value: stats.reviews || 0,
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      key: "loyaltyPoints",
      label: "Loyalty Points",
      value: stats.loyaltyPoints || 0,
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      key: "memberSince",
      label: "Member Since",
      value: stats.memberSince ? formatDate(stats.memberSince) : "N/A",
      icon: Package,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    }
  ]

  if (layout === "list") {
    return (
      <div className={`space-y-3 ${className}`}>
        {statItems.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow duration-200"
          >
            <div className="flex items-center space-x-3">
              {showIcons && (
                <div className={`p-2 rounded-lg ${item.bgColor} ${item.borderColor} border`}>
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-900">{item.label}</p>
                <p className="text-lg font-semibold text-gray-700">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {statItems.map((item) => (
        <div
          key={item.key}
          className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-gray-300"
        >
          <div className="flex items-center space-x-3 mb-3">
            {showIcons && (
              <div className={`p-2 rounded-lg ${item.bgColor} ${item.borderColor} border`}>
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
            )}
            <h3 className="text-sm font-medium text-gray-900">{item.label}</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">{item.value}</p>
        </div>
      ))}
    </div>
  )
}

export default UserStats 