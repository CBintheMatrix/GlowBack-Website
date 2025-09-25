import {
  Tablet,
  Smartphone,
  Monitor,
  MessageSquare,
  Users,
  Clock,
  CheckCircle,
  Bell,
  BarChart3,
  TrendingUp,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Hero from "../../components/ui/hero"
import Section from "../../components/site/section"
import ProductBlock from "../../components/site/product-block"
import FeatureItem from "../../components/site/feature-item"
import MiniCta from "../../components/site/mini-cta"
import CtaBanner from "../../components/ui/cta-banner"

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,.08),transparent_60%)]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-green-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <Hero
          headline="Our Services"
          subline="Comprehensive hotel operations platform with three integrated solutions designed to streamline every aspect of your property management."
          primaryCta={{
            text: "Apply for Pilot Program",
            href: "/pilot"
          }}
          secondaryCta={{
            text: "See How It Works", 
            href: "/#demo"
          }}
        />

        <div className="bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.08),transparent_60%)]">
          <div className="space-y-20 md:space-y-28">
            
            <Section>
              <ProductBlock
                title="Guest Tablet"
                kicker="Guest Experience"
                color="blue"
                side="left"
                imageUrl="/Tablet.png"
              >
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-wider text-emerald-500/80 mb-2">
                      Guest Experience
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-500">
                    Guest Tablet
                  </h3>
                          </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <FeatureItem
                    icon={<MessageSquare className="h-5 w-5 text-emerald-500" />}
                    title="Instant Service at Their Fingertips"
                    body="One tap requests for towels, cleaning, maintenance or amenities. No phone calls needed."
                    result="Faster responses, fewer complaints."
                  />
                  <FeatureItem
                    icon={<Users className="h-5 w-5 text-emerald-500" />}
                    title="Seamless Guest–Staff Communication"
                    body="100+ language support with instant translation. Guests type naturally, staff get clear instructions."
                    result="Clearer communication, happier guests."
                  />
                  <FeatureItem
                    icon={<Clock className="h-5 w-5 text-emerald-500" />}
                    title="Transparent Service Tracking"
                    body="Live status updates from accepted to completed. Managers see everything without chasing."
                    result="Less chasing, more control."
                  />
                          </div>
                <div className="mt-8">
                  <MiniCta label="See it in action →" href="/pilot" />
                        </div>
              </ProductBlock>
            </Section>

            <Section>
              <ProductBlock
                title="Staff App"
                kicker="Staff Operations"
                color="green"
                side="right"
                imageUrl="/Phone.png"
              >
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-wider text-emerald-500/80 mb-2">
                      Staff Operations
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-500">
                    Staff App
                  </h3>
                          </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <FeatureItem
                    icon={<CheckCircle className="h-5 w-5 text-emerald-500" />}
                    title="Task Management That Flows"
                    body="Clear job assignments in real time. Staff know exactly what to do next, managers see progress."
                    result="Smoother shifts, faster service."
                  />
                  <FeatureItem
                    icon={<Bell className="h-5 w-5 text-emerald-500" />}
                    title="Instant Alerts Where It Counts"
                    body="Critical requests go to the right person immediately. Routine jobs flow steadily without distraction."
                    result="Guests feel cared for, staff stay focused."
                  />
                  <FeatureItem
                    icon={<MessageSquare className="h-5 w-5 text-emerald-500" />}
                    title="Built-In Accountability"
                    body="Individual staff IDs with timestamped jobs. Managers see who's working, staff have proof of their work."
                    result="Fair tracking, stronger trust."
                  />
                      </div>
                <div className="mt-8">
                  <MiniCta label="See it in action →" href="/pilot" />
                    </div>
              </ProductBlock>
            </Section>

            <Section>
              <ProductBlock
                title="Manager Dashboard"
                kicker="Manager Oversight"
                color="purple"
                side="left"
                imageUrl="/Manager Dashboard.png"
              >
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-wider text-emerald-500/80 mb-2">
                    Manager Oversight
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-500">
                    Manager Dashboard
                  </h3>
              </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <FeatureItem
                    icon={<BarChart3 className="h-5 w-5 text-emerald-500" />}
                    title="Live Operations Oversight"
                    body="See every active request and staff action in real time. No more chasing updates."
                    result="Issues resolved faster, operations stay in control."
                  />
                  <FeatureItem
                    icon={<TrendingUp className="h-5 w-5 text-emerald-500" />}
                    title="Staff Performance Visibility"
                    body="Every job logged with timestamps. See who's delivering on standards and where service is slipping."
                    result="Fair system that raises performance."
                  />
                  <FeatureItem
                    icon={<Shield className="h-5 w-5 text-emerald-500" />}
                    title="Centralized Control Hub"
                    body="Single dashboard for requests, staff actions and guest feedback. High-level view and task-level detail."
                    result="Cleaner workflows, fewer service gaps."
                  />
                  </div>
                <div className="mt-8">
                  <MiniCta label="See it in action →" href="/pilot" />
                  </div>
              </ProductBlock>
            </Section>

          </div>
        </div>

        <CtaBanner
          headline="Applications Open for Glowback's 2026 Pilot Program"
          subline="A limited number of hotels will be selected to join our founding circle and secure lifetime partner rates."
          button={{
            text: "Apply for Pilot",
            href: "/pilot"
          }}
        />

        <Footer />
      </div>
    </div>
  )
}