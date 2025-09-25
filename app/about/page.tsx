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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-500 text-center">
              About Glowback
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-600 text-center max-w-3xl mx-auto">
              Glowback is the invisible operating system for hotels. The best hospitality technology is the kind guests never notice, staff never fight against and managers never second-guess.
            </p>
            <p className="mt-4 text-base md:text-lg text-slate-600 text-center max-w-3xl mx-auto">
              Behind every towel request, shift handover or last-minute room change, Glowback makes the process seamless. What looks effortless to a guest is powered by clear workflows, live accountability and structure managers can rely on.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-8 w-8 text-emerald-500" />
                <h2 className="text-xl md:text-2xl font-bold text-emerald-500">Our Mission</h2>
              </div>
              <div className="mt-3 text-slate-800 leading-relaxed space-y-4">
                <p>
                  Glowback's mission is to reinvent hotel operations by creating one invisible system that connects guests, staff and managers in real time.
                </p>
                <p>
                  We deliver instant service, clear accountability and a foundation that allows hotels to evolve without adding complexity. Every feature is designed to cut through noise, strengthen trust between teams and make the guest experience unforgettable.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="h-8 w-8 text-emerald-500" />
                <h2 className="text-xl md:text-2xl font-bold text-emerald-500">Our Vision</h2>
              </div>
              <div className="mt-3 text-slate-800 leading-relaxed space-y-4">
                <p>
                  Glowback's vision is to set a new standard for hotel operations where technology is invisible yet transformative. Hotels powered by Glowback run with clarity, speed and consistency while staff focus fully on hospitality and guests remember the experience, not the process.
                </p>
                <p>
                  We see a future where every hotel becomes an intelligent ecosystem that adapts to its people and its environment. Glowback grows with every request and every shift until seamless service is not a luxury but the expectation worldwide.
                </p>
                <p>
                  AI is central to this future. Glowback integrates intelligence that learns from patterns, predicts guest needs and empowers staff with guidance in real time. By combining human hospitality with adaptive technology, we evolve what travel and hotel service look like, shifting from reactive problemsolving to proactive care that feels effortless.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-16 md:py-20">
          <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-8 w-8 text-emerald-500" />
              <h2 className="text-xl md:text-2xl font-bold text-emerald-500">Our Story</h2>
            </div>
            <div className="mt-3 text-slate-800 leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                Glowback exists because hotels need better systems. Even the most committed teams are held back by outdated processes. Phone calls create delays. Staff juggle paper notes and WhatsApp threads. Managers lack visibility across their property. The result is wasted time, frustrated staff and guests who feel overlooked.
              </p>
              <p>
                Glowback is built from the ground up, developed fully in-house as a platform designed for hospitality, not adapted from another industry. It connects guests, staff and managers in one seamless loop. Every request has a clear path from start to finish. Tasks are tracked in real time. Accountability is built in. Service becomes smoother because the systems behind the scenes finally work as they should.
              </p>
              <p>
                What begins as an idea is now a working platform, tested, refined and ready to support hotels that want to modernize without losing their human touch. Glowback is not another app to manage. It is the invisible operating system that makes hospitality faster, clearer and more consistent.
              </p>
              <p>
                Our story is about elevating what travel feels like. By removing friction from operations, Glowback allows staff to focus on people and lets guests experience service that feels effortless, personal and memorable.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-500 text-center">Leadership Team</h2>
            <p className="mt-2 text-slate-600 text-center max-w-3xl mx-auto">
              Guided by Service. Driven by Change. Building Forward.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-500">Guided by Hospitality</h3>
              </div>
              <p className="text-slate-800 leading-relaxed">
                Our focus is on keeping service human while making operations faster, clearer and easier to manage. Glowback is built around the idea that technology should quietly support great hospitality, not get in its way.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-500">Shaped by Change</h3>
              </div>
              <p className="text-slate-800 leading-relaxed">
                We design with agility, knowing the expectations of guests, staff and managers never stand still. Glowback adapts as the industry evolves, creating a platform that grows alongside the people who use it.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-500">Building Forward</h3>
              </div>
              <p className="text-slate-800 leading-relaxed">
                Our leadership steers Glowback with a future-ready mindset, ensuring that hotels are not only prepared for today's challenges but also positioned to benefit from the opportunities tomorrow brings.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-500 text-center">Our Values</h2>
            <p className="mt-2 text-slate-600 text-center max-w-3xl mx-auto">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-500">Human-First Technology</h3>
              </div>
              <p className="text-slate-800 leading-relaxed">
                Hospitality is about people. Glowback stays in the background so staff can connect and guests can relax.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-500">Operational Excellence</h3>
              </div>
              <p className="text-slate-800 leading-relaxed">
                Every detail matters. From instant service requests to live staff accountability, Glowback makes daily operations fluid.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl md:text-2xl font-bold text-emerald-500">Continuous Innovation</h3>
              </div>
              <p className="text-slate-800 leading-relaxed">
                Glowback evolves with pilot input. Every deployment teaches us how to make the platform sharper, faster and more resilient.
              </p>
            </div>
          </div>
        </div>

        {/* Security & Reliability */}
        <div className="py-16 md:py-20">
          <div className="rounded-2xl bg-emerald-100 p-8 ring-1 ring-emerald-200/50 shadow-[0_8px_24px_-10px_rgba(16,185,129,.15)] hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,.20)] transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-emerald-500" />
              <h2 className="text-xl md:text-2xl font-bold text-emerald-500">Security & Reliability</h2>
            </div>
            <p className="text-slate-800 leading-relaxed mb-6">
              Glowback uses encrypted data flows, role-based staff access and fault-tolerant infrastructure. As the platform scales, so does its capacity for compliance and enterprise-grade assurance.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
