"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tablet,
  Smartphone,
  Monitor,
  Clock,
  Users,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Wifi,
  Shield,
  Zap,
  Bell,
  CheckCircle,
  TrendingUp,
} from "lucide-react"

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <section id="services" className="container max-w-screen-2xl py-24">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
        <p className="mx-auto max-w-[42rem] text-muted-foreground sm:text-lg">
          Three integrated solutions that work together to transform your hotel operations
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card
          className={`border-blue-200 dark:border-blue-800 transition-all duration-300 cursor-pointer hover:shadow-lg ${expandedService === "guest-tablet" ? "ring-2 ring-blue-500" : ""}`}
        >
          <CardHeader onClick={() => toggleService("guest-tablet")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Tablet className="h-6 w-6 text-blue-500" />
                <CardTitle>Guest Tablet</CardTitle>
              </div>
              {expandedService === "guest-tablet" ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
            <CardDescription>In-room tablet for seamless guest requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Request towels & cleaning</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Live stock counters</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Give feedback instantly</span>
            </div>

            {expandedService === "guest-tablet" && (
              <div className="mt-6 pt-6 border-t border-blue-100 dark:border-blue-800 space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Detailed Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Bell className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Instant Service Requests</p>
                        <p className="text-xs text-muted-foreground">
                          Guests can request housekeeping, maintenance, or amenities with one tap
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Wifi className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Real-time Inventory Display</p>
                        <p className="text-xs text-muted-foreground">
                          Live counters show available towels, toiletries, and room supplies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Feedback & Rating System</p>
                        <p className="text-xs text-muted-foreground">
                          Instant feedback collection with star ratings and comments
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white dark:bg-gray-900 rounded border">
                    <p className="text-xs text-center text-muted-foreground">[Product image will be displayed here]</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card
          className={`border-green-200 dark:border-green-800 transition-all duration-300 cursor-pointer hover:shadow-lg ${expandedService === "staff-app" ? "ring-2 ring-green-500" : ""}`}
        >
          <CardHeader onClick={() => toggleService("staff-app")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-6 w-6 text-green-500" />
                <CardTitle>Staff App</CardTitle>
              </div>
              {expandedService === "staff-app" ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
            <CardDescription>Mobile app for efficient task management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Real-time task acceptance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">ID tracking & verification</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Offline sync capability</span>
            </div>

            {expandedService === "staff-app" && (
              <div className="mt-6 pt-6 border-t border-green-100 dark:border-green-800 space-y-4">
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Detailed Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Lightning-Fast Task Assignment</p>
                        <p className="text-xs text-muted-foreground">
                          Receive and accept tasks instantly with push notifications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Staff ID Verification</p>
                        <p className="text-xs text-muted-foreground">
                          Secure login with staff ID tracking for accountability
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Wifi className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Offline Mode</p>
                        <p className="text-xs text-muted-foreground">
                          Continue working even without internet, syncs when reconnected
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white dark:bg-gray-900 rounded border">
                    <p className="text-xs text-center text-muted-foreground">[Product image will be displayed here]</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card
          className={`border-purple-200 dark:border-purple-800 transition-all duration-300 cursor-pointer hover:shadow-lg ${expandedService === "manager-dashboard" ? "ring-2 ring-purple-500" : ""}`}
        >
          <CardHeader onClick={() => toggleService("manager-dashboard")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Monitor className="h-6 w-6 text-purple-500" />
                <CardTitle>Manager Dashboard</CardTitle>
              </div>
              {expandedService === "manager-dashboard" ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
            <CardDescription>Comprehensive oversight and analytics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Monitor tasks & staff status</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Inventory & analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Escalation management</span>
            </div>

            {expandedService === "manager-dashboard" && (
              <div className="mt-6 pt-6 border-t border-purple-100 dark:border-purple-800 space-y-4">
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Detailed Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-purple-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Real-time Analytics</p>
                        <p className="text-xs text-muted-foreground">
                          Live performance metrics, task completion rates, and staff efficiency
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-purple-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Staff Management</p>
                        <p className="text-xs text-muted-foreground">
                          Monitor staff locations, task assignments, and performance metrics
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Bell className="h-5 w-5 text-purple-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Smart Escalation System</p>
                        <p className="text-xs text-muted-foreground">
                          Automatic alerts for overdue tasks and priority guest requests
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white dark:bg-gray-900 rounded border">
                    <p className="text-xs text-center text-muted-foreground">[Product image will be displayed here]</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
