"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Tablet, Smartphone, Monitor } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const messages = [
    "Transform your hotel into an intelligent service ecosystem. Connect guests, staff and managers with real-time communication, smart inventory tracking and seamless operations.",
    "Eliminate language barriers with instant multilingual support across 100+ languages. Every guest feels heard and understood, regardless of their native tongue.",
    "Generate additional revenue through curated local partnerships. Hand-pick trusted businesses and earn commissions on every booking made through your guest tablets.",
    "Streamline housekeeping operations with real-time room status updates, automated task assignments and predictive maintenance scheduling.",
    "Enhance guest satisfaction with personalized service requests, instant staff communication and seamless check-in-to-check-out experiences.",
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-12 py-24 text-center md:py-32 relative overflow-hidden">
      <div className="mb-8 animate-in fade-in-0 duration-1000 delay-200 relative">
        <Image
          src="/glowback-logo.svg"
          alt="Glowback Logo"
          width={120}
          height={120}
          className="mx-auto hover:scale-110 hover:rotate-6 transition-all duration-500 hover:drop-shadow-2xl hover:brightness-110 animate-pulse"
        />
      </div>

      <div className="space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-6xl font-black tracking-tight text-primary sm:text-7xl md:text-8xl lg:text-9xl animate-in fade-in-0 duration-1000">
            GLOWBACK
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto animate-in slide-in-from-left-4 duration-1000 delay-300"></div>
        </div>

        <div className="space-y-2">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Seamless Operations.
            </h2>
          </div>
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Exceptional Stays.
            </h2>
          </div>
        </div>

        <div className="relative h-32 flex items-center justify-center">
          <p
            key={currentMessageIndex}
            className={`mx-auto max-w-[48rem] text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-8 transition-all duration-1000 delay-1000 animate-in fade-in-0 slide-in-from-bottom-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {messages[currentMessageIndex]}
          </p>
        </div>

        <div className="flex justify-center space-x-2">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                index === currentMessageIndex ? "bg-primary scale-125" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className={`flex items-center justify-center gap-12 py-8 transition-all duration-1000 delay-1200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center space-y-3 group">
          <div className="rounded-full bg-card p-4 shadow-lg group-hover:shadow-xl transition-shadow">
            <Tablet className="h-12 w-12 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">Guest Tablet</span>
        </div>
        <div className="flex flex-col items-center space-y-3 group">
          <div className="rounded-full bg-card p-4 shadow-lg group-hover:shadow-xl transition-shadow">
            <Smartphone className="h-12 w-12 text-accent" />
          </div>
          <span className="text-sm font-medium text-foreground">Staff App</span>
        </div>
        <div className="flex flex-col items-center space-y-3 group">
          <div className="rounded-full bg-card p-4 shadow-lg group-hover:shadow-xl transition-shadow">
            <Monitor className="h-12 w-12 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">Manager Dashboard</span>
        </div>
      </div>

      <div
        className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Button size="lg" className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all">
          Apply for Pilot Program
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg px-8 py-6 font-semibold border-2 hover:bg-muted transition-all bg-transparent"
        >
          Learn More
        </Button>
      </div>
    </section>
  )
}
