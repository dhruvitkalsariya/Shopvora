"use client"

import { motion } from "framer-motion"
import { ReactNode, forwardRef } from "react"
import { Button as MedusaButton } from "@medusajs/ui"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  variant?: "primary" | "secondary" | "outline" | "danger" | "transparent" | "ghost"
  size?: "sm" | "md" | "lg" | "xl"
  type?: "button" | "submit" | "reset"
  isLoading?: boolean
  icon?: ReactNode
  iconPosition?: "left" | "right"
  fullWidth?: boolean
  rounded?: "sm" | "md" | "lg" | "full"
  animate?: boolean
  href?: string
  target?: string
  rel?: string
  "data-testid"?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "primary",
  size = "md",
  type = "button",
  isLoading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  rounded = "md",
  animate = true,
  href,
  target,
  rel,
  "data-testid": dataTestId,
  ...props
}, ref) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  }

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25",
    secondary: "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50",
    outline: "bg-transparent text-purple-600 border-2 border-purple-600 hover:bg-purple-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
    transparent: "bg-transparent text-gray-700 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100"
  }

  const roundedClasses = {
    sm: "rounded",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full"
  }

  const baseClasses = `
    font-medium
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${roundedClasses[rounded]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

  const content = (
    <div className="flex items-center justify-center gap-2">
      {isLoading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      )}
      {icon && iconPosition === "left" && !isLoading && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && !isLoading && icon}
    </div>
  )

  // If href is provided, render as link
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={`inline-block ${baseClasses}`}
        whileHover={animate && !disabled ? { scale: 1.02, y: -1 } : {}}
        whileTap={animate && !disabled ? { scale: 0.98 } : {}}
        data-testid={dataTestId}
      >
        {content}
      </motion.a>
    )
  }

  // Use Medusa Button for form submissions
  if (type === "submit") {
    return (
      <MedusaButton
        ref={ref}
        type={type}
        variant={variant as any}
        size={size as any}
        className={className}
        disabled={disabled || isLoading}
        isLoading={isLoading}
        data-testid={dataTestId}
        {...props}
      >
        {content}
      </MedusaButton>
    )
  }

  // Regular button
  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={baseClasses}
      whileHover={animate && !disabled ? { scale: 1.02, y: -1 } : {}}
      whileTap={animate && !disabled ? { scale: 0.98 } : {}}
      data-testid={dataTestId}
      {...props}
    >
      {content}
    </motion.button>
  )
})

Button.displayName = "Button"

export default Button 