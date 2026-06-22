import { Users, Snowflake, Wifi, Tv } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fleet = [
  {
    name: "Mini Bus",
    capacity: "18-20 Seats",
    type: "AC / Non-AC",
    features: ["Push-back seats", "Music system", "Comfortable interiors"],
    popular: false,
  },
  {
    name: "Standard Bus",
    capacity: "35-40 Seats",
    type: "AC / Non-AC",
    features: ["Reclining seats", "LED TV", "WiFi available", "USB charging"],
    popular: true,
  },
  {
    name: "Luxury Bus",
    capacity: "45-50 Seats",
    type: "Fully AC",
    features: ["Premium interiors", "Entertainment system", "WiFi", "Refreshments"],
    popular: false,
  },
  {
    name: "Volvo / Scania",
    capacity: "40-45 Seats",
    type: "Multi-axle AC",
    features: ["2x2 seating", "Individual AC vents", "Bio toilet", "GPS tracking"],
    popular: false,
  },
]

export function FleetSection() {
  return (
    <section id="fleet" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Fleet
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose Your Perfect Ride
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            From compact mini buses to luxury Volvos, we have the right vehicle for every occasion and budget.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((bus) => (
            <Card key={bus.name} className={`relative ${bus.popular ? "border-primary shadow-lg" : ""}`}>
              {bus.popular && (
                <Badge className="absolute -top-2.5 left-4">Most Popular</Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{bus.name}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {bus.capacity}
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Snowflake className="h-4 w-4" />
                  {bus.type}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {bus.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      {feature.includes("WiFi") ? (
                        <Wifi className="h-3.5 w-3.5 text-primary" />
                      ) : feature.includes("TV") || feature.includes("Entertainment") ? (
                        <Tv className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
