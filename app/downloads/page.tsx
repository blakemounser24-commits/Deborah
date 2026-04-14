"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { FileText, Download, ArrowLeft, FileSpreadsheet, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const questionnaireDocs = [
  {
    name: "Download the QUESTIONNAIRE 2025",
    href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/ETLu2C87vo1BkhZw9p2_F-4B90hdY9tY_sxX8w_z5bxR_Q?resid=FD4D7ED9DDEC57AA!s2fd8ee32be3b418d921670f69dbf17ee&ithint=file%2Cxlsx&e=bYS80f&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy9mZDRkN2VkOWRkZWM1N2FhL0VUTHUyQzg3dm8xQmtoWnc5cDJfRi00QjkwaGRZOXRZX3N4WDh3X3o1YnhSX1E_ZT1iWVM4MGY",
    icon: FileText,
  },
  {
    name: "Download the TERMS OF ENGAGEMENT.pdf",
    href: "https://onedrive.live.com/?id=FD4D7ED9DDEC57AA%211416&resid=FD4D7ED9DDEC57AA%211416&ithint=file%2Cpdf&e=pcdV18&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvcyFBcXBYN04zWmZrMzlpd2djckZsVUY0MGxvLXE2P2U9cGNkVjE4&cid=fd4d7ed9ddec57aa&v=validatepermission",
    icon: FileText,
  },
]

