import React from "react"
import { IconProps } from "types/icon"

const Amex: React.FC<IconProps> = ({
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
      <rect width="48" height="32" rx="4" fill="#006FCF"/>
      <path
        d="M8 8h32v16H8V8zm2 2v12h28V10H10zm2 2h24v8H12v-8zm2 2v4h20v-4H14z"
        fill="white"
      />
      <path
        d="M16 14l2 4h-4l2-4zm4 0l2 4h-4l2-4zm4 0l2 4h-4l2-4z"
        fill="white"
      />
    </svg>
  )
}

export default Amex 