'use client';

import { ArrowRight, MapPin, Clock } from 'lucide-react';

interface Route {
  city1: string;
  city2: string;
  duration: string;
  distance: string;
}

const routes: Route[] = [
  { city1: 'Varanasi', city2: 'Kolkata', duration: '12h 30m', distance: '680 km' },
  { city1: 'Varanasi', city2: 'Gaya', duration: '3h 45m', distance: '145 km' },
  { city1: 'Varanasi', city2: 'Ayodhya', duration: '2h 15m', distance: '125 km' },
  { city1: 'Varanasi', city2: 'Dhanbad', duration: '6h 20m', distance: '320 km' },
  { city1: 'Varanasi', city2: 'Bihar Sharif', duration: '4h 10m', distance: '205 km' },
];

export function BusRoutes() {
  return (
    <section className="w-full py-12 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Our Routes
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore major cities we connect with reliable bus services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {routes.map((route, index) => (
            <RouteCard key={index} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface RouteCardProps {
  route: Route;
}

function RouteCard({ route }: RouteCardProps) {
  // WhatsApp messaging - matching contact section pattern
  const WHATSAPP_NUMBER = "919118681966"
  const whatsappMessage = `Hi%2C%20I%20want%20to%20book%20a%20bus%20from%20${route.city1}%20to%20${route.city2}.%20Duration%3A%20${route.duration}%2C%20Distance%3A%20${route.distance}.%20Please%20share%20the%20details.`
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  return (
    <div className="bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-border hover:border-primary/50 group cursor-pointer">
      {/* Route Header - Bidirectional */}
      <div className="flex items-center justify-between gap-2 mb-3">
        {/* City 1 */}
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">From</div>
          <div className="text-sm font-bold text-foreground truncate flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            {route.city1}
          </div>
        </div>

        {/* Bidirectional Arrows */}
        <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
          <div className="rounded-full p-1.5 bg-primary">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
          <div className="rounded-full p-1.5 bg-primary rotate-180">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* City 2 */}
        <div className="flex-1 min-w-0 text-right">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">To</div>
          <div className="text-sm font-bold text-foreground truncate flex items-center justify-end gap-1">
            {route.city2}
            <MapPin className="w-4 h-4 text-primary shrink-0" />
          </div>
        </div>
      </div>

      {/* Route Details */}
      <div className="border-t border-border pt-3 flex gap-4 text-xs">
        <div className="flex items-center gap-1.5 flex-1">
          <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
          <div>
            <div className="font-semibold text-foreground">{route.duration}</div>
            <div className="text-muted-foreground">Duration</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-1">
          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
          <div>
            <div className="font-semibold text-foreground">{route.distance}</div>
            <div className="text-muted-foreground">Distance</div>
          </div>
        </div>
      </div>

      {/* Book Button - WhatsApp Redirect */}
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-3 py-1.5 rounded bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
