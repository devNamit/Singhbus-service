import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "919118681966"
const WHATSAPP_MESSAGE = "Hi%2C%20I%20want%20to%20book%20a%20bus.%20Please%20share%20the%20details."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function ContactSection() {
  return (
    <section id="booking" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Book Now
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get Your Free Quote Instantly
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Message us on WhatsApp and we&apos;ll get back to you with the best quote within minutes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-4xl">

          {/* WhatsApp Card - Main CTA */}
          <Card className="border-primary shadow-lg sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-green-500" />
                WhatsApp Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Fastest way to book! Send us your travel details on WhatsApp and get an instant quote.
              </p>
              <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp with Piyush
                </a>
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Typically replies within minutes
              </p>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card id="contact">
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919118681966" className="text-muted-foreground hover:text-primary">
                    +91-9118681966
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Bhullanpur Varanasi, UP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Available</p>
                  <p className="text-muted-foreground">24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Tips Card */}
          <Card className="border-primary bg-primary/5">
            <CardContent className="pt-6">
              <h4 className="font-semibold">What to mention on WhatsApp?</h4>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>📍 From & To city</li>
                <li>📅 Travel date</li>
                <li>👥 Number of passengers</li>
                <li>🚌 Bus type preference (if any)</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
