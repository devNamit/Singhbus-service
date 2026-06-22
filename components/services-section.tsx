import { Heart, Building2, Map, GraduationCap, Plane, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Heart,
    title: "Wedding Bus Rental",
    description:
      "Make your special day memorable with our decorated luxury buses. Perfect for baraat, guest pickup, and venue transfers.",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description:
      "Reliable transportation for corporate events, team outings, conferences, and employee commute services.",
  },
  {
    icon: Map,
    title: "Pilgrimage Tours",
    description:
      "Comfortable journeys to religious destinations - Varanasi, Ayodhya, Prayagraj, Mathura, and more.",
  },
  {
    icon: GraduationCap,
    title: "School & College Trips",
    description:
      "Safe and fun transportation for educational tours, picnics, and annual trips with experienced drivers.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Group airport pickups and drops with timely service. Serving Lucknow, Delhi, and nearby airports.",
  },
  {
    icon: Users,
    title: "Family Functions",
    description:
      "From engagements to anniversaries, we provide comfortable travel for all your family celebrations.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Complete Bus Rental Solutions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Whatever your travel needs, we have the perfect bus and service package for you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
