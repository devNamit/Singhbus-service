import { CheckCircle } from "lucide-react"

const features = [
  "Experienced & verified drivers",
  "Well-maintained luxury fleet",
  "Transparent pricing - no hidden charges",
  "Flexible booking & cancellation",
  "GPS tracking for safety",
  "Insurance covered vehicles",
]

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Trusted Travel Partner Since 1989
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Singh Bus Service has been serving the people of Lucknow and Uttar Pradesh 
              for over three decades. What started as a small family business has grown 
              into one of the most trusted names in bus rental services in the region.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Our commitment to safety, comfort, and punctuality has earned us the trust 
              of thousands of families, corporations, and institutions. Whether it&apos;s a 
              wedding celebration or a corporate event, we treat every journey as our own.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">35+</div>
                  <div className="mt-1 text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="mt-1 text-sm text-muted-foreground">Buses in Fleet</div>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">10K+</div>
                  <div className="mt-1 text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="mt-1 text-sm text-muted-foreground">Weddings Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
