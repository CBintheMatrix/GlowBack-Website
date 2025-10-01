"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Clock, Users, CheckCircle, Building2, Mail, Phone, MapPin } from "lucide-react"
import { counterService } from "../../lib/counter-service"

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
  const [hotelsBeingReviewed, setHotelsBeingReviewed] = useState<number | null>(null)
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
      const targetDate = new Date("2025-12-31T23:59:59").getTime()
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

    // Set initial time immediately
    setTimeLeft(calculateTimeLeft())

    // Update every second for accurate countdown
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Initialize counter service and subscribe to updates
  useEffect(() => {
    // Set initial counter value
    const initializeCounter = async () => {
      const count = await counterService.getCount()
      setHotelsBeingReviewed(count)
    }
    
    initializeCounter()

    // Subscribe to counter updates
    const unsubscribe = counterService.subscribe((count) => {
      setHotelsBeingReviewed(count)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  // No automatic updates - only changes when someone actually applies

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
      
      // Submit to Formspree
      const res = await fetch("https://formspree.io/f/manpnaoz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (!res.ok) {
        throw new Error("Submit failed")
      }
      
      setStatus("ok")
      setMsg("Application received. We'll be in touch soon.")
      form.reset()
      
      // Show success alert
      alert("Application submitted!")
      
      // Increase the review count using the counter service
      counterService.increment().catch(console.error)
      
      // Reset Turnstile widget
      if (turnstileWidgetId && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId)
      }
    } catch (err: any) {
      setStatus("err")
      setMsg(err.message || "Something went wrong.")
      
      // Show error alert
      alert("Something went wrong.")
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
              Join the Glowback <span className="text-emerald-400">Pilot Program</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Hotels who secure founding status will always have a competitive edge over those who wait. This isn't just
              early access. It's permanent competitive advantage that locks in revolutionary pricing and exclusive
              perks forever.
            </p>
          </div>

          {/* Scarcity Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Hotels Being Reviewed */}
            <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 mr-2 text-emerald-600" />
                <h3 className="text-lg font-semibold text-white">Application Review Status</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-6xl font-bold text-emerald-600 mb-2">
                  {hotelsBeingReviewed !== null ? hotelsBeingReviewed : (
                    <div className="inline-block animate-pulse bg-emerald-600/20 rounded-lg h-16 w-16 sm:h-20 sm:w-20"></div>
                  )}
                </div>
                <p className="text-zinc-300 text-sm sm:text-base mb-2">Hotels Currently Being Reviewed</p>
                <p className="text-emerald-400 text-xs sm:text-sm font-medium">Final Places Decided Shortly</p>
                <div className="w-full bg-zinc-800 rounded-full h-2 sm:h-3 mt-4">
                  <div
                    className="bg-emerald-600 h-2 sm:h-3 rounded-full transition-all duration-1000 animate-pulse"
                    style={{ width: hotelsBeingReviewed !== null ? `${Math.min((hotelsBeingReviewed / 20) * 100, 100)}%` : '0%' }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-zinc-400 mt-2">
                  <span>0</span>
                  <span>20+ Applications</span>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                <h3 className="text-lg font-semibold text-white">Application Deadline: December 31st, 2025</h3>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="bg-zinc-800/50 rounded-lg p-3 border border-white/10">
                  <div className="text-xl sm:text-3xl font-bold text-emerald-600">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-zinc-300 font-medium">DAYS</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3 border border-white/10">
                  <div className="text-xl sm:text-3xl font-bold text-emerald-600">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-zinc-300 font-medium">HOURS</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3 border border-white/10">
                  <div className="text-xl sm:text-3xl font-bold text-emerald-600">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-zinc-300 font-medium">MINS</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3 border border-white/10">
                  <div className="text-xl sm:text-3xl font-bold text-emerald-600">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-zinc-300 font-medium">SECS</div>
                </div>
              </div>
              <p className="text-center text-zinc-300 mt-4 text-xs sm:text-sm px-2">
                Applications close automatically on December 31st, 2025 at 11:59 PM
              </p>
            </div>
          </div>

          {/* Pilot Includes Section */}
          <section id="pilot-includes" className="bg-black py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                What's Included in Your <span className="text-emerald-600">60-Day Pilot</span>
              </h2>
              <p className="mt-3 text-zinc-300">
                Full platform access, hands-on enablement, and visibility to measure impact so you can decide with data.
              </p>

              {/* grid of 6 benefits */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* 1 */}
                <div className="card rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Platform
                  </div>
                  <h3 className="mt-3 text-lg md:text-xl font-semibold">Full Glowback System Activated</h3>
                  <p className="mt-2 text-zinc-300">
                    Guest request → smart routing → staff coordination → manager view with live tracking and accountability.
                  </p>
                </div>

                {/* 2 */}
                <div className="card rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Enablement
                  </div>
                  <h3 className="mt-3 text-lg md:text-xl font-semibold">Complete Onboarding & Training</h3>
                  <p className="mt-2 text-zinc-300">
                    Dedicated support for managers and staff throughout the 60 days, with simple materials and quick refreshers.
                  </p>
                </div>

                {/* 3 */}
                <div className="card rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Visibility
                  </div>
                  <h3 className="mt-3 text-lg md:text-xl font-semibold">Real-Time Analytics & Pilot Report</h3>
                  <p className="mt-2 text-zinc-300">
                    Live status during the pilot + a wrap-up report: response times, staff efficiency, request mix and service trends.
                  </p>
                </div>

                {/* 4 */}
                <div className="card rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Marketing
                  </div>
                  <h3 className="mt-3 text-lg md:text-xl font-semibold">Professional Promo Content</h3>
                  <p className="mt-2 text-zinc-300">
                    A short showcase of your hotel running on Glowback, produced for your marketing channels and sales partners.
                  </p>
                </div>

                {/* 5 */}
                <div className="card rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Exposure
                  </div>
                  <h3 className="mt-3 text-lg md:text-xl font-semibold">PR & Media Coverage Priority</h3>
                  <p className="mt-2 text-zinc-300">
                    Eligibility for features in articles, press releases and industry publications about the pilot program.
                  </p>
                </div>

                {/* 6 */}
                <div className="card rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Access
                  </div>
                  <h3 className="mt-3 text-lg md:text-xl font-semibold">First Access to New Features</h3>
                  <p className="mt-2 text-zinc-300">
                    Try new Glowback capabilities and upgrades ahead of general release, with direct feedback loops to our team.
                  </p>
                </div>
              </div>

              {/* reassurance line */}
              <p className="mt-6 text-sm text-zinc-400">
                Your team keeps control. We make operations faster, clearer and easier to manage. You measure the results.
              </p>
            </div>
          </section>

          {/* Pilot Benefits Section */}
          <section id="pilot-benefits" className="bg-black py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              {/* Header */}
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Founding Partner Advantages: <span className="text-emerald-600">Pilot-Only Pricing</span>
              </h2>
              <p className="mt-3 text-zinc-300">
                These benefits are exclusive to the pilot cohort. When selections are finalized, they are gone permanently.
              </p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
                {/* Card 1 */}
                <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Founder's Rate
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-semibold">Permanent Discounted Rate</h3>
                  <p className="mt-2 text-zinc-300">
                    A unique discounted rate locked for the life of your contract. This Founder's Partner Rate is never offered again after the pilot.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Add-Ons
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-semibold">50% Off All Future Add-Ons</h3>
                  <p className="mt-2 text-zinc-300">
                    Permanent half-price on every future integration, expansion or upgrade released after your pilot.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Recognition
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-semibold">Pilot Program Recognition</h3>
                  <p className="mt-2 text-zinc-300">
                    Prestige as one of Glowback's first partners, eligible for PR features, case studies and industry showcases.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-zinc-800/80 border border-white/10 text-zinc-300">
                    Revenue
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-semibold">Priority Revenue Opportunities</h3>
                  <p className="mt-2 text-zinc-300">
                    First access to new revenue streams through upsells and commission modules before public release.
                  </p>
                </div>
              </div>

              {/* Scarcity Bar */}
              <div className="mt-8 rounded-xl border border-emerald-600/30 bg-emerald-600/5 px-4 py-3 text-sm text-emerald-300">
                Selection is limited. Once the cohort is finalized, pilot-only pricing and recognition are closed permanently.
              </div>

              {/* Guarantee Bar */}
              <div className="mt-3 rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-300">
                No obligation beyond the pilot. If Glowback doesn't transform your operations, you're free to walk away.
              </div>
            </div>
          </section>

          {/* Competitive Application Section */}
          <div className="bg-black rounded-2xl border border-emerald-600/30 p-8 md:p-12">
            {/* Scarcity & Intrigue Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pilot Program Application
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                Complete the form to be considered for Glowback's exclusive pilot program. Your answers help us understand your challenges, goals, and readiness to transform operations.
              </p>
              <p className="text-emerald-400 text-sm font-medium mb-6">
                Hotels across Thailand are applying. Only a select few will be chosen.
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-800 rounded-full h-3 mb-4">
                <div 
                  className="bg-emerald-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: hotelsBeingReviewed !== null ? `${Math.min((hotelsBeingReviewed / 20) * 100, 100)}%` : '0%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>0</span>
                <span>20+ Applications</span>
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Pilot Program Application</h3>
              
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Hotel Name *
                  </label>
                  <Input
                    name="hotelName"
                    value={formData.hotelName}
                    onChange={handleInputChange}
                    placeholder="Enter your hotel name"
                    className="bg-black border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Location (City, Country) *
                  </label>
                  <Input
                    name="location"
                    placeholder="Bangkok, Thailand"
                    className="bg-black border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Contact Name & Position *
                  </label>
                  <Input
                    name="contactName"
                    placeholder="John Smith, General Manager"
                    className="bg-black border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@hotel.com"
                    className="bg-black border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    placeholder="+66 2 123 4567"
                    className="bg-black border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Number of Rooms *
                  </label>
                  <Input
                    name="roomCount"
                    type="number"
                    placeholder="150"
                    className="bg-black border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Hotel Type *
                  </label>
                  <select 
                    name="hotelType"
                    className="w-full bg-black border border-emerald-600 text-white rounded-md px-3 py-2 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600"
                    required
                  >
                    <option value="">Select hotel type</option>
                    <option value="resort">Resort</option>
                    <option value="boutique">Boutique</option>
                    <option value="chain">Chain</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Level of Interest in AI/Automation *
                  </label>
                  <select 
                    name="aiInterest"
                    className="w-full bg-black border border-emerald-600 text-white rounded-md px-3 py-2 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600"
                    required
                  >
                    <option value="">Select interest level</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Current Operational Challenges *
                </label>
                <Textarea
                  name="challenges"
                  placeholder="Describe your main operational challenges (staff coordination, guest service delays, communication gaps, etc.)"
                  className="bg-black border border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600 min-h-[120px]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Main Goals for Joining Glowback *
                </label>
                <Textarea
                  name="goals"
                  placeholder="What do you hope to achieve with Glowback? (improve guest satisfaction, streamline operations, increase revenue, etc.)"
                  className="bg-black border border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600 min-h-[120px]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Current Systems in Use *
                </label>
                <select 
                  name="currentSystems"
                  className="w-full bg-black border border-emerald-600 text-white rounded-md px-3 py-2 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600 mb-2"
                  required
                >
                  <option value="">Select current systems</option>
                  <option value="pms">Property Management System (PMS)</option>
                  <option value="crm">Customer Relationship Management (CRM)</option>
                  <option value="manual">Manual processes</option>
                  <option value="mixed">Mixed systems</option>
                  <option value="other">Other (specify below)</option>
                </select>
                <Input
                  name="systemDetails"
                  placeholder="If 'Other', please specify your current systems"
                  className="bg-black border border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Guest Satisfaction Pain Points *
                </label>
                <div className="space-y-2">
                  {['Response Times', 'Staff Coordination', 'Service Reliability', 'Feedback Visibility', 'Other'].map((point) => (
                    <label key={point} className="flex items-center space-x-2 text-white">
                      <input 
                        type="checkbox" 
                        name="painPoints" 
                        value={point.toLowerCase().replace(' ', '_')}
                        className="rounded border-emerald-600 text-emerald-600 focus:ring-emerald-600"
                      />
                      <span>{point}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Decision-Making Process *
                </label>
                <Textarea
                  name="decisionProcess"
                  placeholder="Who else is involved in technology decisions? What's your typical timeline for implementing new systems?"
                  className="bg-black border border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600 min-h-[100px]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Additional Notes
                </label>
                <Textarea
                  name="additionalNotes"
                  placeholder="Any other information that would help us understand your hotel and needs..."
                  className="bg-black border border-emerald-600 text-white placeholder-slate-400 focus:ring-emerald-600 focus:ring-2 focus:border-emerald-600 min-h-[100px]"
                />
              </div>

              {/* Cloudflare Turnstile widget */}
              <div className="flex justify-center">
                <div id="turnstile-widget"></div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="bg-gradient-to-r from-black to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-12 py-4 text-lg font-bold disabled:opacity-50 w-full sm:w-auto hover:shadow-lg hover:shadow-emerald-600/25 transition-all duration-300"
                >
                  {status === "submitting" ? "Submitting..." : "Submit My Application"}
                </Button>
                <p className="text-slate-300 text-sm mt-4 max-w-2xl mx-auto">
                  Applications are reviewed within 24 hours. Selection is competitive and based on fit. If accepted, you'll unlock Pilot Program status with permanent advantages.
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
          </div>

          {/* Urgency Footer */}
          <div className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-emerald-400 mb-2">Final Review Phase Active</h3>
            <p className="text-slate-200 text-sm sm:text-base">14 hotels currently under review. Final selections will be announced shortly. Apply now to secure your position.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
