"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      { label: "Office", value: "02 9420 4660" },
      { label: "Mobile", value: "0417 255 670" },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      { label: "", value: "mail@deborahhill.com.au", isEmail: true },
    ],
  },
  {
    icon: MapPin,
    title: "Location",
    details: [
      { label: "", value: "Lane Cove, NSW" },
    ],
  },
]

export function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-medium tracking-wider text-primary uppercase mb-4">
            Contact Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Contact us using the following information.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, i) => (
            <Card 
              key={info.title} 
              className={cn(
                "premium-card text-center transition-all duration-700",
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CardContent className="pt-10 pb-10">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, j) => (
                    <div key={j} className="text-muted-foreground">
                      {detail.label && (
                        <span className="text-sm">{detail.label}: </span>
                      )}
                      {detail.isEmail ? (
                        <a 
                          href={`mailto:${detail.value}`}
                          className="text-primary hover:underline transition-colors font-medium"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="font-medium text-foreground">{detail.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
