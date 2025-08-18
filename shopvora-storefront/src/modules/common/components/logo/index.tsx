"use client"

import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto", 
  
  }

  return (
    <LocalizedClientLink href="/" className={`font-bold ${className}`}>
      <div className="flex items-center">
        <Image
          src="/images/logo/Logo.svg"
          alt="Shopvora Logo"
          width={188}
          height={40}
          className={sizeClasses[size]}
          priority
        />
      </div>
    </LocalizedClientLink>
  )
}

export default Logo 