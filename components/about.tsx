"use client"

import { Building2, Users, TrendingUp, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Building2,
    title: "Investment Properties",
  },
  {
    icon: Users,
    title: "Small Business",
  },
  {
    icon: TrendingUp,
    title: "Individual Taxation",
  },
  {
    icon: Award,
    title: "30+ Years Experience",
  },
]

export function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <div
              ref={titleRef}
              className={cn(
                "transition-all duration-1000 ease-out",
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <p className="text-sm font-medium tracking-wider text-primary uppercase mb-4">
                About Us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight text-balance">
                A Trusted Partner for Your Financial Journey
              </h2>
            </div>

            <div
              ref={featuresRef}
              className={cn(
                "mt-10 grid grid-cols-2 gap-4 transition-all duration-1000 ease-out delay-200",
                featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={cn(
                    "flex items-center gap-3 p-4 bg-card rounded-xl border border-border premium-card transition-all duration-500",
                    featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div
            ref={contentRef}
            className={cn(
              "space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 ease-out delay-300",
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <p className="text-lg text-foreground/80">
              Deborah Hill & Co Chartered Accountants was established by Deborah Hill in 1995. The practice was relocated to Lane Cove in 2005.
            </p>
            <p>
              We specialise in taxation for:
            </p>
            <ul className="list-none space-y-2 pl-0">
              {["Investment properties", "Small business", "Individual Taxation"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              As principal, Deborah brings to your business over 30 years of corporate accounting experience. Deborah previously worked in public practice in a variety of roles including taxation, accounting, audit and business services.
            </p>
            <p>
              The firm has had significant growth in recent years by delivering consistently superior services for individuals as well as for small business. This has also meant the firm has a high retention rate of existing customers.
            </p>
            <p>
              While we do have many clients who we have worked with for many years, we have the capacity to grow and are constantly looking for new clients.
            </p>
            <p className="text-foreground/80 font-medium pt-4 border-t border-border">
              We pride ourselves on being a small, flexible and proactive business partner to corporations as well as individuals. We aim to provide the kind of friendly, personal and responsive service that makes a real difference to the results you wish to achieve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
