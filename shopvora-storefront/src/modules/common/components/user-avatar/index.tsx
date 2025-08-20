import React from "react"
import { User } from "lucide-react"

interface UserAvatarProps {
  src?: string | null
  alt?: string
  name?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  onClick?: () => void
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  alt = "User avatar",
  name,
  size = "md",
  className = "",
  onClick
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg"
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      className={`relative inline-block rounded-full overflow-hidden bg-purple-100 border-2 border-purple-200 flex items-center justify-center font-medium text-purple-700 ${sizeClasses[size]} ${className} ${
        onClick ? "cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-all duration-200" : ""
      }`}
      onClick={handleClick}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to initials if image fails to load
            const target = e.target as HTMLImageElement
            target.style.display = "none"
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = name ? getInitials(name) : <User className="w-1/2 h-1/2" />
            }
          }}
        />
      ) : name ? (
        getInitials(name)
      ) : (
        <User className="w-1/2 h-1/2" />
      )}
    </div>
  )
}

export default UserAvatar 