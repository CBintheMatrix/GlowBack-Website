"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Tablet, Smartphone, Monitor } from "lucide-react"
import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"

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
        console.log('📹 Next video can play, starting crossfade')
        nextVideo.muted = true
        nextVideo.play().then(() => {
          console.log('▶️ Next video playing, starting crossfade')
          // Start crossfade
          nextVideo.style.opacity = '0'
          nextVideo.style.transition = 'opacity 1s ease-in-out'
          
          // Fade in next video
          setTimeout(() => {
            nextVideo.style.opacity = '1'
          }, 50)
          
          // Fade out current video
          currentVideo.style.transition = 'opacity 1s ease-in-out'
          currentVideo.style.opacity = '0'
          
          // Complete transition
          setTimeout(() => {
            console.log('✅ Crossfade complete')
            setCurrentVideoIndex(nextIndex)
            currentIndexRef.current = nextIndex // Update the ref
            
            // Reset styles properly for next transition
            currentVideo.style.opacity = '1'
            currentVideo.style.transition = ''
            nextVideo.style.opacity = '0'
            nextVideo.style.transition = ''
            nextVideo.src = ''
            nextVideo.load() // Clear the video completely
            
            setIsTransitioning(false)
          }, 1000)
        }).catch(err => {
          console.log('❌ Next video play failed:', err)
          setIsTransitioning(false)
        })
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/35"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-full">
          <div className="mb-8 animate-in fade-in-0 duration-1000 delay-200 relative">
            <Image
              src="/GlowBack Logo.png"
              alt="Glowback Logo"
              width={120}
              height={120}
              className="mx-auto hover:scale-110 hover:rotate-6 transition-all duration-500 hover:drop-shadow-2xl hover:brightness-110 animate-pulse"
            />
          </div>

          <div className="space-y-8">
            {/* GLOWBACK - Green */}
            <div className="space-y-4">
              <h1 className="text-6xl font-black tracking-tight text-emerald-500 sm:text-7xl md:text-8xl lg:text-9xl animate-in fade-in-0 duration-1000 drop-shadow-lg">
                GLOWBACK
              </h1>
              <div className="h-1 w-32 bg-emerald-400 mx-auto animate-in slide-in-from-left-4 duration-1000 delay-300"></div>
            </div>

            {/* Seamless Operations. Exceptional Stays. - White Text for better contrast */}
            <div className="space-y-3">
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                  Seamless Operations.
                </h2>
              </div>
              <div
                className={`transition-all duration-1000 delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                  Exceptional Stays.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - All other content below the video */}
      <section className="container flex flex-col items-center justify-center space-y-12 py-24 text-center md:py-32 relative max-w-screen-2xl bg-white">
        <div className="space-y-8 relative z-10">
          {/* Impact Statement for Hotel Owners */}
          <div className="relative max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-green-600 mb-8 sm:text-5xl md:text-6xl">
              Transform Your Hotel Operations
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">Real-Time</div>
                <div className="text-lg font-semibold text-black mb-2">Instant Communication</div>
                <div className="text-sm text-gray-600">Staff receive guest requests instantly with smart routing and real-time notifications</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-lg font-semibold text-black mb-2">Languages Supported</div>
                <div className="text-sm text-gray-600">Eliminate language barriers with instant multilingual support for every guest</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">New Revenue</div>
                <div className="text-lg font-semibold text-black mb-2">Streams Available</div>
                <div className="text-sm text-gray-600">Generate additional income through curated local partnerships and services</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icons */}
        <div
          className={`flex items-center justify-center gap-12 py-8 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center space-y-3 group">
            <div className="rounded-full bg-green-600 p-4 shadow-lg group-hover:shadow-xl transition-shadow">
              <Tablet className="h-12 w-12 text-white" />
            </div>
            <span className="text-sm font-medium text-black">Guest Tablet</span>
          </div>
          <div className="flex flex-col items-center space-y-3 group">
            <div className="rounded-full bg-green-600 p-4 shadow-lg group-hover:shadow-xl transition-shadow">
              <Smartphone className="h-12 w-12 text-white" />
            </div>
            <span className="text-sm font-medium text-black">Staff App</span>
          </div>
          <div className="flex flex-col items-center space-y-3 group">
            <div className="rounded-full bg-green-600 p-4 shadow-lg group-hover:shadow-xl transition-shadow">
              <Monitor className="h-12 w-12 text-white" />
            </div>
            <span className="text-sm font-medium text-black">Manager Dashboard</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button size="lg" className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all bg-green-600 hover:bg-green-700 text-white">
            Apply for Pilot Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 font-semibold border-2 border-green-600 text-green-600 hover:bg-green-50 transition-all bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </section>
    </>
  )
}