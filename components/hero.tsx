"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Building2, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Hero() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-in fade-in slide-in-from-left-12 duration-1000 fill-mode-both">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Award className="h-4 w-4" />
              Chartered Accountants Since 1995
            </div>

            <p className="text-sm text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              Chartered Accountants for the Lane Cove & North Shore area
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-foreground leading-[1.1] text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              Expert Tax Solutions for Your{" "}
              <span className="text-primary">Financial Success</span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              We specialise in taxation for investment properties, small business, and all areas of individual taxation. Let us provide the friendly, personal, and responsive service that makes a real difference to your results.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <Button asChild size="lg" className="group h-12 px-8 text-base">
                <Link href="#services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div
              ref={statsRef}
              className={cn(
                "mt-14 pt-8 border-t border-border transition-all duration-1000",
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <div className="flex flex-wrap gap-10">
                {[
                  { icon: Award, value: "30+", label: "Years Experience" },
                  { icon: Building2, value: "1995", label: "Established" },
                  { icon: Users, value: "500+", label: "Happy Clients" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 transition-all duration-700"
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-2xl font-serif font-medium text-foreground">{stat.value}</span>
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New-Deborah-Potrait-shot-cropped-AKqRajGtRhxh6SV4iA6p1ZFL1CyXcO.jpg"
                alt="Deborah Hill - Principal Chartered Accountant"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700 fill-mode-both">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-xl font-medium text-primary">D</span>
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-foreground">Deborah Hill</p>
                  <p className="text-sm text-muted-foreground">Principal & Founder</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 pt-3 border-t border-border">
                30+ years corporate accounting experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
