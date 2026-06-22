"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Bus } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Bus className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-foreground">Singh Bus</span>
            <span className="text-xs text-muted-foreground">Service</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+919118681966" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            +91-9118681966
          </a>
          <Button asChild>
            <a href="https://wa.me/919118681966?text=Hi%2C%20I%20want%20to%20book%20a%20bus." target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-background border-t border-border shadow-lg lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+919118681966" className="flex items-center gap-2 py-3 text-sm font-medium text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              +91-9118681966
            </a>
            <Button asChild className="mt-3">
              <a href="https://wa.me/919118681966?text=Hi%2C%20I%20want%20to%20book%20a%20bus." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Book Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}