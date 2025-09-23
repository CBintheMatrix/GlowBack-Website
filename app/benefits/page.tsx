import { CheckCircle, TrendingUp, Users, Shield, Zap, Star, Heart, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function BenefitsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-6">Transform Your Hotel Operations</h1>
              <p className="text-xl text-slate-200 mb-8">
                Discover how Glowback delivers measurable results that impact your bottom line, guest satisfaction, and
                operational efficiency from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Main Benefits Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Operational Dominance */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                    <TrendingUp className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Operational Dominance</h2>
                </div>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Eliminate the hidden costs of slow response times. Glowback routes every guest request in real time,
                  reducing delays that frustrate guests and exhaust staff. No more radios, no more missed calls, no more
                  scrambling.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Instant Task Assignment</h4>
                      <p className="text-slate-600">Every request goes to the right staff member instantly.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Live Status Tracking</h4>
                      <p className="text-slate-600">
                        Managers see every request from submission to completion in real time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Bottleneck Prevention</h4>
                      <p className="text-slate-600">
                        Predictive workload insights stop small issues from spiraling into guest complaints.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest Reputation Advantage */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Guest Reputation Advantage</h2>
                </div>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Every request is an opportunity to impress — and every impression feeds your OTA scores. Glowback
                  transforms complaints into wins by making service visible, transparent, and fast.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Direct Line to Service</h4>
                      <p className="text-slate-600">Guests connect instantly without waiting at the front desk.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Visible Progress</h4>
                      <p className="text-slate-600">
                        Guests see when their request is received, assigned, and completed.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Fewer Bad Reviews</h4>
                      <p className="text-slate-600">Issues are solved before they become complaints online.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Staff Power & Control */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-xl mr-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Staff Power & Control</h2>
                </div>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Confident staff deliver exceptional service. Glowback equips your team with clarity and recognition,
                  so they perform better and stay motivated.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Unified Mobile Hub</h4>
                      <p className="text-slate-600">Every request, update, and task in one streamlined app.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Real-Time Accountability</h4>
                      <p className="text-slate-600">Managers and staff see task ownership and status in real time.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Recognition Metrics</h4>
                      <p className="text-slate-600">Staff are rewarded with feedback that celebrates performance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intelligence for Managers */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Intelligence for Managers</h2>
                </div>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Stop running on gut feel. Start running on insight. Glowback's analytics show you exactly where money
                  is lost, staff are overworked and opportunities for upsell are missed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Operational Metrics</h4>
                      <p className="text-slate-600">Response times, staff productivity, completion rates all live.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Behavior Analytics</h4>
                      <p className="text-slate-600">
                        Understand what guests actually want and where demand is shifting.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Maintenance Alerts</h4>
                      <p className="text-slate-600">
                        Detect issues before they break service, saving cost and reputation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/90 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Immediate Business Impact</h2>
              <p className="text-xl text-slate-300">
                Real results that transform your hotel's performance from day one
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Revenue Growth */}
              <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 rounded-2xl p-8 border border-emerald-500/30 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-500/20 p-3 rounded-xl mr-4">
                    <TrendingUp className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Revenue Growth</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-emerald-100 mb-1">Higher OTA Rankings</h4>
                      <p className="text-slate-300 text-sm">
                        Faster responses and fewer complaints drive stronger reviews, boosting visibility on
                        Booking.com, Agoda, and Expedia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Target className="h-5 w-5 text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-emerald-100 mb-1">Upsell Opportunities</h4>
                      <p className="text-slate-300 text-sm">
                        Room tablets become sales channels for tours, restaurants, and spa bookings, driving ancillary
                        revenue
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="h-5 w-5 text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-emerald-100 mb-1">Guest Loyalty</h4>
                      <p className="text-slate-300 text-sm">
                        Exceptional service experiences increase direct bookings and reduce OTA dependency
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Excellence */}
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500/20 p-3 rounded-xl mr-4">
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Risk Reduction</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-100 mb-1">Fewer Negative Reviews</h4>
                      <p className="text-slate-300 text-sm">
                        Problems get resolved instantly, before guests have time to write about them later
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-100 mb-1">Proactive Maintenance</h4>
                      <p className="text-slate-300 text-sm">
                        Issues logged immediately are cheaper to fix than dealing with equipment breakdowns later
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-100 mb-1">Staff Retention</h4>
                      <p className="text-slate-300 text-sm">
                        Organized workflows reduce stress and blame-shifting, keeping your best team members longer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitive Advantage */}
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-500/20 p-3 rounded-xl mr-4">
                    <Zap className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Market Position</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-100 mb-1">Brand Differentiation</h4>
                      <p className="text-slate-300 text-sm">
                        Market yourself as "tech-forward" and "guest-first," attracting younger, higher-value travelers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-100 mb-1">Guest Demographics</h4>
                      <p className="text-slate-300 text-sm">
                        Appeal to tech-savvy guests who expect seamless digital experiences during their stay
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-100 mb-1">Future-Ready Operations</h4>
                      <p className="text-slate-300 text-sm">
                        Stay ahead of industry trends with a platform that evolves with hospitality technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-600/30 to-blue-600/30 rounded-2xl p-8 border border-emerald-500/30 backdrop-blur-sm max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Join the Elite Hotels Leading Innovation</h3>
                <p className="text-slate-200 mb-6">
                  Don't let your competitors gain the advantage. Secure your position as a forward-thinking hotel that
                  prioritizes both guest satisfaction and operational excellence.
                </p>
                <Link href="/pilot">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                    Apply for Founding Partner Status
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
