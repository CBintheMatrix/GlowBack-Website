"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-video-001.mp4"
      >
        <source src="/hero-video-001.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15 md:bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center flex flex-col items-center justify-center h-full max-w-5xl md:max-w-6xl mx-auto px-4">
        <div className="mb-8 animate-in fade-in-0 duration-1000 delay-200 relative">
          <Image
            src="/GlowBack Logo.png"
            alt="Glowback Logo"
            width={120}
            height={120}
            className="mx-auto hover:scale-110 hover:rotate-6 transition-all duration-500 hover:drop-shadow-2xl hover:brightness-110"
            style={{ animation: 'pulse 4s ease-in-out infinite' }}
          />
        </div>

        <div className="space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white text-center">
            Seamless Hotel Operations. Exceptional Guest Stays.
          </h1>

          {/* Subline */}
          <p className="mt-4 text-lg md:text-xl text-white/90 text-center">
            Glowback connects guests, staff and managers into one intelligent system. Faster service, happier stays and stronger revenue.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <Link
              href="/pilot"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-10 px-6 font-semibold transition-all duration-300 flex items-center justify-center"
            >
              Apply for Pilot Program
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
