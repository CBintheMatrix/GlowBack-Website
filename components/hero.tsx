"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Tablet, Smartphone, Monitor, Play } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [canPlay, setCanPlay] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Multiple video URL attempts to handle different scenarios
  const videoUrls = [
    "/videos/hero video 001.mp4",  // Original with spaces
    "/videos/hero%20video%20001.mp4",  // URL encoded
    "/videos/hero-video-001.mp4",  // Alternative naming
  ]
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

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

  // Enhanced video handling with multiple fallbacks
  useEffect(() => {
    if (!videoRef.current) {
      console.log("Video ref not available")
      return
    }

    const video = videoRef.current
    const currentUrl = videoUrls[currentVideoIndex]
    console.log("Attempting to load video:", currentUrl)

    const handleVideoError = (e: Event) => {
      console.error("Video error for URL:", currentUrl, e)
      setVideoError(true)
      setVideoLoaded(false)
      
      // Try next video URL
      if (currentVideoIndex < videoUrls.length - 1) {
        console.log("Trying next video URL...")
        setCurrentVideoIndex(prev => prev + 1)
      } else {
        console.log("All video URLs failed, showing play button")
        setShowPlayButton(true)
      }
    }

    const handleVideoLoad = () => {
      console.log("Video loaded successfully:", currentUrl)
      setVideoLoaded(true)
      setVideoError(false)
      setShowPlayButton(false)
    }

    const handleCanPlay = () => {
      console.log("Video can play:", currentUrl)
      setCanPlay(true)
    }

    const handleLoadStart = () => {
      console.log("Video load started:", currentUrl)
    }

    const handleLoadedData = () => {
      console.log("Video data loaded:", currentUrl)
    }

    const handlePlay = () => {
      console.log("Video started playing:", currentUrl)
      setShowPlayButton(false)
    }

    const handlePause = () => {
      console.log("Video paused:", currentUrl)
    }

    // Clear previous event listeners
    video.removeEventListener('error', handleVideoError)
    video.removeEventListener('loadeddata', handleVideoLoad)
    video.removeEventListener('canplay', handleCanPlay)
    video.removeEventListener('loadstart', handleLoadStart)
    video.removeEventListener('loadeddata', handleLoadedData)
    video.removeEventListener('play', handlePlay)
    video.removeEventListener('pause', handlePause)

    // Add new event listeners
    video.addEventListener('error', handleVideoError)
    video.addEventListener('loadeddata', handleVideoLoad)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    // Set video source and load
    video.src = currentUrl
    video.load()

    // Try to play after loading
    const playVideo = () => {
      video.play().then(() => {
        console.log("Video playing successfully:", currentUrl)
        setShowPlayButton(false)
      }).catch((error) => {
        console.error("Autoplay failed:", error)
        setShowPlayButton(true)
      })
    }

    // Try to play immediately and after a delay
    playVideo()
    setTimeout(playVideo, 1000)
    setTimeout(playVideo, 3000)

    return () => {
      video.removeEventListener('error', handleVideoError)
      video.removeEventListener('loadeddata', handleVideoLoad)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [currentVideoIndex, videoUrls])

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        console.log("Manual play successful")
        setShowPlayButton(false)
      }).catch((error) => {
        console.error("Manual play failed:", error)
      })
    }
  }

  return (
    <>
      {/* Video Hero Section - GLOWBACK text and "Seamless Operations. Exceptional Stays." */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
            preload="auto"
            autoPlay
            poster=""
          >
            <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Fallback gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

        {/* Debug info (remove in production) */}
        <div className="absolute top-4 left-4 z-50 text-white text-sm bg-black/70 p-3 rounded-lg border border-white/20">
          <div className="font-bold mb-2">Video Debug Info:</div>
          <div>Video Loaded: {videoLoaded ? '✅ Yes' : '❌ No'}</div>
          <div>Video Error: {videoError ? '❌ Yes' : '✅ No'}</div>
          <div>Can Play: {canPlay ? '✅ Yes' : '❌ No'}</div>
          <div>Show Play Button: {showPlayButton ? '✅ Yes' : '❌ No'}</div>
          <div>Current URL: {videoUrls[currentVideoIndex]}</div>
          <div>Video Index: {currentVideoIndex + 1}/{videoUrls.length}</div>
        </div>

        {/* Manual play button if autoplay fails */}
        {showPlayButton && (
          <button
            onClick={handleManualPlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            <Play className="w-12 h-12 text-white" />
            <div className="text-white text-sm mt-2 font-medium">Click to Play Video</div>
          </button>
        )}

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