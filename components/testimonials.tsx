"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    content: "Deborah Hill has provided accounting services for Office Tech Services Pty Ltd for the past three years, including all tax and compliance requirements. Her experience and management advice has been greatly appreciated and valued. I couldn't be more pleased with the efficient and constructive way that Deborah has looked after our interests, particularly some complex issues involving government agencies. Highly recommended.",
    author: "Graham",
    role: "Office Tech Services Pty Ltd",
  },
  {
    content: "My wife and I have used a number of Tax Agents over the years and generally have found them businesslike and it can sometimes feel like you are a number to them – not so with Deborah. Deborah is a very nice person, interested in what we want and why and generally a pleasure to do business with. We have used Deborah to do our Tax Accounting for over 10 years now and will continue to do so. Her knowledge is up to date, she has great advice and ensures we receive what we are entitled to.",
    author: "Paul Sawkins",
  },
  {
    content: "Deborah Hill has been our accountant for a number of years now. We have always found her service and responsiveness to be above expectations. Whilst our family accounting and tax situation would be on the simpler end, Deborah has managed to make the annual tax return a far less 'taxing' process. I would recommend Deborah based on the great experience we have had over a number of years. Thanks again Deborah!",
    author: "Andrew Britt",
    role: "Lane Cove",
  },
  {
    content: "My name is Claudio Giacomobono of Belfield NSW. I have been a very satisfied customer of Deborah Hill for 3 Years now. I find her Honesty, Integrity and Professionalism truly refreshing and i do travel a fair distance to see her coming from Belfield but it is worthwhile because of her Prompt service and Industry Knowledge. Once again i would highly Recommend Deborah for any accounting matters that you might have.",
    author: "Claudio",
    role: "Belfield NSW",
  },
  {
    content: "Now that I am semi retired I would just like to say thank you for taking care of the accounting for Mask Productions and also our personal accounts over the years. You have done a wonderful job making sure that we legally paid as little tax as possible also your financial advise has been invaluable. I would also like to thank you for suggesting the best people to take care of our Superannuation and both Sue and I wish you great success with any future projects.",
    author: "Peter Kaye",
    role: "Mask Productions",
  },
  {
    content: "We have been working with Deborah Hill & Co Chartered Accountants for almost 5 years and have been very happy and satisfied with the Accounting and advising services they provide to us. I find Deborah Hill very competent, prompt and efficient. Her advices regarding accounting, BAS, tax and other financial matters have been invaluable not only for our business but for our personal financial and accounting matters as well. I would like to highly recommend Deborah Hill and her staff as a first class Accounting Company.",
    author: "Elly Tomova",
    role: "General Manager, RITM Australia Pty Ltd",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [isAnimating, setIsAnimating] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)
  const isTitleVisible = useScrollAnimation(titleRef)

  const goToSlide = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating])

  const next = useCallback(() => {
    setIsAutoPlaying(false)
    goToSlide((current + 1) % testimonials.length, "right")
  }, [current, goToSlide])

  const prev = useCallback(() => {
    setIsAutoPlaying(false)
    goToSlide((current - 1 + testimonials.length) % testimonials.length, "left")
  }, [current, goToSlide])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      goToSlide((current + 1) % testimonials.length, "right")
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, current, goToSlide])

  const currentTestimonial = testimonials[current]

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-medium tracking-wider text-primary uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Decorative quote */}
          <Quote className="absolute -top-6 left-0 h-24 w-24 text-primary/5 -z-10" />
          <Quote className="absolute -bottom-6 right-0 h-24 w-24 text-primary/5 -z-10 rotate-180" />

          {/* Main testimonial card */}
          <div className="relative bg-card rounded-2xl border border-border shadow-lg p-8 md:p-12 lg:p-16">
            {/* Content wrapper with animation */}
            <div 
              key={current}
              className={cn(
                "transition-all duration-500 ease-out",
                direction === "right" 
                  ? "animate-in fade-in slide-in-from-right-8" 
                  : "animate-in fade-in slide-in-from-left-8"
              )}
            >
              {/* Quote mark */}
              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              
              {/* Testimonial text */}
              <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed font-light">
                {currentTestimonial.content}
              </blockquote>
              
              {/* Author info */}
              <footer className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-lg font-medium text-primary">
                      {currentTestimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-medium text-foreground">
                      {currentTestimonial.author}
                    </p>
                    {currentTestimonial.role && (
                      <p className="text-sm text-muted-foreground">
                        {currentTestimonial.role}
                      </p>
                    )}
                  </div>
                </div>
              </footer>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={isAnimating}
              className="rounded-full h-12 w-12 border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            
            {/* Progress dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index !== current) {
                      setIsAutoPlaying(false)
                      goToSlide(index, index > current ? "right" : "left")
                    }
                  }}
                  disabled={isAnimating}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    index === current 
                      ? "bg-primary w-8" 
                      : "bg-border hover:bg-primary/40 w-2"
                  )}
                >
                  <span className="sr-only">Go to testimonial {index + 1}</span>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={isAnimating}
              className="rounded-full h-12 w-12 border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          {/* Counter */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {current + 1} of {testimonials.length}
          </p>
        </div>

        <p className="text-sm text-muted-foreground italic text-center mt-12">
          Liability is limited by a scheme approved under the Professional Standards legislation
        </p>
      </div>
    </section>
  )
}
