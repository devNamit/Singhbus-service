import { Phone, ArrowRight, Shield, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,119,6,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">35+ Years of Trusted Service</span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Premium Bus Rental Services in{" "}
              <span className="text-primary">Varanasi</span>
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
              From grand weddings to corporate events, pilgrimages to school trips &mdash;
              Singh Bus Service delivers safe, comfortable, and reliable transportation
              across Uttar Pradesh and beyond.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href="https://wa.me/919118681966?text=Hi%2C%20I%20want%20to%20book%20a%20bus.%20Please%20share%20the%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Quote on WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

             
              <Button
                size="lg"
                asChild
                className="bg-green-600 text-white border-none hover:bg-green-700 active:bg-green-800 active:scale-95 transition-all duration-200"
              >
                <a href="tel:+919118681966">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-muted/20 pt-8">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <Shield className="mb-2 h-6 w-6 text-primary" />
                <span className="text-2xl font-bold">100%</span>
                <span className="text-sm text-muted">Safe Travel</span>
              </div>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <Clock className="mb-2 h-6 w-6 text-primary" />
                <span className="text-2xl font-bold">24/7</span>
                <span className="text-sm text-muted">Available</span>
              </div>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <Users className="mb-2 h-6 w-6 text-primary" />
                <span className="text-2xl font-bold">10K+</span>
                <span className="text-sm text-muted">Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="text-8xl font-bold text-primary">35+</div>
                <div className="mt-2 text-xl font-semibold">Years of Excellence</div>
                <div className="mt-4 text-muted">Serving Varanasi since 1989</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
