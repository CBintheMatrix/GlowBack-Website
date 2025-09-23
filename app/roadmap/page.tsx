import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Brain, Zap, Heart, Shield, Trophy, Sparkles, Rocket } from "lucide-react"
import Navbar from "@/components/navbar"

export default function OurFuturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-green-600/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl" />

      <div className="relative z-10">
        <Navbar />

        <div className="container max-w-screen-2xl py-24">
          <div className="text-center space-y-6 mb-20">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-white bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Our Future
            </h1>
            <p className="mx-auto max-w-[50rem] text-xl text-slate-200 leading-relaxed">
              We envision a world where hospitality technology creates seamless experiences, empowers staff, and
              transforms how hotels operate. Here's the future we're building together.
            </p>
            <div className="flex justify-center">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-slate-800/80 text-white border-slate-600/50"
              >
                Innovation • Vision • Impact
              </Badge>
            </div>
          </div>

          <div className="space-y-16">
            {/* Intelligent Operations */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Intelligent Operations</h2>
                <p className="text-lg text-slate-200 max-w-3xl mx-auto">
                  We see a future where AI and automation handle routine tasks, allowing your team to focus on creating
                  exceptional guest experiences and building meaningful connections.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Brain className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">Predictive Intelligence</CardTitle>
                        <Badge variant="outline" className="mt-1 border-purple-400/50 text-purple-400 bg-purple-600/30">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-200 leading-relaxed">
                      AI that anticipates guest needs before they're expressed, predicts maintenance requirements, and
                      optimizes staffing based on real-time demand patterns.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Future Capabilities:</h4>
                      <ul className="text-sm text-slate-200 space-y-1">
                        <li>• Predictive guest preferences</li>
                        <li>• Automated maintenance scheduling</li>
                        <li>• Dynamic staff optimization</li>
                        <li>• Proactive issue resolution</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Zap className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">Instant Everything</CardTitle>
                        <Badge variant="outline" className="mt-1 border-blue-400/50 text-blue-400 bg-blue-600/30">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-200 leading-relaxed">
                      Zero-delay communication where guest requests are instantly routed to the right team member, with
                      automatic follow-up and satisfaction tracking.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Instant Features:</h4>
                      <ul className="text-sm text-slate-200 space-y-1">
                        <li>• Sub-second request routing</li>
                        <li>• Real-time status updates</li>
                        <li>• Automatic escalation</li>
                        <li>• Instant feedback loops</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Global Impact */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Global Impact</h2>
                <p className="text-lg text-slate-200 max-w-3xl mx-auto">
                  Our vision extends beyond individual hotels to transform the entire hospitality industry, creating a
                  connected ecosystem that elevates standards worldwide.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <Globe className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">Universal Standards</CardTitle>
                        <Badge variant="outline" className="mt-1 border-green-400/50 text-green-400 bg-green-600/30">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-200 leading-relaxed">
                      A world where every hotel, regardless of size or location, can deliver five-star service through
                      intelligent technology and standardized excellence.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Global Vision:</h4>
                      <ul className="text-sm text-slate-200 space-y-1">
                        <li>• Consistent service quality</li>
                        <li>• Cross-cultural adaptation</li>
                        <li>• Scalable excellence</li>
                        <li>• Industry-wide standards</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-orange-500/20 rounded-lg">
                        <Sparkles className="h-6 w-6 text-orange-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">Magical Experiences</CardTitle>
                        <Badge variant="outline" className="mt-1 border-orange-400/50 text-orange-400 bg-orange-600/30">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-200 leading-relaxed">
                      Technology so seamless it becomes invisible, creating moments that feel like magic while
                      empowering staff to be their most creative and caring selves.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Magical Elements:</h4>
                      <ul className="text-sm text-slate-200 space-y-1">
                        <li>• Invisible technology</li>
                        <li>• Surprise & delight moments</li>
                        <li>• Personalized experiences</li>
                        <li>• Emotional connections</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Human-Centered Innovation */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Human-Centered Innovation</h2>
                <p className="text-lg text-slate-200 max-w-3xl mx-auto">
                  Technology should amplify human potential, not replace it. We're building tools that make staff more
                  effective, guests more delighted, and operations more sustainable.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-red-500/20 rounded-lg">
                        <Heart className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">Empowered Teams</CardTitle>
                        <Badge variant="outline" className="mt-1 border-red-400/50 text-red-400 bg-red-600/30">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-200 leading-relaxed">
                      Staff equipped with intelligent tools that eliminate frustration, provide instant insights, and
                      enable them to create memorable moments for every guest.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Team Empowerment:</h4>
                      <ul className="text-sm text-slate-200 space-y-1">
                        <li>• Intelligent assistance</li>
                        <li>• Reduced administrative burden</li>
                        <li>• Enhanced decision-making</li>
                        <li>• Career development tools</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-indigo-500/20 rounded-lg">
                        <Shield className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">Sustainable Operations</CardTitle>
                        <Badge variant="outline" className="mt-1 border-indigo-400/50 text-indigo-400 bg-indigo-600/30">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-200 leading-relaxed">
                      Smart resource management that reduces waste, optimizes energy usage, and creates environmentally
                      responsible operations without compromising guest comfort.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Sustainability Focus:</h4>
                      <ul className="text-sm text-slate-200 space-y-1">
                        <li>• Energy optimization</li>
                        <li>• Waste reduction</li>
                        <li>• Resource efficiency</li>
                        <li>• Carbon footprint tracking</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-teal-500/20 rounded-lg">
                        <Trophy className="h-6 w-6 text-teal-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">Industry Leadership</CardTitle>
                        <Badge variant="outline" className="mt-1 border-teal-400/50 text-teal-400 bg-teal-600/30">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-200 leading-relaxed">
                      Setting new benchmarks for hospitality technology, inspiring innovation across the industry, and
                      creating a legacy of excellence that transforms guest expectations.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Leadership Goals:</h4>
                      <ul className="text-sm text-slate-200 space-y-1">
                        <li>• Industry innovation</li>
                        <li>• Best practice standards</li>
                        <li>• Thought leadership</li>
                        <li>• Transformative impact</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border-white/20 shadow-xl max-w-4xl mx-auto backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  <Rocket className="h-12 w-12 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Build the Future with Us</h3>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                  This isn't just our vision—it's a future we're creating together. Join us in transforming hospitality
                  technology and shaping the experiences of tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                    Join Our Vision
                  </button>
                  <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
