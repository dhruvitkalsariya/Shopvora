"use client"

import { motion } from "framer-motion"
import { Play, Pause, ChevronLeft, ChevronRight, ExternalLink, ShoppingBag } from "lucide-react"

// Enhanced Play/Pause Button Component
export function EnhancedPlayPauseButton({
  isPlaying,
  onClick,
  className = "",
  size = "md"
}: {
  isPlaying: boolean
  onClick: () => void
  className?: string
  size?: "sm" | "md" | "lg"
}) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14"
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${sizeClasses[size]} 
        relative
        bg-gradient-to-br from-purple-600/90 to-indigo-700/90
        backdrop-blur-md
        rounded-full
        flex items-center justify-center
        text-white
        shadow-2xl
        border border-white/20
        hover:shadow-purple-500/25
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2
        ${className}
      `}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-400/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Icon with smooth transition */}
      <motion.div
        key={isPlaying ? "pause" : "play"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isPlaying ? (
          <Pause className={iconSizes[size]} />
        ) : (
          <Play className={`${iconSizes[size]} ml-0.5`} />
        )}
      </motion.div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  )
}

// Enhanced Navigation Arrow Button Component
export function EnhancedNavigationButton({
  direction,
  onClick,
  className = "",
  size = "md"
}: {
  direction: "prev" | "next"
  onClick: () => void
  className?: string
  size?: "sm" | "md" | "lg"
}) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14"
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        relative
        bg-gradient-to-br from-purple-600/90 to-indigo-700/90
        backdrop-blur-md
        rounded-full
        flex items-center justify-center
        text-white
        shadow-2xl
        border border-white/20
        hover:shadow-purple-500/25
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2
        ${className}
      `}
      whileHover={{
        
        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: direction === "prev" ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-400/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Icon with direction-based animation */}
      <motion.div
        key={direction}
        initial={{ rotate: direction === "prev" ? 90 : -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: direction === "prev" ? -90 : 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ 
          x: direction === "prev" ? -2 : 2
        }}
      >
        {direction === "prev" ? (
          <ChevronLeft className={iconSizes[size]} />
        ) : (
          <ChevronRight className={iconSizes[size]} />
        )}
      </motion.div>
      
      {/* Enhanced hover glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 to-indigo-400/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Click ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}

// Enhanced Shop Button Component
export function EnhancedShopButton({
  text,
  onClick,
  className = "",
  size = "md",
  variant = "primary"
}: {
  text: string
  onClick: () => void
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "outline"
}) {
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl"
  }

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/25",
    secondary: "bg-gradient-to-r from-white to-gray-100 text-gray-800 border border-gray-200 shadow-xl hover:shadow-2xl",
    outline: "bg-transparent text-white border-2 border-white/80 backdrop-blur-sm hover:bg-white/10"
  }

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        relative
        font-bold
        uppercase
        tracking-wider
        rounded-full
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2
        overflow-hidden
        ${className}
      `}
      whileHover={{
        scale: 1.02,
        y: -2
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {/* Simple animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"
        animate={{
          x: ["-100%", "100%"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        <span className="mr-2">{text}</span>
        <motion.div
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          {variant === "primary" ? (
            <ShoppingBag className="w-5 h-5" />
          ) : (
            <ExternalLink className="w-5 h-5" />
          )}
        </motion.div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  )
}

// Enhanced Slide Indicator Component
export function EnhancedSlideIndicator({
  isActive,
  onClick,
  index,
  className = ""
}: {
  isActive: boolean
  onClick: () => void
  index: number
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        w-20 h-2
        rounded-full
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-purple-400/50
        ${className}
      `}
      style={{
        background: isActive 
          ? "linear-gradient(90deg, #8B5CF6 0%, #6366F1 100%)"
          : "rgba(255, 255, 255, 0.8)"
      }}
    >
      {/* Hover effect */}
      <div
        className="absolute inset-0 rounded-full border border-transparent transition-opacity duration-300"
        style={{
          background: "#6a34d133",
        }}
      >
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background: "#9333ea",
            opacity: 0.10,
            zIndex: 1,
            transition: "opacity 0.3s",
            // Only show on hover of parent button
            pointerEvents: "none",
            mixBlendMode: "normal"
          }}
        />
      </div>
    </button>
  )
}

// Container for all carousel controls
export function CarouselControlsContainer({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      {children}
    </div>
  )
}