const worksheets = [
  { name: "Rental Income & Expenses", href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/s!AqpX7N3Zfk39inH5D0IjmWfQVBDM?resid=FD4D7ED9DDEC57AA!1393&ithint=file%2Cxlsx&e=ZxebZx&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBcXBYN04zWmZrMzlpbkg1RDBJam1XZlFWQkRNP2U9WnhlYlp4", icon: FileSpreadsheet, isGoogleSheets: true },
  { name: "Business Income & Expenses", href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/s!AqpX7N3Zfk39lJxIEOY4kt_SsWMBGQ?resid=FD4D7ED9DDEC57AA!331336&ithint=file%2Cxlsx&e=HZlcTX&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBcXBYN04zWmZrMzlsSnhJRU9ZNGt0X1NzV01CR1E_ZT1IWmxjVFg", icon: FileSpreadsheet },
  { name: "Interest Received Worksheet", href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/s!AqpX7N3Zfk39in91QgRXH3T-PvGh?resid=FD4D7ED9DDEC57AA!1407&ithint=file%2Cxlsx&e=oF10CS&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBcXBYN04zWmZrMzlpbjkxUWdSWEgzVC1QdkdoP2U9b0YxMENT", icon: FileSpreadsheet },
  { name: "Dividends Received Worksheet", href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/s!AqpX7N3Zfk39iwBGJhvdy-bzsOhI?resid=FD4D7ED9DDEC57AA!1408&ithint=file%2Cxlsx&e=NvVjoB&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBcXBYN04zWmZrMzlpd0JHSmh2ZHktYnpzT2hJP2U9TnZWam9C", icon: FileSpreadsheet },
  { name: "ESS Summary Worksheet", href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/s!AqpX7N3Zfk39inNEnP0FydVph763?resid=FD4D7ED9DDEC57AA!1395&ithint=file%2Cxlsx&e=weQo2F&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBcXBYN04zWmZrMzlpbk5FblAwRnlkVnBoNzYzP2U9d2VRbzJG", icon: FileSpreadsheet },
  { name: "Capital Gains for Shares", href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/s!AqpX7N3Zfk39im6FzeRbbt4KQA3h?resid=FD4D7ED9DDEC57AA!1390&ithint=file%2Cxlsx&e=NxcRi4&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBcXBYN04zWmZrMzlpbTZGemVSYmJ0NEtRQTNoP2U9TnhjUmk0", icon: FileSpreadsheet },
  { name: "Capital Gains on Property", href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/s!AqpX7N3Zfk39inLldpd-YEmvjhdG?resid=FD4D7ED9DDEC57AA!1394&ithint=file%2Cxlsx&e=pIcUos&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBcXBYN04zWmZrMzlpbkxsZHBkLVlFbXZqaGRHP2U9cEljVW9z", icon: FileSpreadsheet },
  { name: "Tax Deductions Worksheet", href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/s!AqpX7N3Zfk39inDRgf2SoiqDA-BE?resid=FD4D7ED9DDEC57AA!1392&ithint=file%2Cxlsx&e=3t3Q1Q&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBcXBYN04zWmZrMzlpbkRSZ2YyU29pcURBLUJFP2U9M3QzUTFR", icon: FileSpreadsheet },
  { name: "Motor Vehicle Expenses", href: "https://onedrive.live.com/:x:/g/personal/FD4D7ED9DDEC57AA/s!AqpX7N3Zfk39inebJCYMAjGcIMQq?resid=FD4D7ED9DDEC57AA!1399&ithint=file%2Cxlsx&e=tBZ59f&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBcXBYN04zWmZrMzlpbmViSkNZTUFqR2NJTVFxP2U9dEJaNTlm", icon: FileSpreadsheet },
]

export default function DownloadsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const questionnaireRef = useRef<HTMLDivElement>(null)
  const worksheetsRef = useRef<HTMLDivElement>(null)

  const isHeroVisible = useScrollAnimation(heroRef)
  const isQuestionnaireVisible = useScrollAnimation(questionnaireRef)
  const isWorksheetsVisible = useScrollAnimation(worksheetsRef)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-STACKED2-O3rpyz6ZU9e8GwJcfl2Gq1pOee3s4B.jpg"
                alt="Deborah Hill & Co Chartered Accountants"
                width={180}
                height={80}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div
          ref={heroRef}
          className={cn(
            "mx-auto max-w-7xl px-6 lg:px-8 text-center transition-all duration-700",
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-medium tracking-wider text-primary uppercase mb-4">
            Resources
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
            Downloads
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download the Questionnaire and various worksheets here.
          </p>
        </div>
      </section>

      {/* Questionnaire & Terms Section */}
      <section className="py-20">
        <div
          ref={questionnaireRef}
          className={cn(
            "mx-auto max-w-4xl px-6 lg:px-8 transition-all duration-700",
            isQuestionnaireVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-6">
              Questionnaire & Terms of Engagement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you wish to get started with your tax today simply download the Questionnaire and Terms of Engagement from the links below. Fill out the Questionnaire and sign the T of E, then send them back to us via{" "}
              <a href="mailto:mail@deborahhill.com.au" className="text-primary hover:underline">
                mail@deborahhill.com.au
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            {questionnaireDocs.map((doc, index) => (
              <div
                key={doc.name}
                className={cn(
                  "transition-all duration-500",
                  isQuestionnaireVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <doc.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {doc.name}
                      </span>
                      <Download className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {doc.note && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {doc.note}
                      </p>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worksheets Section */}
      <section className="py-20 bg-muted/30">
        <div
          ref={worksheetsRef}
          className={cn(
            "mx-auto max-w-4xl px-6 lg:px-8 transition-all duration-700",
            isWorksheetsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-6">
              Worksheets
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The worksheets below can be used in addition to the Questionnaire if required. If you are unsure which ones you may need, contact us (via{" "}
              <a href="tel:0294204660" className="text-primary hover:underline inline-flex items-center gap-1">
                <Phone className="h-3 w-3" />
                02 9420 4660
              </a>{" "}
              or{" "}
              <a href="mailto:mail@deborahhill.com.au" className="text-primary hover:underline inline-flex items-center gap-1">
                <Mail className="h-3 w-3" />
                mail@deborahhill.com.au
              </a>
              ) and we will be happy to advise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {worksheets.map((worksheet, index) => (
              <div
                key={worksheet.name}
                className={cn(
                  "transition-all duration-500",
                  isWorksheetsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${(index + 1) * 75}ms` }}
              >
                <a
                  href={worksheet.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <worksheet.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                      {worksheet.name}
                    </span>
                    {worksheet.isGoogleSheets && (
                      <span className="ml-2 text-xs text-muted-foreground">(Google Sheets)</span>
                    )}
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              </div>
            ))}
          </div>

          {/* Note */}
          <div
            className={cn(
              "mt-10 p-5 bg-card rounded-xl border border-border transition-all duration-500",
              isWorksheetsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "800ms" }}
          >
            <p className="text-sm text-muted-foreground text-center">
              Please contact us if you prefer to use pen & paper and we can send you any worksheet as a PDF version.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-STACKED2-O3rpyz6ZU9e8GwJcfl2Gq1pOee3s4B.jpg"
              alt="Deborah Hill & Co Chartered Accountants"
              width={120}
              height={52}
              className="h-10 w-auto object-contain mx-auto"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Deborah Hill & Co. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
