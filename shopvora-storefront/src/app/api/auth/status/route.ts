import { NextRequest, NextResponse } from "next/server"
import { retrieveCustomer } from "@lib/data/customer"

export async function GET(request: NextRequest) {
  try {
    const customer = await retrieveCustomer()
    
    return NextResponse.json({
      isLoggedIn: !!customer,
      customer: customer || null
    })
  } catch (error) {
    return NextResponse.json({
      isLoggedIn: false,
      customer: null
    })
  }
} 