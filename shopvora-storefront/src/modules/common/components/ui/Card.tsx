"use client"

import { motion } from "framer-motion"
import { ReactNode, forwardRef } from "react"
import Image from "next/image"

interface CardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "elevated" | "outlined" | "flat"
  size?: "sm" | "md" | "lg"
  padding?: "none" | "sm" | "md" | "lg"
  rounded?: "sm" | "md" | "lg" | "xl" | "full"
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
  animate?: boolean
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
  }
  header?: ReactNode
  footer?: ReactNode
  badge?: {
    text: string
    variant?: "primary" | "secondary" | "success" | "warning" | "danger"
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  }
  "data-testid"?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className = "",
  variant = "default",
  size = "md",
  padding = "md",
  rounded = "lg",
  hover = false,
  clickable = false,
  onClick,
  animate = true,
  image,
  header,
  footer,
  badge,
  "data-testid": dataTestId,
  ...props
}, ref) => {
  const variantClasses = {
    default: "bg-white border border-gray-200",
    elevated: "bg-white shadow-lg hover:shadow-xl",
    outlined: "bg-white border-2 border-gray-300",
    flat: "bg-gray-50 border border-gray-100"
  }

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg"
  }

  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6"
  }

  const roundedClasses = {
    sm: "rounded",
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-2xl",
    full: "rounded-full"
  }

  const badgeVariants = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-gray-600 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-600 text-white",
    danger: "bg-red-600 text-white"
  }

  const badgePositions = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2"
  }

  const baseClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${roundedClasses[rounded]}
    ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''}
    ${clickable ? 'cursor-pointer' : ''}
    ${className}
  `

  const content = (
    <div className={`relative ${baseClasses}`} ref={ref} data-testid={dataTestId} {...props}>
      {/* Badge */}
      {badge && (
        <div className={`absolute z-10 px-2 py-1 text-xs font-bold rounded-full ${badgeVariants[badge.variant || 'primary']} ${badgePositions[badge.position || 'top-right']}`}>
          {badge.text}
        </div>
      )}

      {/* Image */}
      {image && (
        <div className="relative overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 400}
            height={image.height || 300}
            className={`w-full h-auto object-cover transition-transform duration-300 hover:scale-105 ${image.className || ''}`}
          />
        </div>
      )}

      {/* Header */}
      {header && (
        <div className={`${paddingClasses[padding]} pb-0`}>
          {header}
        </div>
      )}

      {/* Content */}
      <div className={paddingClasses[padding]}>
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className={`${paddingClasses[padding]} pt-0`}>
          {footer}
        </div>
      )}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={hover ? { y: -5 } : {}}
        transition={{ duration: 0.3 }}
        onClick={onClick}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <div onClick={onClick}>
      {content}
    </div>
  )
})

Card.displayName = "Card"

// Specialized Card Components
export const ProductCard = forwardRef<HTMLDivElement, CardProps & {
  product: {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    rating?: number
    reviewCount?: number
    category?: string
    discount?: number
  }
}>(({ product, ...props }, ref) => {
  const { Star, Heart, ShoppingCart } = require("lucide-react")
  
  return (
    <Card
      ref={ref}
      image={{
        src: product.image,
        alt: product.name,
        className: "h-48"
      }}
      badge={product.discount ? {
        text: `${product.discount}% OFF`,
        variant: "danger",
        position: "top-right"
      } : undefined}
      hover={true}
      clickable={true}
      {...props}
    >
      {/* Category */}
      {product.category && (
        <div className="text-xs font-medium text-purple-600 uppercase tracking-wider mb-2">
          {product.category}
        </div>
      )}

      {/* Product Name */}
      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
        {product.name}
      </h3>

      {/* Rating */}
      {product.rating && (
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating!)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          {product.reviewCount && (
            <span className="text-xs text-gray-600">({product.reviewCount})</span>
          )}
        </div>
      )}

      {/* Pricing */}
      <div className="flex items-center gap-2 mb-4">
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        )}
        <span className="text-xl font-bold text-purple-600">
          ${product.price}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>
    </Card>
  )
})

ProductCard.displayName = "ProductCard"

export default Card 