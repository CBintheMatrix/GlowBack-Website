"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, CheckCircle, Building2, Mail, Phone, MapPin } from "lucide-react"

declare global { 
  interface Window { 
    onTurnstileLoad?: () => void;
    turnstile?: {
      render: (element: string | HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
    };
  } 
}

export default function PilotApplication() {
  const [spotsRemaining, setSpotsRemaining] = useState(3)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hotelName: "",
    city: "",
    notes: "",
  })
  const [status, setStatus] = useState<"idle"|"submitting"|"ok"|"err">("idle")
  const [msg, setMsg] = useState<string>("")
  const [turnstileWidgetId, setTurnstileWidgetId] = useState<string | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2024-12-01T23:59:59").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Load Turnstile script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    window.onTurnstileLoad = () => {
      if (window.turnstile) {
        const widgetId = window.turnstile.render("#turnstile-widget", {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "YOUR_TURNSTILE_SITE_KEY",
        })
        setTurnstileWidgetId(widgetId)
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    setMsg("")
    
    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      
      const res = await fetch("/api/apply", { 
        method: "POST", 
        body: formData 
      })
      const data = await res.json()
      
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Submit failed")
      }
      
      setStatus("ok")
      setMsg("Application received. We'll be in touch soon.")
      form.reset()
      
      // Reset Turnstile widget
      if (turnstileWidgetId && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId)
      }
    } catch (err: any) {
      setStatus("err")
      setMsg(err.message || "Something went wrong.")
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Join the Glowback <span className="text-emerald-400">Founding Partner Program</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Hotels who secure founding status will always have a competitive edge over those who wait. This isn't just
              early access — it's permanent competitive advantage that locks in revolutionary pricing and exclusive
              perks forever.
            </p>
          </div>

          {/* Scarcity Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Spots Remaining */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Users className="w-5 h-5 mr-2 text-emerald-400" />
                  Founding Partner Spots Remaining
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl font-bold text-red-400 mb-2">{spotsRemaining}</div>
                  <p className="text-slate-200 text-sm sm:text-base">out of 3 total spots</p>
                  <div className="w-full bg-slate-700 rounded-full h-2 sm:h-3 mt-4">
                    <div
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 sm:h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(spotsRemaining / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Countdown Timer */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Clock className="w-5 h-5 mr-2 text-emerald-400" />
                  Application Deadline: December 1st, 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-white">{timeLeft.days}</div>
                    <div className="text-xs text-slate-200">DAYS</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-white">{timeLeft.hours}</div>
                    <div className="text-xs text-slate-200">HOURS</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-white">{timeLeft.minutes}</div>
                    <div className="text-xs text-slate-200">MINS</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-white">{timeLeft.seconds}</div>
                    <div className="text-xs text-slate-200">SECS</div>
                  </div>
                </div>
                <p className="text-center text-slate-200 mt-4 text-xs sm:text-sm px-2">
                  Applications close automatically on December 1st at 11:59 PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Pilot Benefits */}
          <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-white text-xl sm:text-2xl">What's Included in Your 60-Day Pilot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Full GlowBack System Activated</h4>
                      <p className="text-slate-200 text-sm">
                        Complete guest request → staff coordination → manager dashboard with live tracking and
                        accountability
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Complete Onboarding & Training</h4>
                      <p className="text-slate-200 text-sm">
                        Full staff training and dedicated support throughout the entire 60-day pilot period
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Real-Time Analytics & Reporting</h4>
                      <p className="text-slate-200 text-sm">
                        End-of-pilot analytics: response times, staff efficiency, request categories, and guest service
                        trends
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Founding Partner Recognition</h4>
                      <p className="text-slate-200 text-sm">
                        Permanent recognition on GlowBack.io, global hotel map placement, and featured case studies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Free Promotional Content</h4>
                      <p className="text-slate-200 text-sm">
                        Professional video content showcasing your hotel powered by GlowBack for marketing use
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Priority PR & Media Coverage</h4>
                      <p className="text-slate-200 text-sm">
                        Featured in articles, press releases, and industry publications about the pilot program
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">First Access to New Features</h4>
                      <p className="text-slate-200 text-sm">
                        Priority access to all new GlowBack capabilities and upgrades before general release
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exclusive Pricing Benefits Section */}
          <Card className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border-emerald-500/50 backdrop-blur-sm mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-white text-xl sm:text-2xl">
                Exclusive Founding Partner Rate — Discounted Pilot Pricing
              </CardTitle>
              <p className="text-emerald-300 font-semibold text-sm sm:text-base">
                🔥 These benefits are NEVER offered again — once the pilot closes, they're gone forever. 🔥
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-emerald-500/30">
                    <h4 className="font-bold text-emerald-400 text-lg mb-2">Exclusive Founding Partner Rate</h4>
                    <div className="text-lg font-bold text-white mb-2">
                      Each of the three pilot hotels will secure a unique discounted rate, permanently locked in for the
                      life of their contract. This Founder's Partner Rate is never offered again.
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/30">
                    <h4 className="font-bold text-blue-400 text-lg mb-2">50% Off All Future Add Ons</h4>
                    <p className="text-slate-200 text-sm">
                      Permanent half price access to every future integration, expansion, and upgrade.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="font-bold text-purple-400 text-lg mb-2">Founding Partner Recognition</h4>
                    <p className="text-slate-200 text-sm">
                      Permanent prestige as one of the first Glowback partners — featured in PR, case studies, and
                      industry showcases.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-orange-500/30">
                    <h4 className="font-bold text-orange-400 text-lg mb-2">Priority Revenue Opportunities</h4>
                    <p className="text-slate-200 text-sm">
                      First access to new revenue streams through upsells and commission modules before public release.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-800/50 border border-slate-600/30 rounded-lg">
                <p className="text-slate-200 font-semibold text-center">
                  👉 Only three hotels will ever receive this Founder's Partner Rate. Once the pilot closes, the
                  opportunity is gone permanently.
                </p>
              </div>
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300 font-semibold text-center">
                  No obligation beyond the pilot — if Glowback doesn't transform your operations, you're free to walk
                  away.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Application Form */}
          <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl sm:text-2xl">Pilot Application Form</CardTitle>
              <p className="text-slate-200 text-sm sm:text-base">Complete this form to secure your spot in the exclusive pilot program</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      <Building2 className="w-4 h-4 inline mr-2" />
                      Hotel Name *
                    </label>
                    <Input
                      name="hotelName"
                      value={formData.hotelName}
                      onChange={handleInputChange}
                      placeholder="Enter your hotel name"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Contact Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@hotel.com"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      City
                    </label>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City, State/Country"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Additional Notes
                  </label>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tell us about your hotel, current challenges, or any questions you have..."
                    className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 min-h-[100px]"
                  />
                </div>

                {/* Cloudflare Turnstile widget */}
                <div className="flex justify-center">
                  <div id="turnstile-widget"></div>
                </div>

                <div className="text-center pt-4 sm:pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold disabled:opacity-50 w-full sm:w-auto"
                  >
                    {status === "submitting" ? "Submitting..." : "Lock In My Founding Partner Advantage"}
                  </Button>
                  <p className="text-slate-200 text-xs sm:text-sm mt-4 px-4">
                    Applications are reviewed within 24 hours. Spots are awarded based on operational fit and readiness.
                  </p>
                </div>

                {/* Status message */}
                <div role="status" aria-live="polite" className="text-center">
                  {msg && (
                    <p className={`text-sm font-medium ${
                      status === "ok" ? "text-emerald-400" : 
                      status === "err" ? "text-red-400" : 
                      "text-slate-200"
                    }`}>
                      {msg}
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Urgency Footer */}
          <div className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-2">The Window Is Closing Fast</h3>
            <p className="text-slate-200 text-sm sm:text-base">Only 3 spots available. After that, the opportunity is gone permanently.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
