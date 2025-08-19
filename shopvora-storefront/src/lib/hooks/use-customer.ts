"use client"

import { useState, useEffect } from "react"
import { HttpTypes } from "@medusajs/types"
import { retrieveCustomer } from "@lib/data/customer"

export const useCustomer = () => {
  const [customer, setCustomer] = useState<HttpTypes.StoreCustomer | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        setIsLoading(true)
        const customerData = await retrieveCustomer()
        
        if (customerData) {
          setCustomer(customerData)
          setIsLoggedIn(true)
        } else {
          setCustomer(null)
          setIsLoggedIn(false)
        }
      } catch (error) {
        console.error("Error fetching customer:", error)
        setCustomer(null)
        setIsLoggedIn(false)
      } finally {
        setIsLoading(false)
        setIsInitialized(true)
      }
    }

    // Check if we're in the browser
    if (typeof window !== "undefined") {
      fetchCustomer()
    }
  }, [])

  // Listen for authentication changes
  useEffect(() => {
    const handleStorageChange = () => {
      // Re-fetch customer data when storage changes
      const fetchCustomer = async () => {
        try {
          const customerData = await retrieveCustomer()
          if (customerData) {
            setCustomer(customerData)
            setIsLoggedIn(true)
          } else {
            setCustomer(null)
            setIsLoggedIn(false)
          }
        } catch (error) {
          setCustomer(null)
          setIsLoggedIn(false)
        }
      }
      fetchCustomer()
    }

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageChange)
      return () => window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return {
    customer,
    isLoggedIn,
    isLoading: isLoading || !isInitialized
  }
} 