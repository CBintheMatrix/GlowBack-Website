import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Target, Users, Shield, Award, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-800 text-center">
              About Glowback
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-600 text-center max-w-3xl mx-auto">
              We're revolutionizing the hospitality industry by transforming traditional hotels into intelligent,
              connected ecosystems where technology serves humanity, not the other way around.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-8 w-8 text-emerald-600" />
                <h2 className="text-xl md:text-2xl font-bold text-emerald-700">Our Mission</h2>
              </div>
              <div className="mt-3 text-slate-700 leading-relaxed space-y-4">
                <p>
                  To eliminate the friction between guest desires and hotel operations, creating seamless experiences
                  that feel effortless yet deliver extraordinary results.
                </p>
                <p>
                  Every interaction should feel intuitive, every request should be anticipated and every stay should
                  leave guests wondering how everything worked so perfectly behind the scenes.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="h-8 w-8 text-emerald-600" />
                <h2 className="text-xl md:text-2xl font-bold text-emerald-700">Our Vision</h2>
              </div>
              <div className="mt-3 text-slate-700 leading-relaxed space-y-4">
                <p>
                  A world where hospitality technology amplifies human connection rather than replacing it, where staff
                  can focus on creating memorable moments instead of managing systems.
                </p>
                <p>
                  We envision hotels as living, breathing ecosystems that learn, adapt and evolve with every guest
                  interaction, continuously improving the art of hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-16 md:py-20">
          <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-8 w-8 text-emerald-600" />
              <h2 className="text-xl md:text-2xl font-bold text-emerald-700">Our Story</h2>
            </div>
            <div className="mt-3 text-slate-700 leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                Glowback was born from a simple observation: the hospitality industry's greatest asset — human
                connection — was being buried under layers of inefficient technology and fragmented systems.
              </p>
              <p>
                Our founders witnessed firsthand how hotel staff spent more time fighting with outdated systems than
                creating exceptional guest experiences. Meanwhile, guests were left frustrated by slow service and
                impersonal interactions, despite staying at properties that genuinely cared about their satisfaction.
              </p>
              <p>
                We realized that the solution wasn't just better software—it was intelligent software that could
                anticipate needs, streamline operations, and give staff the superpowers they needed to deliver
                hospitality that guests would never forget.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-800 text-center">Leadership Team</h2>
            <p className="mt-2 text-slate-600 text-center max-w-3xl mx-auto">
              Meet the visionaries transforming hospitality technology
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-700">Leadership Team</h3>
              </div>
              <p className="text-sm text-slate-500 mb-3">Experienced Leadership</p>
              <p className="text-slate-700 leading-relaxed">
                Our leadership team brings together decades of combined experience in hospitality technology, 
                operations management, and industry innovation to drive Glowback's mission forward.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-700">Industry Expertise</h3>
              </div>
              <p className="text-sm text-slate-500 mb-3">Deep Hospitality Knowledge</p>
              <p className="text-slate-700 leading-relaxed">
                Our team's deep understanding of hotel operations and industry relationships ensures our solutions 
                address real-world challenges that matter to property managers and staff.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-700">Strategic Vision</h3>
              </div>
              <p className="text-sm text-slate-500 mb-3">Future-Focused</p>
              <p className="text-slate-700 leading-relaxed">
                Strategic guidance and industry thought leadership ensure Glowback stays aligned with the evolving 
                needs of modern hotel operations and guest expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-800 text-center">Our Values</h2>
            <p className="mt-2 text-slate-600 text-center max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-emerald-600" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-700">Human-First Technology</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Technology should enhance human capabilities, not replace human connection. Every feature we build
                amplifies what makes hospitality special.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-emerald-600" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-700">Operational Excellence</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                We obsess over the details that matter to daily operations. If it doesn't make staff more effective
                or guests happier, we don't build it.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-6 w-6 text-emerald-600" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-700">Continuous Innovation</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                The hospitality industry evolves constantly. We stay ahead by listening to our partners and
                anticipating tomorrow's challenges today.
              </p>
            </div>
          </div>
        </div>

        {/* Trust & Security */}
        <div className="py-16 md:py-20">
          <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-emerald-600" />
              <h2 className="text-xl md:text-2xl font-bold text-emerald-700">Trust & Security</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-6">
              Hotels trust us with their most sensitive operations and guest data. We take this responsibility
              seriously with enterprise grade security, transparent practices and scalable architecture.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-slate-800">Data Protection</h4>
                <p className="text-slate-700">
                  End to end encryption, SOC 2 compliance and GDPR adherence ensure guest information stays protected
                  at every touchpoint.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-slate-800">Reliable Infrastructure</h4>
                <p className="text-slate-700">
                  99.9% uptime guarantee with redundant systems and real time monitoring because hotel operations
                  never sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
