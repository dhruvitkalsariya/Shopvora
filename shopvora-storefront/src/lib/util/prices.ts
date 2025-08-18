import { Region } from "@medusajs/types"

export const formatAmount = ({
  amount,
  region,
  includeTaxes = false,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
}: {
  amount: number
  region: Region
  includeTaxes?: boolean
  minimumFractionDigits?: number
  maximumFractionDigits?: number
}) => {
  const taxRate = includeTaxes ? region.tax_rate / 100 : 0
  const total = amount * (1 + taxRate)

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: region.currency_code.toUpperCase(),
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(total)
}

export const formatPrice = (price: number, currencyCode: string = "INR") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode.toUpperCase(),
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price)
}

export const calculateDiscountPercentage = (originalPrice: number, salePrice: number) => {
  if (originalPrice <= 0) return 0
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

export const formatPercentage = (percentage: number) => {
  return `${percentage}%`
} 