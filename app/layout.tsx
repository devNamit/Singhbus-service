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
  title: "Singh Bus Service | Premium Bus Rental in Varanasi & Varanasi | Tour Buses",
  description:
    "Singh Bus Service offers premium AC & non-AC bus rental in Varanasi, Varanasi, and Kolkata. 35+ years trusted service for weddings, corporate events, pilgrimages, and tours. Book instantly - +91-9118681966",
  
  keywords: [
    "bus rental Varanasi",
    "bus hire Varanasi",
    "wedding bus rental Varanasi",
    "tour bus service UP",
    "corporate bus hire",
    "pilgrimage tour buses",
    "AC bus rental",
    "Varanasi to Kolkata bus",
    "Singh Bus Service",
    "luxury bus hire",
    "bus rental Kolkata",
  ],
  
  authors: [{ name: "Singh Bus Service" }],
  creator: "Singh Bus Service",
  publisher: "Singh Bus Service",
  
  // Important for local SEO
  metadataBase: new URL("https://singhbusservice.com"),
  
  openGraph: {
    title: "Singh Bus Service | Premium Bus Rental in Varanasi & Kolkata",
    description:
      "Book premium buses for weddings, tours, corporate events, and pilgrimages. 35+ years of trusted service. AC & non-AC luxury buses available. Call now!",
    url: "https://singhbusservice.com",
    siteName: "Singh Bus Service",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://singhbusservice.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Singh Bus Service - Premium Bus Rental",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Singh Bus Service | Bus Rental in Varanasi & Kolkata",
    description:
      "Premium bus rental for weddings, tours, corporate travel. 35+ years trusted service. Book now!",
    creator: "@singhbusservice",
  },
  
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  
  alternates: {
    canonical: "https://singhbusservice.com",
    languages: {
      "en-IN": "https://singhbusservice.com",
      "hi-IN": "https://singhbusservice.com/hi",
    },
  },
  
  // Additional meta tags
  category: "Business",
  classification: "Bus Rental Service",
  
  // Viewport (though Next.js handles this)
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
        {/* Google Search Console Verification */}
        {/* IMPORTANT: Replace with your actual verification code from Google */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE_HERE"
        />

        {/* Schema.org - Main Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Singh Bus Service",
              url: "https://singhbusservice.com",
              logo: "https://singhbusservice.com/logo.png",
              description:
                "Premium bus rental service in Varanasi,Gaya , and Kolkata with 35+ years of trusted service",
              telephone: "+91-9118681966",
              email: "contact@singhbusservice.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bhullanpur",
                addressLocality: "Varanasi",
                addressRegion: "Uttar Pradesh",
                postalCode: "221001",
                addressCountry: "IN",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Varanasi",
                },
                {
                  "@type": "City",
                  name: "Gaya",
                },
                {
                  "@type": "City",
                  name: "Kolkata",
                },
              ],
              sameAs: [
                "https://www.facebook.com/singhbusservice",
                "https://www.instagram.com/singhbusservice",
                "https://www.youtube.com/singhbusservice",
              ],
              priceRange: "$$",
              foundingDate: "1989",
              founders: [
                {
                  "@type": "Person",
                  name: "Singh Family",
                },
              ],
            }),
          }}
        />

        {/* Schema.org - Local Business (for maps, local SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://singhbusservice.com",
              name: "Singh Bus Service",
              image: [
                "https://singhbusservice.com/logo.png",
                "https://singhbusservice.com/bus-1.jpg",
                "https://singhbusservice.com/bus-2.jpg",
              ],
              description:
                "Premium bus rental services for weddings, corporate events, tours, and pilgrimages",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bhullanpur",
                addressLocality: "Varanasi",
                addressRegion: "Uttar Pradesh",
                postalCode: "221001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.3176,
                longitude: 82.9789,
              },
              url: "https://singhbusservice.com",
              telephone: "+91-9118681966",
              email: "contact@singhbusservice.com",
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
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "120",
                bestRating: "5",
                worstRating: "1",
              },
              servesCuisine: "N/A",
              knowsAbout: [
                "Bus Rental",
                "Wedding Transportation",
                "Corporate Travel",
                "Tour Services",
                "Pilgrimage Tours",
              ],
            }),
          }}
        />

        {/* Schema.org - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Service",
              name: "Bus Rental Service",
              description:
                "Premium bus rental for weddings, corporate events, tours, and pilgrimages",
              provider: {
                "@type": "Organization",
                name: "Singh Bus Service",
                url: "https://singhbusservice.com",
              },
              areaServed: ["Varanasi", "Gaya", "Kolkata", "Uttar Pradesh"],
              priceRange: "$$",
            }),
          }}
        />

        {/* Breadcrumb Schema (for search results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://singhbusservice.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Bus Rental",
                  item: "https://singhbusservice.com/buses",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Booking",
                  item: "https://singhbusservice.com/booking",
                },
              ],
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