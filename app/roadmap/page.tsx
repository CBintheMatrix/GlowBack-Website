import { Brain, Zap, Shield, Globe, Heart, Sparkles } from "lucide-react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function OurFuturePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-500">
              Our Future
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-800 max-w-3xl mx-auto">
              We're building toward a hospitality world where technology feels invisible, service feels effortless and teams feel fully supported. This page outlines the direction we're taking: what we're shaping with partners, not promises we can't keep.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                Innovation
              </span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                Vision
              </span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                Human-First
              </span>
            </div>
          </div>
        </div>

        {/* Background gradient */}
        <div className="bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.08),transparent_60%)]">
          <div className="space-y-16 md:space-y-20">
            
            {/* Section 1: Intelligent Operations */}
            <div className="py-16 md:py-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-500 mb-4">
                  Intelligent Operations
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Card A */}
                <div className="bg-emerald-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200/50 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                        Vision
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">Predictive Assistance</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    Systems that learn common patterns and surface the next best action for staff. Requests get routed clearly, small issues are caught earlier and managers gain signal without extra steps.
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Exploration Areas</h4>
                    <ul className="text-sm text-slate-800 space-y-2">
                      <li>• Live demand patterns</li>
                      <li>• Suggested task routing</li>
                      <li>• Early maintenance signals</li>
                    </ul>
                  </div>
                </div>

                {/* Card B */}
                <div className="bg-emerald-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200/50 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                        Vision
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">Instant Everything</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    Zero-delay communication for guest requests and internal updates. The right person gets the right task with full context, then everyone sees progress without chasing.
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Exploration Areas</h4>
                    <ul className="text-sm text-slate-800 space-y-2">
                      <li>• Sub-second handoffs</li>
                      <li>• Real-time status clarity</li>
                      <li>• Smart escalations</li>
                    </ul>
                  </div>
                </div>

                {/* Card C */}
                <div className="bg-emerald-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200/50 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                        Vision
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">Clear Accountability</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    Transparent ownership from request to resolution. Teams know what's next, managers see where help is needed and guests feel looked after from the first tap to the final check.
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Exploration Areas</h4>
                    <ul className="text-sm text-slate-800 space-y-2">
                      <li>• Time-stamped workflows</li>
                      <li>• Bottleneck flags</li>
                      <li>• Follow-through nudges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Global Standards */}
            <div className="py-16 md:py-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-500 mb-4">
                  Global Standards
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Card A */}
                <div className="bg-emerald-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200/50 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Globe className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                        Vision
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">Consistency Across Properties</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    A framework that helps any hotel deliver the same reliable experience shift after shift. Local personality stays; operational clarity scales.
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Foundations</h4>
                    <ul className="text-sm text-slate-800 space-y-2">
                      <li>• Shared service playbooks</li>
                      <li>• Cross-culture readiness</li>
                      <li>• Scalable configurations</li>
                    </ul>
                  </div>
                </div>

                {/* Card B */}
                <div className="bg-emerald-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200/50 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Sparkles className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                        Vision
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">Modern Guest Expectations</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    Digital-first travelers expect smooth, simple and responsive service. We're designing the plumbing that lets hotels meet that bar without adding complexity.
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Focus</h4>
                    <ul className="text-sm text-slate-800 space-y-2">
                      <li>• Clear communications</li>
                      <li>• Friction-light requests</li>
                      <li>• Thoughtful follow-up</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Human-Centered Innovation */}
            <div className="py-16 md:py-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-500 mb-4">
                  Human-Centered Innovation
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Card A */}
                <div className="bg-emerald-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200/50 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                        Vision
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">Empowered Teams</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    Tools that remove busywork and boost confidence. Staff have context, managers have clarity and great service becomes the default, not the exception.
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">What We Prioritize</h4>
                    <ul className="text-sm text-slate-800 space-y-2">
                      <li>• Guidance, not guesswork</li>
                      <li>• Reduced admin load</li>
                      <li>• Skill growth over time</li>
                    </ul>
                  </div>
                </div>

                {/* Card B */}
                <div className="bg-emerald-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200/50 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <Brain className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                        Vision
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">Responsible AI</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    AI should enhance judgment, not replace it. We're exploring features that assist decisions, keep humans in control and respect privacy from the start.
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Guardrails</h4>
                    <ul className="text-sm text-slate-800 space-y-2">
                      <li>• Human-in-the-loop design</li>
                      <li>• Clear data boundaries</li>
                      <li>• Explainable suggestions</li>
                    </ul>
                  </div>
                </div>

                {/* Card C */}
                <div className="bg-emerald-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200/50 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 text-xs font-medium">
                        Vision
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">Sustainable Operations</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    Smarter use of resources and fewer preventable issues. The aim is simple: reduce waste while improving comfort and reliability for guests.
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Focus</h4>
                    <ul className="text-sm text-slate-800 space-y-2">
                      <li>• Energy awareness</li>
                      <li>• Resource efficiency</li>
                      <li>• Longevity over quick fixes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Final CTA */}
        <div className="py-16 md:py-20">
          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-500 mb-4">
              Build the Future with Us
            </h2>
            <p className="text-lg text-slate-800 mb-8 max-w-3xl mx-auto">
              We're developing this roadmap with partner hotels that want simple systems and standout service. If that sounds like you, let's explore it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pilot" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 px-6 inline-flex items-center justify-center font-semibold transition-colors"
              >
                Join Our Vision
              </a>
              <a 
                href="/#demo" 
                className="bg-white text-emerald-700 border border-emerald-200 hover:border-emerald-300 rounded-xl h-12 px-5 inline-flex items-center justify-center font-semibold transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}