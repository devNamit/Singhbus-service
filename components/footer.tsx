import Link from "next/link"
import { Phone, MapPin, Clock, Bus } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Bus className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Singh Bus</span>
                <span className="text-xs text-muted">Service</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              35+ years of trusted bus rental services in Lucknow. Your journey, our commitment.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-muted transition-colors hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted transition-colors hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted">Wedding Bus Rental</li>
              <li className="text-muted">Corporate Travel</li>
              <li className="text-muted">Pilgrimage Tours</li>
              <li className="text-muted">School/College Trips</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <a href="tel:+919118681966" className="text-muted transition-colors hover:text-primary">
                    +91-9118681966
                  </a>
                  <br />
                  <a href="tel:+919839629498" className="text-muted transition-colors hover:text-primary">
                    +91-9839629498
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted">Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted">24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-muted/20 pt-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Singh Bus Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
