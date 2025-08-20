"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface CustomButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export default function CustomButton({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "primary",
  size = "md"
}: CustomButtonProps) {
  const baseStyles = `
    position: relative
    width: 86px
    height: 8px
    background: #2A1454
    box-shadow: inset 0px 0px 5px rgba(17, 17, 18, 0.2)
    border-radius: 8px
    border: none
    cursor: pointer
    transition: all 0.3s ease
    font-family: inherit
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
  `

  const sizeStyles = {
    sm: "w-16 h-6 text-xs",
    md: "w-20 h-8 text-sm", 
    lg: "w-24 h-10 text-base"
  }

  const variantStyles = {
    primary: "bg-[#2A1454] text-white shadow-lg",
    secondary: "bg-white text-[#2A1454] border border-[#2A1454]",
    outline: "bg-transparent text-[#2A1454] border-2 border-[#2A1454]"
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
      `}
      whileHover={!disabled ? { scale: 1.05, boxShadow: "inset 0px 0px 8px rgba(17, 17, 18, 0.3)" } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      style={{
        background: variant === "primary" ? "#2A1454" : variant === "secondary" ? "#FFFFFF" : "transparent",
        boxShadow: "inset 0px 0px 5px rgba(17, 17, 18, 0.2)",
        borderRadius: "8px"
      }}
    >
      <span className="relative z-10 font-medium">
        {children}
      </span>
      
      {/* Inner glow effect */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)"
        }}
      />
    </motion.button>
  )
}

// Specialized button for carousel indicators
export function CarouselIndicatorButton({
  isActive,
  onClick,
  className = ""
}: {
  isActive: boolean
  onClick: () => void
  className?: string
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        w-[86px] h-[8px] rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2A1454]/50
        ${isActive 
          ? 'bg-[#2A1454] shadow-lg' 
          : 'bg-white border border-gray-200 hover:bg-gray-50'
        }
        ${className}
      `}
      style={{
        boxShadow: isActive ? "inset 0px 0px 5px rgba(17, 17, 18, 0.2)" : "none"
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    />
  )
} 