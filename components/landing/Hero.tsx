"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const heroVideos = [
    "/hero-video-001.mp4",
    "/hero-video-002.mp4", 
    "/hero-video-003.mp4"
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Ensure video plays on initial load
    const video = videoRef.current
    if (video) {
      const playInitialVideo = async () => {
        try {
          video.muted = true
          await video.play()
          console.log('Initial video playing')
        } catch (error) {
          console.log('Initial video play failed:', error)
        }
      }
      
      // Try to play immediately and also after a short delay
      playInitialVideo()
      setTimeout(playInitialVideo, 500)
    }
  }, [])

  // Video cycling with fade transitions
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = async () => {
      try {
        video.currentTime = 0
        video.muted = true
        await video.play()
        console.log(`Playing video ${currentVideoIndex}: ${heroVideos[currentVideoIndex]}`)
      } catch (error) {
        console.log('Video autoplay failed:', error)
        // Try to play again after a short delay
        setTimeout(async () => {
          try {
            await video.play()
          } catch (e) {
            console.log('Retry play failed:', e)
          }
        }, 100)
      }
    }

    const handleVideoEnd = () => {
      console.log('Video ended, cycling to next')
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length)
    }

    const handleLoadedData = () => {
      console.log('Video loaded, attempting to play')
      playVideo()
    }

    video.load()
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('ended', handleVideoEnd)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [currentVideoIndex])

  // Video cycling timer (every 10 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length)
    }, 10000) // Change video every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-video-001.mp4"
      >
        <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
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
