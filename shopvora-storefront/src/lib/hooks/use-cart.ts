"use client"

import { useState, useEffect } from "react"
import { HttpTypes } from "@medusajs/types"
import { retrieveCart } from "@lib/data/cart"

export const useCart = () => {
  const [cart, setCart] = useState<HttpTypes.StoreCart | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true)
        const cartData = await retrieveCart()
        setCart(cartData)
      } catch (error) {
        console.error("Error fetching cart:", error)
        setCart(null)
      } finally {
        setIsLoading(false)
      }
    }

    // Check if we're in the browser
    if (typeof window !== "undefined") {
      fetchCart()
    }
  }, [])

  // Listen for cart changes (you can extend this to listen for cart updates)
  useEffect(() => {
    const handleStorageChange = () => {
      const fetchCart = async () => {
        try {
          const cartData = await retrieveCart()
          setCart(cartData)
        } catch (error) {
          setCart(null)
        }
      }
      fetchCart()
    }

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageChange)
      return () => window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return {
    cart,
    isLoading
  }
} 