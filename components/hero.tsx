"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Tablet, Smartphone, Monitor } from "lucide-react"
import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const nextVideoRef = useRef<HTMLVideoElement>(null)
  const currentIndexRef = useRef(0)

  const heroVideos = [
    "https://glowback.io/hero-video-001.mp4?v=2025",
    "https://glowback.io/hero-video-002.mp4?v=2025", 
    "https://glowback.io/hero-video-003.mp4?v=2025"
  ]

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


  // Video cycling and autoplay
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    console.log(`🎬 Loading video ${currentVideoIndex}: ${heroVideos[currentVideoIndex]}`)

    let hasPlayed = false

    const playVideo = async () => {
      if (hasPlayed) return
      hasPlayed = true
      
      try {
        video.currentTime = 0
        video.muted = true
        await video.play()
        console.log(`✅ Video ${currentVideoIndex} is now playing from start!`)
      } catch (error) {
        console.log(`❌ Video ${currentVideoIndex} autoplay failed:`, error)
        hasPlayed = false
      }
    }

    const handleVideoEnd = () => {
      console.log(`🏁 Video ${currentVideoIndex} ended, cycling to next`)
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length)
    }

    const handleError = (e) => {
      console.error(`❌ Video ${currentVideoIndex} error:`, e)
      hasPlayed = false
    }

    video.load()
    video.addEventListener('canplay', playVideo)
    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', playVideo)
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('error', handleError)
    }
  }, [currentVideoIndex, heroVideos.length])

  // Video cycling timer (every 10 seconds)
  useEffect(() => {
    console.log('🔄 Setting up video cycling timer')
    
    const interval = setInterval(() => {
      console.log('⏰ Timer triggered - checking for transition')
      
      if (isTransitioning) {
        console.log('⏸️ Already transitioning, skipping')
        return
      }
      
      const currentVideo = videoRef.current
      const nextVideo = nextVideoRef.current
      if (!currentVideo || !nextVideo) {
        console.log('❌ Video refs not available')
        return
      }

      setIsTransitioning(true)
      const currentIndex = currentIndexRef.current
      const nextIndex = (currentIndex + 1) % heroVideos.length
      
      console.log(`🎬 Crossfading from ${currentIndex} to ${nextIndex} (total videos: ${heroVideos.length})`)

      // Load next video
      nextVideo.src = heroVideos[nextIndex]
      nextVideo.load()

      // Wait for next video to be ready
      const handleCanPlay = () => {
        console.log('📹 Next video ready, starting fade transition')
        
        // Fade out current video
        currentVideo.style.transition = 'opacity 1s ease-in-out'
        currentVideo.style.opacity = '0'
        
        // After fade out, switch to next video
        setTimeout(() => {
          console.log('✅ Fade complete, switching to next video')
          
          // Update the main video source
          currentVideo.src = heroVideos[nextIndex]
          currentVideo.load()
          currentVideo.play()
          
          // Update state
          setCurrentVideoIndex(nextIndex)
          currentIndexRef.current = nextIndex
          
          // Fade in the new video
          currentVideo.style.opacity = '1'
          currentVideo.style.transition = ''
          
          // Clean up next video
          nextVideo.src = ''
          nextVideo.load()
          
          setIsTransitioning(false)
        }, 1000) // Wait for fade out to complete
      }

      nextVideo.addEventListener('canplay', handleCanPlay, { once: true })
    }, 10000) // Change video every 10 seconds

    return () => {
      console.log('🧹 Cleaning up video cycling timer')
      clearInterval(interval)
    }
  }, []) // Empty dependency array to prevent restarting

  return (
    <>
      {/* Video Hero Section - GLOWBACK text and "Seamless Operations. Exceptional Stays." */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Current Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }}
        >
          <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Next Video for Crossfade */}
        <video
          ref={nextVideoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          muted
          playsInline
          loop
          preload="auto"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: 0
          }}
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-full">
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

          <div className="space-y-8">
            {/* GLOWBACK - Green */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-emerald-500 md:text-6xl animate-in fade-in-0 duration-1000 drop-shadow-lg">
                GLOWBACK
              </h1>
              <div className="h-1 w-32 bg-emerald-400 mx-auto animate-in slide-in-from-left-4 duration-1000 delay-300"></div>
            </div>

            {/* Seamless Operations. Exceptional Stays. - White Text for better contrast */}
            <div className="space-y-4 mt-8">
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h2 className="text-lg font-medium tracking-tight text-gray-100/90 md:text-xl drop-shadow-lg">
                  Seamless Operations.
                </h2>
              </div>
              <div
                className={`transition-all duration-1000 delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h2 className="text-lg font-medium tracking-tight text-gray-100/90 md:text-xl drop-shadow-lg">
                  Exceptional Stays.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - All other content below the video */}
      <section className="py-20 md:py-28 bg-white relative">
        {/* Soft radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,.08),transparent_60%)]"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center">
            {/* Impact Statement for Hotel Owners */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-700 mt-8 mb-10 text-center">
                Transform Your Hotel Operations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/90 backdrop-blur p-8 text-center shadow-[0_6px_24px_-8px_rgba(16,24,40,.15)] ring-1 ring-black/5 transition hover:shadow-[0_10px_32px_-8px_rgba(16,24,40,.2)]">
                  <div className="text-2xl font-semibold text-emerald-600 mb-2">Real-Time</div>
                  <div className="text-base font-medium text-emerald-700 mb-3">Instant Communication</div>
                  <div className="text-sm text-slate-600 leading-6">Staff receive guest requests instantly with smart routing and real-time notifications</div>
                  
                  {/* Icons row */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="h-12 w-12 rounded-xl bg-white shadow ring-1 ring-black/5 grid place-items-center">
                      <Tablet className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-white shadow ring-1 ring-black/5 grid place-items-center">
                      <Smartphone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-white shadow ring-1 ring-black/5 grid place-items-center">
                      <Monitor className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  
                  {/* CTA group */}
                  <div className="mt-10 flex items-center justify-center gap-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 px-6 font-semibold">
                      Learn More
                    </Button>
                    <Button variant="outline" className="bg-white hover:bg-slate-50 ring-1 ring-slate-200 text-slate-800 rounded-xl h-12 px-6">
                      Contact Us
                    </Button>
                  </div>
                </div>
                
                <div className="rounded-2xl bg-white/90 backdrop-blur p-8 text-center shadow-[0_6px_24px_-8px_rgba(16,24,40,.15)] ring-1 ring-black/5 transition hover:shadow-[0_10px_32px_-8px_rgba(16,24,40,.2)]">
                  <div className="text-2xl font-semibold text-emerald-600 mb-2">100+</div>
                  <div className="text-base font-medium text-emerald-700 mb-3">Languages Supported</div>
                  <div className="text-sm text-slate-600 leading-6">Eliminate language barriers with instant multilingual support for every guest</div>
                  
                  {/* Icons row */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="h-12 w-12 rounded-xl bg-white shadow ring-1 ring-black/5 grid place-items-center">
                      <Tablet className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-white shadow ring-1 ring-black/5 grid place-items-center">
                      <Smartphone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-white shadow ring-1 ring-black/5 grid place-items-center">
                      <Monitor className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  
                  {/* CTA group */}
                  <div className="mt-10 flex items-center justify-center gap-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 px-6 font-semibold">
                      Learn More
                    </Button>
                    <Button variant="outline" className="bg-white hover:bg-slate-50 ring-1 ring-slate-200 text-slate-800 rounded-xl h-12 px-6">
                      Contact Us
                    </Button>
                  </div>
                </div>
                
                <div className="rounded-2xl bg-white/90 backdrop-blur p-8 text-center shadow-[0_6px_24px_-8px_rgba(16,24,40,.15)] ring-1 ring-black/5 transition hover:shadow-[0_10px_32px_-8px_rgba(16,24,40,.2)]">
                  <div className="text-2xl font-semibold text-emerald-600 mb-2">New Revenue</div>
                  <div className="text-base font-medium text-emerald-700 mb-3">Streams Available</div>
                  <div className="text-sm text-slate-600 leading-6">Generate additional income through curated local partnerships and services</div>
                  
                  {/* Icons row */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="h-12 w-12 rounded-xl bg-white shadow ring-1 ring-black/5 grid place-items-center">
                      <Tablet className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-white shadow ring-1 ring-black/5 grid place-items-center">
                      <Smartphone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-white shadow ring-1 ring-black/5 grid place-items-center">
                      <Monitor className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  
                  {/* CTA group */}
                  <div className="mt-10 flex items-center justify-center gap-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 px-6 font-semibold">
                      Learn More
                    </Button>
                    <Button variant="outline" className="bg-white hover:bg-slate-50 ring-1 ring-slate-200 text-slate-800 rounded-xl h-12 px-6">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Value Badges */}
        <div
          className={`flex items-center justify-center gap-8 py-8 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center space-y-3 group">
            <div className="rounded-xl bg-white/90 backdrop-blur shadow-md p-4 group-hover:scale-105 transition-all duration-300">
              <Tablet className="h-8 w-8 text-emerald-600" />
            </div>
            <span className="text-sm font-medium text-white">Guest Tablet</span>
          </div>
          <div className="flex flex-col items-center space-y-3 group">
            <div className="rounded-xl bg-white/90 backdrop-blur shadow-md p-4 group-hover:scale-105 transition-all duration-300">
              <Smartphone className="h-8 w-8 text-emerald-600" />
            </div>
            <span className="text-sm font-medium text-white">Staff App</span>
          </div>
          <div className="flex flex-col items-center space-y-3 group">
            <div className="rounded-xl bg-white/90 backdrop-blur shadow-md p-4 group-hover:scale-105 transition-all duration-300">
              <Monitor className="h-8 w-8 text-emerald-600" />
            </div>
            <span className="text-sm font-medium text-white">Manager Dashboard</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mt-12 justify-center transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button size="lg" className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all bg-emerald-600 hover:bg-emerald-700 text-white">
            Apply for Pilot Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 font-semibold border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-all bg-white"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}