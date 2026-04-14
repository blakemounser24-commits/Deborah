"use client"

import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Fees() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: individualRef, isVisible: individualVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: businessRef, isVisible: businessVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: additionalRef, isVisible: additionalVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="fees" className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-medium tracking-wider text-primary uppercase mb-4">
            Fees
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance">
            Our Fees for Income Tax Returns
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            At Deborah Hill & Co Chartered Accountants we always work with our clients to ensure they are provided the right personalised service.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We have built our reputation in providing year-round tax analysis & planning.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our ability to closely relate to our clients, results in many successful long-term relationships
          </p>
        </div>

        {/* Individual Tax Returns */}
        <div ref={individualRef} className="mb-20">
          <h3 className={cn(
            "font-serif text-2xl font-medium text-foreground text-center mb-10 transition-all duration-700",
            individualVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            INDIVIDUAL TAX RETURNS
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic */}
            <Card className={cn(
              "premium-card transition-all duration-700",
              individualVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: "100ms" }}>
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-serif text-xl">BASIC TAX RETURN</CardTitle>
                <CardDescription className="text-3xl font-serif font-medium text-foreground mt-4">
                  $280 <span className="text-base font-normal text-muted-foreground">Plus GST</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Includes</p>
                  <ul className="space-y-3">
                    {[
                      "Salary / wage employees.",
                      "Work related deductions (up to 5).",
                      "Donations.",
                      "3 phone/email queries.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Excludes</p>
                  <ul className="space-y-3">
                    {[
                      "Any detailed calculations for deductions.",
                      "Face to face meetings or phone conferences.",
                      "Investment, Business or Capital Gains schedules.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="h-3 w-3 text-destructive" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Detailed */}
            <Card className={cn(
              "premium-card border-primary/30 relative transition-all duration-700",
              individualVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: "200ms" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full">
                Most Popular
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="font-serif text-xl">DETAILED TAX RETURN</CardTitle>
                <CardDescription className="text-3xl font-serif font-medium text-foreground mt-4">
                  $420 <span className="text-base font-normal text-muted-foreground">Plus GST</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Includes</p>
                  <ul className="space-y-3">
                    {[
                      "Half hour** face to face meeting or phone/video conference.",
                      "Review of deductions(up to 7).",
                      "5 phone/email queries.",
                      "Trust income statements(up to 2).",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Excludes</p>
                  <ul className="space-y-3">
                    {[
                      "Any detailed calculations for deductions.",
                      "Investment, Business or Capital Gains schedules.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="h-3 w-3 text-destructive" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-muted-foreground italic pt-4 border-t border-border">
                  **time over the 1/2 hour meeting is charged at $140 per 1/2 hour.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic max-w-2xl mx-auto">
            Please Note: For all Tax Returns you will be required to complete our tax questionnaire. This will help prompt you for all the details we need.
          </p>
        </div>

        {/* Business Services */}
        <div ref={businessRef} className="mb-20">
          <div className={cn(
            "text-center mb-10 transition-all duration-700",
            businessVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
              BUSINESS SERVICES
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The relationships we develop with our business clients is always based on a personalised, one on one approach. This provides each company with a tailored service specific to their needs.
            </p>
            <p className="text-lg font-medium text-foreground mt-6">
              We base our fees on a rate of <span className="text-primary">$295/hr</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "FINANCIAL STATEMENTS",
                description: "We provide end of year and quarterly accounts and in some cases monthly accounts.",
                price: "From $895 pa",
                note: "depending on the quality of information provided and the complexity of the business.",
              },
              {
                title: "INCOME TAX RETURNS",
                description: "Company ITR's are a flat rate.",
                price: "$295.00 ea",
              },
              {
                title: "BAS & IAS",
                description: "Quarterly BAS returns are provided at a flat fee.",
                price: "$245 per return",
                note: "If accounts are to be prepared prior to the completion of the BAS return, additional fees will apply.",
              },
              {
                title: "ASIC Returns",
                description: "ASIC complete a yearly review of every Australian registered company. A review statement and solvency certificate is required every year. We can manage this process.",
                price: "$165 pa",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={cn(
                  "premium-card transition-all duration-700",
                  businessVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 100 + 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <p className="text-xl font-serif font-medium text-primary">{item.price}</p>
                  {item.note && (
                    <p className="text-xs text-muted-foreground mt-2 italic">{item.note}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Charges */}
        <div
          ref={additionalRef}
          className={cn(
            "bg-card rounded-2xl p-8 lg:p-10 border border-border transition-all duration-1000",
            additionalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h3 className="font-serif text-xl font-medium text-foreground mb-4">
            ADDITIONAL CHARGES
          </h3>
          <p className="text-muted-foreground mb-4">
            For works that are beyond the standard fees some of the additional charges are listed below.
          </p>
          <p className="text-muted-foreground mb-6">
            These are maximum charges and in most cases can be reduced when spreadsheet summaries are provided by you.
          </p>
          <p className="text-sm text-muted-foreground italic mb-8 p-4 bg-muted/50 rounded-lg">
            Remember! we are NOT cost effective for you if we are summarising your expenses and handling your receipts. All we need from you is an accurate summary of expenses.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                PER ITEM CHARGES
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Work Related Deductions – (in excess of above limits) may be charged at <span className="text-foreground font-medium">$25.00 per item</span> thereafter.</li>
                <li>Motor Vehicle Expenses schedule – If detailed calcs are required; <span className="text-foreground font-medium">$65.00</span></li>
                <li>Rental Property – up to <span className="text-foreground font-medium">$110</span> for each rental property</li>
                <li>Depreciation Schedules if required – up to <span className="text-foreground font-medium">$55 per page</span></li>
                <li>Business Schedules – <span className="text-foreground font-medium">$110 per schedule</span></li>
                <li>Multiple Dividend schedules – 5 or more statements; <span className="text-foreground font-medium">$65</span>, 10 or more statements <span className="text-foreground font-medium">$120</span>.</li>
                <li>Multiple Trust Distribution statements – 2 or more; <span className="text-foreground font-medium">$65</span>, each after <span className="text-foreground font-medium">$30 each</span>.</li>
                <li>Capital Gains Tax Schedules – <span className="text-foreground font-medium">$30 per schedule</span></li>
                <li>Capital Gains Tax calculations – from information provided – Starting from <span className="text-foreground font-medium">$90</span>.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                HOURLY RATES
              </h4>
              <p className="text-sm text-muted-foreground mb-4">For other works that can not easily be predicted the following rates will apply;</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Accountants time = <span className="text-foreground font-medium">$295.00 / Hr.</span></li>
                <li>Book Keeper / Tax Assistant = <span className="text-foreground font-medium">$85 to $145 /Hr.</span></li>
              </ul>

              <div className="mt-8 p-5 bg-muted/50 rounded-xl border border-border">
                <h4 className="font-medium text-foreground mb-3">A NOTE ON QUOTED RATES</h4>
                <p className="text-sm text-muted-foreground">
                  We have endeavored to provide a guide of our fees here, but remember it is only a guide and as such the actual cost may vary due to unforeseeable problems. These may include delays due to third parties, additional tax complexities or deficiencies in documents provided to us.
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  We will advise you of any significant change to the standard charges prior to performing the additional work. We will not proceed without your approval.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground italic mt-10 pt-6 border-t border-border">
            Liability is limited by a scheme approved under the Professional Standards legislation
          </p>
        </div>
      </div>
    </section>
  )
}
