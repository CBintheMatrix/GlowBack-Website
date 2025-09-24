"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tablet,
  Smartphone,
  Monitor,
  Clock,
  Users,
  BarChart3,
  Wifi,
  Shield,
  Zap,
  Bell,
  CheckCircle,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

export default function Services() {

  return (
    <section id="services" className="container max-w-screen-2xl py-24 bg-white">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-600">Our Services</h2>
        <p className="mx-auto max-w-[42rem] text-black sm:text-lg">
          Three integrated solutions that work together to transform your hotel operations
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Guest Tablet Card */}
        <Card className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Tablet className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-black text-lg">Guest Tablet</CardTitle>
                <CardDescription className="text-gray-600">In-room tablet for seamless guest requests</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-black">Request towels & cleaning</span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-black">Live stock counters</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-black">Give feedback instantly</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Detailed Features</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Instant Service Requests</p>
                      <p className="text-xs text-gray-600">
                        Guests can request housekeeping, maintenance, or amenities with one tap
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Wifi className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Real-time Inventory Display</p>
                      <p className="text-xs text-gray-600">
                        Live counters show available towels, toiletries, and room supplies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Feedback & Rating System</p>
                      <p className="text-xs text-gray-600">
                        Instant feedback collection with star ratings and comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Staff App Card */}
        <Card className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-black text-lg">Staff App</CardTitle>
                <CardDescription className="text-gray-600">Mobile app for efficient task management</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-black">Real-time task acceptance</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-black">ID tracking & verification</span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-black">Offline sync capability</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">Detailed Features</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Instant Task Notifications</p>
                      <p className="text-xs text-gray-600">
                        Push notifications for new requests with priority levels and time estimates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Secure Staff Verification</p>
                      <p className="text-xs text-gray-600">
                        QR code scanning and ID verification for secure room access
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Wifi className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Offline Mode Support</p>
                      <p className="text-xs text-gray-600">
                        Continue working without internet, sync when connection returns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Manager Dashboard Card */}
        <Card className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Monitor className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-black text-lg">Manager Dashboard</CardTitle>
                <CardDescription className="text-gray-600">Comprehensive oversight and analytics</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-black">Monitor tasks & staff status</span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-black">Inventory & analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-black">Escalation management</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">Detailed Features</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Real-time Analytics</p>
                      <p className="text-xs text-gray-600">
                        Live dashboards showing response times, completion rates, and guest satisfaction
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Inventory Management</p>
                      <p className="text-xs text-gray-600">
                        Track supplies, predict demand, and automate reordering processes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Bell className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Smart Escalation</p>
                      <p className="text-xs text-gray-600">
                        Automatic escalation for urgent requests and performance alerts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors cursor-pointer">
          <span className="font-semibold">Learn more about our solutions</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </section>
  )
}