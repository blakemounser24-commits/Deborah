"use client"

import { CreditCard, Building2, FileText, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Credit Cards Online",
    description: "Simply click the button below and then enter your invoice number.",
    action: {
      label: "Pay Online",
      href: "https://pay.b2bpay.com.au/MYOB/dhillco",
    },
    preferred: true,
  },
  {
    icon: Building2,
    title: "Direct Deposits",
    description: "Transfer directly to our bank account.",
    details: "BSB: 732 085 | A/C: 603495",
  },
  {
    icon: FileText,
    title: "Cheques",
    description: "Cheques can be made out to Deborah Hill",
  },
]

const merchantFees = [
  { type: "Visa & M/C", fee: "1.41%" },
  { type: "Premium Visa & M/C", fee: "1.81%" },
  { type: "Amex", fee: "2.5%" },
  { type: "International Cards", fee: "3.1%" },
  { type: "Diners Club", fee: "2.75%" },
]

export function Pay() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: notesRef, isVisible: notesVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="pay" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-medium tracking-wider text-primary uppercase mb-4">
            Pay An Invoice
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance">
            Ways to Pay
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {paymentMethods.map((method, i) => (
            <Card 
              key={method.title} 
              className={cn(
                "premium-card text-center transition-all duration-700",
                method.preferred && "border-primary/30 relative",
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {method.preferred && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                  Preferred Method
                </div>
              )}
              <CardHeader className={cn("pb-4", method.preferred && "pt-8")}>
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <method.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-serif text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{method.description}</p>
                {method.details && (
                  <p className="text-sm font-medium text-foreground bg-muted p-3 rounded-lg font-mono">
                    {method.details}
                  </p>
                )}
                {method.action && (
                  <Button asChild className="w-full group">
                    <Link href={method.action.href} target="_blank" rel="noopener noreferrer">
                      {method.action.label}
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notes */}
        <div 
          ref={notesRef}
          className={cn(
            "mt-16 max-w-3xl mx-auto transition-all duration-1000",
            notesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-medium text-foreground mb-4">NOTES</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Credit cards online are our preferred payment method. We can lodge you quicker as we get immediate confirmation via MYOB.
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                You can earn additional QANTAS Frequent Flyer points when paying online.
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>
                  {"If the above hyperlink doesn't work then enter "}
                  <Link 
                    href="https://pay.b2bpay.com.au/MYOB/dhillco" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://pay.b2bpay.com.au/MYOB/dhillco
                  </Link>
                  {" in your browser."}
                </span>
              </li>
            </ul>
          </div>

          {/* Merchant Fees */}
          <div className="mt-8 bg-muted/50 rounded-xl p-6 border border-border">
            <h3 className="font-medium text-foreground mb-4">Merchant Fees</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {merchantFees.map((fee) => (
                <div key={fee.type} className="text-sm">
                  <span className="text-muted-foreground">{fee.type}:</span>{" "}
                  <span className="font-medium text-foreground">{fee.fee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
