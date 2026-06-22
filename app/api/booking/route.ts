import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { name, phone, email, fromCity, toCity } = body

    // Validate required fields
    if (!name || !phone || !fromCity || !toCity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^[+]?[\d\s-]{10,}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      )
    }

    // Validate email if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Invalid email format" },
          { status: 400 }
        )
      }
    }

    const db = await getDatabase()
    const collection = db.collection("enquiries")

    const enquiry = {
      name,
      phone,
      email: email || null,
      fromCity,
      toCity,
      status: "new",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await collection.insertOne(enquiry)

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Booking API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
