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
  // ✅ FIX: "Varanasi & Varanasi" tha pehle — ab sahi kiya
  title: {
    default: "Singh Bus Service | Bus Rental Varanasi to Kolkata | Wedding & Tour Buses",
    template: "%s | Singh Bus Service",
  },
  description:
    "Singh Bus Service — Varanasi ka sabse bharosemand bus rental. AC & Non-AC buses for weddings, pilgrimages, corporate tours, Varanasi to Kolkata. 35+ saal ka anubhav. Abhi book karein: +91-9118681966",

  keywords: [
    // Primary — high intent searches
    "bus rental Varanasi",
    "bus hire Varanasi",
    "Varanasi to Kolkata bus",
    "Varanasi se Kolkata bus",
    "bus service Varanasi",
    "bus booking Varanasi",

    // Wedding
    "wedding bus rental Varanasi",
    "shaadi bus Varanasi",
    "baraat bus hire Varanasi",
    "wedding transport Varanasi",

    // Pilgrimage (very high search volume from UP/Bihar)
    "pilgrimage bus Varanasi",
    "Char Dham yatra bus",
    "Kashi yatra bus",
    "Gaya bus service",
    "Varanasi Gaya bus",
    "tirth yatra bus UP",
    "pilgrimage tour bus Uttar Pradesh",

    // Corporate
    "corporate bus hire Varanasi",
    "office bus service Varanasi",
    "staff bus Varanasi",

    // AC / Luxury
    "AC bus rental Varanasi",
    "luxury bus hire Varanasi",
    "tempo traveller Varanasi",
    "mini bus hire Varanasi",

    // Kolkata routes
    "bus rental Kolkata",
    "Varanasi Kolkata tour package bus",

    // Brand
    "Singh Bus Service",
    "Singh Bus Service Varanasi",
    "Singh Bus Service Bhullanpur",

    // Long-tail
    "bus hire for wedding in Varanasi",
    "cheap bus rental Varanasi",
    "24 hour bus service Varanasi",
    "best bus rental service Varanasi",
  ],

  authors: [{ name: "Singh Bus Service", url: "https://singhbusservice.com" }],
  creator: "Singh Bus Service",
  publisher: "Singh Bus Service",

  metadataBase: new URL("https://singhbusservice.com"),

  openGraph: {
    title: "Singh Bus Service | Premium Bus Rental Varanasi to Kolkata",
    description:
      "Varanasi, Gaya aur Kolkata mein best bus rental. Weddings, tours, pilgrimages ke liye AC & non-AC buses. 35+ saal trusted service. Call: +91-9118681966",
    url: "https://singhbusservice.com",
    siteName: "Singh Bus Service",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://singhbusservice.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Singh Bus Service - Premium Bus Rental Varanasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Singh Bus Service | Bus Rental Varanasi to Kolkata",
    description:
      "Premium bus rental for weddings, pilgrimages, corporate travel. 35+ years trusted service in Varanasi. Book now!",
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
      // ✅ Sirf tabhi rakhen jab Hindi page actually exist kare
      // "hi-IN": "https://singhbusservice.com/hi",
    },
  },

  category: "Transportation",
  classification: "Bus Rental Service",
}

// ======================================================
// SCHEMA DATA — alag se define kiya for cleanliness
// ======================================================

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://singhbusservice.com/#organization",
  name: "Singh Bus Service",
  url: "https://singhbusservice.com",
  logo: {
    "@type": "ImageObject",
    url: "https://singhbusservice.com/logo.png",
    width: 300,
    height: 100,
  },
  description:
    "Singh Bus Service — Varanasi, Gaya, aur Kolkata mein premium bus rental service. 35+ saal se weddings, pilgrimages, aur corporate tours ke liye trusted service.",
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
    { "@type": "City", name: "Varanasi" },
    { "@type": "City", name: "Gaya" },
    { "@type": "City", name: "Kolkata" },
    { "@type": "State", name: "Uttar Pradesh" },
    { "@type": "State", name: "Bihar" },
    { "@type": "State", name: "West Bengal" },
  ],
  sameAs: [
    "https://www.facebook.com/singhbusservice",
    "https://www.instagram.com/singhbusservice",
    "https://www.youtube.com/singhbusservice",
  ],
  priceRange: "$$",
  foundingDate: "1989",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
}

