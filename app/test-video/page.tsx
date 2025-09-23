"use client"

import { useEffect, useRef } from "react"

export default function TestVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      
      const handleLoad = () => {
        console.log("Video loaded!")
        video.play().catch(console.error)
      }
      
      const handleError = (e: any) => {
        console.error("Video error:", e)
      }
      
      video.addEventListener('loadeddata', handleLoad)
      video.addEventListener('error', handleError)
      
      return () => {
        video.removeEventListener('loadeddata', handleLoad)
        video.removeEventListener('error', handleError)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl mb-8">Video Test Page</h1>
        
        <video
          ref={videoRef}
          width="800"
          height="450"
          controls
          muted
          autoPlay
          loop
        >
          <source src="/videos/hero-video-001.mp4" type="video/mp4" />
          <source src="/videos/hero video 001.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="mt-4">
          <p>If you see this video playing, the file is accessible.</p>
          <p>If not, there's a fundamental issue with the video file or path.</p>
        </div>
      </div>
    </div>
  )
}
