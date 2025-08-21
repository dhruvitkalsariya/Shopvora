import { Metadata } from "next"
import RecentlyViewedPage from "@modules/account/components/recently-viewed-page"

export const metadata: Metadata = {
  title: "Recently Viewed Products",
  description: "View your recently viewed products and continue shopping.",
}

export default function RecentlyViewed() {
  return <RecentlyViewedPage />
} 