"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#fees", label: "Fees" },
  { href: "#pay", label: "Pay" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20 overflow-hidden">
      <div 
        ref={ref}
        className={cn(
          "mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo & Description */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "100ms" }}>
            <p className="mt-6 text-sm text-background/60 leading-relaxed max-w-xs">
              Chartered Accountants specialising in taxation for investment properties, small business, and individual taxation since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "200ms" }}>
            <h3 className="font-serif text-lg font-medium mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-background/30 group-hover:bg-primary transition-colors duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "300ms" }}>
            <h3 className="font-serif text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-background/40 w-14">Office:</span>
                <span className="text-background/80 font-medium">02 9420 4660</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-background/40 w-14">Mobile:</span>
                <span className="text-background/80 font-medium">0417 255 670</span>
              </li>
              <li className="pt-2">
                <a 
                  href="mailto:mail@deborahhill.com.au"
                  className="text-background/80 hover:text-background transition-colors duration-300 font-medium"
                >
                  mail@deborahhill.com.au
                </a>
              </li>
              <li className="pt-2 text-background/60">Lane Cove, NSW</li>
            </ul>
          </div>
        </div>

        <div className={cn(
          "mt-14 pt-8 border-t border-background/10 text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )} style={{ transitionDelay: "400ms" }}>
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Deborah Hill & Co Chartered Accountants. All rights reserved.
          </p>
          <p className="mt-3 text-xs text-background/40 italic">
            Liability is limited by a scheme approved under the Professional Standards legislation
          </p>
        </div>
      </div>
    </footer>
  )
}
