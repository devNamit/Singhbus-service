import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Singh Bus Service | Bus Rental in Lucknow | Wedding & Tour Bus Hire",
  description:
    "Singh Bus Service offers premium bus rental services in Lucknow for weddings, corporate events, pilgrimages, and tours. 35+ years of trusted service with AC and non-AC luxury buses. Call +91-9118681966 for instant booking.",
  keywords: [
    "bus rental Lucknow",
    "bus hire Lucknow",
    "wedding bus rental",
    "tour bus Lucknow",
    "corporate bus hire",
    "pilgrimage bus service",
    "luxury bus rental UP",
    "Singh Bus Service",
    "AC bus hire Lucknow",
  ],
  authors: [{ name: "Singh Bus Service" }],
  openGraph: {
    title: "Singh Bus Service | Premium Bus Rental in Lucknow",
    description:
      "35+ years of trusted bus rental service in Lucknow. Wedding buses, tour packages, corporate travel & pilgrimages. Book now!",
    url: "https://singhbusservice.com",
    siteName: "Singh Bus Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Singh Bus Service | Bus Rental in Lucknow",
    description:
      "Premium bus rental services for weddings, tours, corporate events. 35+ years of trusted service.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://singhbusservice.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Singh Bus Service",
              image: "https://singhbusservice.com/logo.png",
              "@id": "https://singhbusservice.com",
              url: "https://singhbusservice.com",
              telephone: "+91-9118681966",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lucknow",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                postalCode: "226001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.8467,
                longitude: 80.9462,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [],
              priceRange: "$$",
              description:
                "Premium bus rental services in Lucknow for weddings, corporate events, pilgrimages, and tours. 35+ years of trusted service.",
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
