"use client"

import { useState } from "react"
import { ChevronDown, User, Briefcase, Rocket, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    id: "individual",
    icon: User,
    title: "INDIVIDUAL TAX RETURNS & TAX STRATEGIES",
    intro: "Let us take the hassle out of tax time for you. We can prepare and lodge your tax return and make sure you are receiving all the possible deductions you're entitled to.",
    additionalIntro: "We are also experienced in tax reduction strategies. We not just provide you with EOY tax planning but can advise on tax planning for your future.",
    listTitle: "Some examples of areas we can help with;",
    items: [
      "Becoming a Tax Resident / Returning from overseas.",
      "Business structures.",
      "Setting up a new business.",
      "Tax Planning.",
      "Investment Properties.",
    ],
  },
  {
    id: "business",
    icon: Briefcase,
    title: "BUSINESS ACCOUNTING SERVICES & PLANNING",
    intro: "We provide tax services for",
    items: [
      "Small to medium size companies.",
      "Trusts.",
      "Partnerships.",
      "Sole traders.",
    ],
    additionalSections: [
      {
        intro: "Save time by streamlining your accounting systems.",
        items: [
          "We can make a difference to your tax income experience and outcomes.",
        ],
      },
      {
        intro: "We will ensure you comply with all ATO & ASIC requirements including;",
        items: [
          "Single Touch Payroll.",
          "Superannuation.",
          "ASIC statutory requirements.",
        ],
      },
      {
        intro: "Get tax strategies to…",
        items: [
          "increase your deductions,",
          "reduce what tax you have to pay and boost your profits,",
          "Set up a business plan that will help minimise your taxes.",
        ],
      },
    ],
    closingItems: [
      "Get assistance with preparing financial statements. This will help you make informed business decisions through optimising your cash-flow and your budget projections.",
      "We can save you time by streamlining your accounting system.",
    ],
  },
  {
    id: "startup",
    icon: Rocket,
    title: "STARTING UP YOUR OWN BUSINESS",
    intro: "We are experienced in business start ups and are fully aware of the many pitfalls that befall new businesses.",
    additionalIntro: "Let us provide advice so you can make decisions that will reduce your liabilities and give your business the best chance of success.",
    listTitle: "With our practice as your partner you can discover practical resources to optimise your business with;",
    items: [
      "Better business structure.",
      "Knowing your complete tax obligations.",
      "The best timing of tax payments.",
      "Industry best record keeping practices.",
      "Cash Flow Management.",
    ],
  },
  {
    id: "other",
    icon: BookOpen,
    title: "OTHER SERVICES",
    subsections: [
      {
        title: "MYOB Training",
        items: [
          "We offer personal MYOB training on all aspects of the platform.",
          "We can provide discounts on the subscriptions and initial setups.",
        ],
      },
      {
        title: "Bookkeeping Services",
        items: [
          "Save time with our bookkeeping services. We can handle all or some of your tedious accounting tasks. This way you can spend more time focussing on running your business.",
          "We can provide complete (onsite or offsite) bookkeeping that is tailored to your needs and budget.",
        ],
      },
    ],
    liability: "Liability is limited by a scheme approved under the Professional Standards legislation",
  },
]

export function Services() {
  const [openService, setOpenService] = useState<string | null>("individual")
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="services" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-medium tracking-wider text-primary uppercase mb-4">
            Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance">
            Comprehensive Accounting Solutions
          </h2>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
              isOpen={openService === service.id}
              onToggle={() => setOpenService(openService === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ 
  service, 
  index, 
  isOpen, 
  onToggle 
}: { 
  service: typeof services[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "border border-border rounded-xl overflow-hidden bg-card transition-all duration-700 ease-out premium-card",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors duration-300"
      >
        <div className="flex items-center gap-4">
          <div className={cn(
            "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300",
            isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10"
          )}>
            <service.icon className={cn("h-6 w-6", isOpen ? "text-primary-foreground" : "text-primary")} />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground">
            {service.title}
          </h3>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-500 ease-out",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2 space-y-4 text-muted-foreground leading-relaxed">
            {service.intro && <p>{service.intro}</p>}
            {service.additionalIntro && <p>{service.additionalIntro}</p>}
            {service.listTitle && <p className="font-medium text-foreground">{service.listTitle}</p>}
            {service.items && (
              <ul className="space-y-2 pl-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {service.additionalSections?.map((section, i) => (
              <div key={i} className="space-y-2 pt-2">
                <p className="font-medium text-foreground">{section.intro}</p>
                <ul className="space-y-2 pl-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {service.closingItems?.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
            {service.subsections?.map((sub, i) => (
              <div key={i} className="space-y-2 pt-2">
                <p className="font-medium text-foreground text-lg">{sub.title}</p>
                <ul className="space-y-2 pl-4">
                  {sub.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {service.liability && (
              <p className="text-sm italic pt-4 border-t border-border mt-4">
                {service.liability}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
