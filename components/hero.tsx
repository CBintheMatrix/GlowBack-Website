"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Tablet, Smartphone, Monitor } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [videoLoading, setVideoLoading] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  // GUARANTEED VIDEO AUTOPLAY - BULLETPROOF SOLUTION
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    console.log('🚀 INITIALIZING GUARANTEED VIDEO AUTOPLAY')

    // Set video properties immediately
    video.muted = true
    video.loop = true
    video.playsInline = true
    video.controls = false

    const forcePlay = async () => {
      try {
        console.log('🎬 FORCE PLAYING VIDEO...')
        video.currentTime = 0
        await video.play()
        console.log('✅ VIDEO IS NOW PLAYING!')
        setVideoLoading(false)
        return true
      } catch (error) {
        console.log('❌ Autoplay failed:', error)
        return false
      }
    }

    // Multiple play attempts with different triggers
    const playAttempts = [
      // Immediate attempt
      () => forcePlay(),
      // After metadata loads
      () => {
        if (video.readyState >= 1) return forcePlay()
        return false
      },
      // After data loads
      () => {
        if (video.readyState >= 2) return forcePlay()
        return false
      },
      // After can play
      () => {
        if (video.readyState >= 3) return forcePlay()
        return false
      },
      // After 500ms delay
      () => new Promise(resolve => setTimeout(() => resolve(forcePlay()), 500)),
      // After 1 second delay
      () => new Promise(resolve => setTimeout(() => resolve(forcePlay()), 1000)),
      // After 2 second delay
      () => new Promise(resolve => setTimeout(() => resolve(forcePlay()), 2000))
    ]

    // Execute all play attempts
    playAttempts.forEach((attempt, index) => {
      setTimeout(async () => {
        const success = await attempt()
        if (success) {
          console.log(`✅ Video started on attempt ${index + 1}`)
        }
      }, index * 100)
    })

    // Event listeners for additional attempts
    const handleCanPlay = () => {
      console.log('📹 Video can play - attempting autoplay')
      forcePlay()
    }

    const handleLoadedData = () => {
      console.log('📹 Video data loaded - attempting autoplay')
      forcePlay()
    }

    const handleError = (e: any) => {
      console.error('❌ Video error:', e)
      setVideoError(true)
      setVideoLoading(false)
    }

    const handleLoadStart = () => {
      console.log('📹 Video loading started')
      setVideoLoading(true)
      setVideoError(false)
    }

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)
    video.addEventListener('loadstart', handleLoadStart)

    // Force load
    video.load()

    // User interaction fallback
    const handleUserInteraction = async () => {
      console.log('👆 User interaction detected - playing video')
      await forcePlay()
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('scroll', handleUserInteraction)
      document.removeEventListener('mousemove', handleUserInteraction)
    }

    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('touchstart', handleUserInteraction)
    document.addEventListener('keydown', handleUserInteraction)
    document.addEventListener('scroll', handleUserInteraction)
    document.addEventListener('mousemove', handleUserInteraction)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadstart', handleLoadStart)
    }
  }, [])

  return (
    <>
      {/* Video Hero Section - GLOWBACK text and "Seamless Operations. Exceptional Stays." */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background - DIRECT APPROACH */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
            controls={false}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }}
          >
            <source src="/videos/hero-video-001.mp4" type="video/mp4" />
            <source src="/videos/hero video 001.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Loading indicator */}
          {videoLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mx-auto mb-4"></div>
                <p className="text-lg">Loading video...</p>
              </div>
            </div>
          )}
          
          {/* Error state */}
          {videoError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <div className="text-white text-center">
                <p className="text-lg mb-2">Video failed to load</p>
                <button 
                  onClick={() => {
                    setVideoError(false)
                    setVideoLoading(true)
                    videoRef.current?.load()
                  }}
                  className="px-4 py-2 bg-emerald-400 text-black rounded hover:bg-emerald-300 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* GUARANTEED MANUAL PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={async () => {
                console.log('🎯 MANUAL PLAY BUTTON CLICKED')
                const video = videoRef.current
                if (video) {
                  try {
                    video.muted = true
                    video.currentTime = 0
                    await video.play()
                    console.log('✅ MANUAL PLAY SUCCESS!')
                    setVideoLoading(false)
                  } catch (error) {
                    console.error('❌ Manual play failed:', error)
                  }
                }
              }}
              className="bg-emerald-500/80 hover:bg-emerald-400/90 text-white rounded-full p-6 transition-all duration-300 hover:scale-110 pointer-events-auto shadow-2xl"
              aria-label="Play video"
            >
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Fallback gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <div className="mb-8 animate-in fade-in-0 duration-1000 delay-200 relative">
            <Image
              src="/GlowBack Logo.png"
              alt="Glowback Logo"
              width={120}
              height={120}
              className="mx-auto hover:scale-110 hover:rotate-6 transition-all duration-500 hover:drop-shadow-2xl hover:brightness-110 animate-pulse"
            />
          </div>

          <div className="space-y-6">
            {/* GLOWBACK - Green */}
            <div className="space-y-4">
              <h1 className="text-6xl font-black tracking-tight text-emerald-400 sm:text-7xl md:text-8xl lg:text-9xl animate-in fade-in-0 duration-1000 drop-shadow-2xl">
                GLOWBACK
              </h1>
              <div className="h-1 w-32 bg-emerald-400 mx-auto animate-in slide-in-from-left-4 duration-1000 delay-300"></div>
            </div>

            {/* Seamless Operations. Exceptional Stays. - Black Text */}
            <div className="space-y-2">
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                  Seamless Operations.
                </h2>
              </div>
              <div
                className={`transition-all duration-1000 delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                  Exceptional Stays.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - All other content below the video */}
      <section className="container flex flex-col items-center justify-center space-y-12 py-24 text-center md:py-32 relative max-w-screen-2xl">
        <div className="space-y-8 relative z-10">
          {/* Rotating Messages */}
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

          {/* Message Dots */}
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

        {/* Feature Icons */}
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

        {/* Action Buttons */}
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
    </>
  )
}