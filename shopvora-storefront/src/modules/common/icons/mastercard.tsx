import React from "react"
import { IconProps } from "types/icon"

const Mastercard: React.FC<IconProps> = ({
  size = "16",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <circle cx="16" cy="16" r="12" fill="#EB001B"/>
      <circle cx="32" cy="16" r="12" fill="#F79E1B"/>
      <path
        d="M24 8c-4.42 0-8 3.58-8 8s3.58 8 8 8c2.21 0 4.21-.89 5.66-2.34C31.11 20.21 32 18.21 32 16s-.89-4.21-2.34-5.66C28.21 8.89 26.21 8 24 8z"
        fill="#FF5F00"
      />
    </svg>
  )
}

export default Mastercard 