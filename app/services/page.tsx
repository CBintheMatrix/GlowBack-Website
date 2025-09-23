import {
  Tablet,
  Smartphone,
  Monitor,
  Users,
  Clock,
  BarChart3,
  MessageSquare,
  CheckCircle,
  Bell,
  TrendingUp,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-16 pt-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Our <span className="text-emerald-400">Services</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Comprehensive hotel operations platform with three integrated solutions designed to streamline every
              aspect of your property management.
            </p>
          </div>

          {/* Guest Tablet Section */}
          <div className="mb-20">
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-0">
                <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-12">
                  <div className="flex items-center mb-4">
                    <Tablet className="h-12 w-12 mr-4" />
                    <CardTitle className="text-4xl font-bold">Guest Tablet</CardTitle>
                  </div>
                  <CardDescription className="text-blue-100 text-lg">
                    In-room digital concierge that transforms guest experience
                  </CardDescription>
                  <div className="mt-6">
                    <Badge variant="secondary" className="bg-blue-500 text-white">
                      Guest Experience
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-slate-800">Key Features</h3>
                      <div className="grid gap-6">
                        <div className="flex items-start space-x-3">
                          <MessageSquare className="h-5 w-5 text-blue-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-lg">Instant Service at Their Fingertips</h4>
                            <p className="text-slate-600 leading-relaxed">
                              GlowBack turns every guest room into a modern control hub. With one touch, guests can
                              request towels, cleaning, maintenance or amenities without picking up the phone. Each
                              request is routed instantly to the right staff member, accepted in seconds and tracked in
                              real time until completion. The result: faster responses, fewer complaints and a hotel
                              experience that feels seamless.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Users className="h-5 w-5 text-blue-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-lg">Seamless Guest–Staff Communication</h4>
                            <p className="text-slate-600 leading-relaxed">
                              No guest should ever feel misunderstood. Our built-in chat system allows direct
                              communication with housekeeping, maintenance and concierge teams in nine languages.
                              Messages are translated instantly so guests type naturally in their own language while
                              staff receive clear instructions in theirs. This builds trust, removes barriers and
                              creates the feeling of a truly international hotel.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="h-5 w-5 text-blue-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-lg">Personalized Room Intelligence</h4>
                            <p className="text-slate-600 leading-relaxed">
                              Every tablet is linked to the room and guest profile, so the experience is personalized
                              from the start. Guests see live wait times, staff availability and real-time status
                              updates from "preparing" to "on the way" to "completed." Managers get a full service
                              history that highlights staff performance and ensures accountability. Service becomes
                              transparent, measurable and consistently excellent.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Image Placeholder</h4>
                      <div className="h-32 bg-slate-200 rounded flex items-center justify-center text-slate-500">
                        Guest Tablet Interface Screenshot
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Staff App Section */}
          <div className="mb-20">
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-0">
                <CardHeader className="bg-gradient-to-br from-green-600 to-green-700 text-white p-12 order-1 lg:order-2">
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-12 w-12 mr-4" />
                    <CardTitle className="text-4xl font-bold">Staff App</CardTitle>
                  </div>
                  <CardDescription className="text-green-100 text-lg">
                    Mobile-first solution that keeps your team connected and efficient
                  </CardDescription>
                  <div className="mt-6">
                    <Badge variant="secondary" className="bg-green-500 text-white">
                      Staff Operations
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-12 order-2 lg:order-1">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-slate-800">Key Features</h3>
                      <div className="grid gap-6">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-lg">Intelligent Task Orchestration</h4>
                            <p className="text-slate-600 leading-relaxed">
                              Say goodbye to chaotic shift handovers and missed priorities. Our smart task management
                              system automatically prioritizes work based on guest check-ins, VIP status, and
                              operational urgency. Staff receive dynamic task lists that adapt in real-time, ensuring
                              high-impact work gets done first. With built-in time tracking and completion analytics,
                              managers can optimize workflows and recognize top performers while staff stay focused on
                              what matters most.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Bell className="h-5 w-5 text-green-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-lg">Smart Alert System</h4>
                            <p className="text-slate-600 leading-relaxed">
                              Never miss a critical moment with our intelligent notification system that learns your
                              hotel's rhythm. Urgent guest requests trigger immediate alerts to the nearest available
                              staff member, while routine tasks are batched to avoid notification fatigue. The system
                              adapts to each team member's role and shift patterns, ensuring night auditors aren't
                              disturbed during day shifts and housekeeping receives priority alerts during turnover
                              hours.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MessageSquare className="h-5 w-5 text-green-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-lg">Seamless Team Coordination</h4>
                            <p className="text-slate-600 leading-relaxed">
                              Break down departmental silos with our integrated communication hub that keeps everyone
                              connected. Housekeeping can instantly notify maintenance about room issues, front desk can
                              alert housekeeping about early arrivals, and managers can broadcast important updates to
                              all staff simultaneously. With automatic translation for multilingual teams and smart
                              message routing, communication barriers disappear, creating a truly unified operation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Image Placeholder</h4>
                      <div className="h-32 bg-slate-200 rounded flex items-center justify-center text-slate-500">
                        Staff App Mobile Interface
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Manager Dashboard Section */}
          <div className="mb-20">
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-0">
                <CardHeader className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-12">
                  <div className="flex items-center mb-4">
                    <Monitor className="h-12 w-12 mr-4" />
                    <CardTitle className="text-4xl font-bold">Manager Dashboard</CardTitle>
                  </div>
                  <CardDescription className="text-purple-100 text-lg">
                    Comprehensive oversight and analytics for data-driven decisions
                  </CardDescription>
                  <div className="mt-6">
                    <Badge variant="secondary" className="bg-purple-500 text-white">
                      Management Analytics
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-slate-800">Key Features</h3>
                      <div className="grid gap-6">
                        <div className="flex items-start space-x-3">
                          <BarChart3 className="h-5 w-5 text-purple-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-lg">Predictive Operations Analytics</h4>
                            <p className="text-slate-600 leading-relaxed">
                              Transform raw data into actionable insights with our advanced analytics engine. Monitor
                              guest satisfaction scores in real-time, predict maintenance needs before equipment fails,
                              and optimize staff scheduling based on historical patterns and upcoming events. Our
                              machine learning algorithms identify revenue opportunities, detect operational
                              bottlenecks, and provide personalized recommendations that help you stay ahead of problems
                              rather than react to them.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <TrendingUp className="h-5 w-5 text-purple-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-lg">360° Performance Intelligence</h4>
                            <p className="text-slate-600 leading-relaxed">
                              Unlock your team's full potential with comprehensive performance insights that go beyond
                              basic metrics. Track individual and departmental productivity, identify training
                              opportunities, and celebrate achievements with data-driven recognition programs. Our
                              performance dashboard reveals hidden patterns in guest satisfaction, operational
                              efficiency, and revenue generation, empowering you to make strategic decisions that drive
                              both profitability and employee engagement.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Shield className="h-5 w-5 text-purple-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-lg">Centralized Command Center</h4>
                            <p className="text-slate-600 leading-relaxed">
                              Orchestrate your entire operation from a single, intuitive dashboard that puts you in
                              complete control. Monitor all departments simultaneously, reassign tasks on the fly, and
                              respond to emergencies with military precision. Our centralized system provides bird's-eye
                              visibility into every aspect of your hotel while maintaining the flexibility to drill down
                              into specific issues. From staff scheduling to guest experience management, everything
                              flows through one powerful command center.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Image Placeholder</h4>
                      <div className="h-32 bg-slate-200 rounded flex items-center justify-center text-slate-500">
                        Manager Dashboard Analytics View
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hotel Operations?</h2>
                <p className="text-xl mb-8 text-emerald-100">
                  Join our exclusive pilot program and be among the first to experience the future of hotel management.
                </p>
                <Link href="/#contact">
                  <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-slate-100">
                    Apply for Pilot Program
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