const localBusinessSchema = {
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
    "Premium bus rental services for weddings, corporate events, pilgrimage tours, and city transfers in Varanasi, Gaya, and Kolkata.",
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
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
  // ✅ FIX: "servesCuisine" remove kiya — ye bus service hai, restaurant nahi!
  knowsAbout: [
    "Bus Rental",
    "Wedding Transportation",
    "Corporate Travel",
    "Pilgrimage Tours",
    "Varanasi to Kolkata Route",
  ],
  hasMap: "https://maps.google.com/?q=Singh+Bus+Service+Bhullanpur+Varanasi",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  currenciesAccepted: "INR",
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bus Rental Service",
  serviceType: "Bus Rental",
  description:
    "Premium AC & non-AC bus rental for weddings, corporate events, pilgrimage tours, and long-distance travel from Varanasi.",
  provider: {
    "@type": "Organization",
    name: "Singh Bus Service",
    url: "https://singhbusservice.com",
  },
  areaServed: [
    { "@type": "City", name: "Varanasi" },
    { "@type": "City", name: "Gaya" },
    { "@type": "City", name: "Kolkata" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bus Fleet",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Luxury Bus",
          description: "Air-conditioned luxury buses for weddings and corporate events",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Non-AC Bus",
          description: "Comfortable non-AC buses for pilgrimages and group tours",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mini Bus / Tempo Traveller",
          description: "Mini buses for small groups and airport transfers",
        },
      },
    ],
  },
}

// ✅ NEW: FAQ Schema — Google Featured Snippet ke liye bahut important!
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Varanasi se Kolkata bus service available hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haan, Singh Bus Service Varanasi se Kolkata ke liye AC aur non-AC buses provide karta hai. Booking ke liye +91-9118681966 par call karein.",
      },
    },
    {
      "@type": "Question",
      name: "What is the contact number for Singh Bus Service Varanasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Singh Bus Service ka contact number hai +91-9118681966. Hum 24/7 available hain. Address: Bhullanpur, Varanasi, UP 221001.",
      },
    },
    {
      "@type": "Question",
      name: "Does Singh Bus Service provide wedding bus rental in Varanasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Singh Bus Service offers premium wedding bus rental in Varanasi including baraat buses, AC luxury coaches, and decorated buses for wedding ceremonies. Contact +91-9118681966.",
      },
    },
    {
      "@type": "Question",
      name: "How many years has Singh Bus Service been operating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Singh Bus Service has been operating since 1989 — over 35 years of trusted bus rental service in Varanasi, Gaya, and Kolkata.",
      },
    },
  ],
}

// ✅ NEW: Vehicle/Fleet Schema
const vehicleSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Singh Bus Service Fleet",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "BusOrCoach",
        name: "AC Luxury Bus",
        description: "Air-conditioned luxury coach for weddings and corporate events, 40-50 seats",
        provider: { "@type": "Organization", name: "Singh Bus Service" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "BusOrCoach",
        name: "Non-AC Bus",
        description: "Comfortable non-AC buses for pilgrimages and group tours, 40-60 seats",
        provider: { "@type": "Organization", name: "Singh Bus Service" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "BusOrCoach",
        name: "Mini Bus",
        description: "Mini bus for small groups, 15-25 seats, ideal for local transfers",
        provider: { "@type": "Organization", name: "Singh Bus Service" },
      },
    },
  ],
}

const breadcrumbSchema = {
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
      name: "Our Buses",
      item: "https://singhbusservice.com/buses",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Book a Bus",
      item: "https://singhbusservice.com/booking",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <head>
        {/* Google Search Console Verification — apna actual code daalo */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />

        {/* ✅ Geographic targeting — local SEO ke liye important */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Varanasi" />
        <meta name="geo.position" content="25.3176;82.9789" />
        <meta name="ICBM" content="25.3176, 82.9789" />

        {/* ✅ Language targeting */}
        <meta httpEquiv="content-language" content="en-IN" />

        {/* Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* ✅ NEW Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}