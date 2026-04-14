"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#fees", label: "Fees" },
  { href: "#pay", label: "Pay" },
  { href: "/downloads", label: "Downloads" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500",
          scrolled ? "h-16" : "h-20"
        )}>
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-STACKED2-O3rpyz6ZU9e8GwJcfl2Gq1pOee3s4B.jpg"
              alt="Deborah Hill & Co Chartered Accountants"
              width={180}
              height={80}
              className={cn(
                "w-auto object-contain transition-all duration-500",
                scrolled ? "h-10" : "h-14"
              )}
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
            <Button asChild size="sm" className="ml-4 group">
              <Link href="#contact">
                <Phone className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -m-2.5 p-2.5 text-foreground rounded-full hover:bg-muted transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "absolute inset-0 h-6 w-6 transition-all duration-300",
                mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )} />
              <X className={cn(
                "absolute inset-0 h-6 w-6 transition-all duration-300",
                mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-out",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium text-foreground/70 hover:text-primary hover:bg-muted/50 py-3 px-4 rounded-lg transition-all duration-300",
                    mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${i * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div 
                className={cn(
                  "pt-4 transition-all duration-300",
                  mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                <Button asChild className="w-full">
                  <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    <Phone className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
