import { Metadata } from "next"
import { TrendingUp, Shield, Target } from "lucide-react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Hero from "../../components/ui/hero"
import Section from "../../components/site/section"
import ProductBlock from "../../components/site/product-block"
import FeatureItem from "../../components/site/feature-item"
import MiniCta from "../../components/site/mini-cta"
import CtaBanner from "../../components/ui/cta-banner"

export const metadata: Metadata = {
  title: "Benefits · Glowback",
  description: "Glowback benefits: revenue growth, risk reduction, and a future-ready market position for modern hotels.",
}

export default function BenefitsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <Hero
        headline="Immediate Business Impact"
        subline="Real results that transform your hotel's performance from day one."
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
              title="Revenue Growth"
              kicker="Business Impact"
              color="blue"
              side="left"
              imageUrl="/Revenue.png"
            >
              <div className="mb-8">
                <div className="text-xs uppercase tracking-wider text-emerald-500/80 mb-2">
                  Business Impact
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-500">
                  Revenue Growth
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <FeatureItem
                  icon={<TrendingUp className="h-5 w-5 text-emerald-500" />}
                  title="Elevated Visibility"
                  body="Stronger service leads to stronger impressions, keeping your property top of mind with travelers."
                  result="Faster responses, fewer complaints."
                />
                <FeatureItem
                  icon={<Target className="h-5 w-5 text-emerald-500" />}
                  title="Effortless Upsells"
                  body="Guest tablets open new pathways to showcase local experiences and services naturally."
                  result="Clearer communication, happier guests."
                />
                <FeatureItem
                  icon={<TrendingUp className="h-5 w-5 text-emerald-500" />}
                  title="Return Stays"
                  body="Guests remember when operations feel seamless — and they come back."
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
              title="Risk Reduction"
              kicker="Operational Security"
              color="green"
              side="right"
              imageUrl="/Risk.png"
            >
              <div className="mb-8">
                <div className="text-xs uppercase tracking-wider text-emerald-500/80 mb-2">
                  Operational Security
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-500">
                  Risk Reduction
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <FeatureItem
                  icon={<Shield className="h-5 w-5 text-emerald-500" />}
                  title="Silent Recovery"
                  body="Requests are handled before they become frustrations."
                  result="Guests feel cared for, staff stay focused."
                />
                <FeatureItem
                  icon={<Shield className="h-5 w-5 text-emerald-500" />}
                  title="Predictive Calm"
                  body="Bottlenecks are caught early, so issues don't spill over into complaints."
                  result="Fair tracking, stronger trust."
                />
                <FeatureItem
                  icon={<Shield className="h-5 w-5 text-emerald-500" />}
                  title="Stronger Teams"
                  body="Clearer processes reduce stress, keeping staff focused and steady."
                  result="Cleaner workflows, fewer service gaps."
                />
              </div>
              <div className="mt-8">
                <MiniCta label="See it in action →" href="/pilot" />
              </div>
            </ProductBlock>
          </Section>

          <Section>
            <ProductBlock
              title="Market Position"
              kicker="Competitive Advantage"
              color="purple"
              side="left"
              imageUrl="/Market Position.png"
            >
              <div className="mb-8">
                <div className="text-xs uppercase tracking-wider text-emerald-500/80 mb-2">
                  Competitive Advantage
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-500">
                  Market Position
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <FeatureItem
                  icon={<Target className="h-5 w-5 text-emerald-500" />}
                  title="Recognized Leadership"
                  body="Owners and partners see visible consistency without extra effort."
                  result="Issues resolved faster, operations stay in control."
                />
                <FeatureItem
                  icon={<Target className="h-5 w-5 text-emerald-500" />}
                  title="Guest Confidence"
                  body="Visitors sense when they're staying in a forward-thinking property."
                  result="Fair system that raises performance."
                />
                <FeatureItem
                  icon={<Target className="h-5 w-5 text-emerald-500" />}
                  title="Future-Proof Operations"
                  body="A system that evolves with hospitality's changing standards."
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
        headline="Join the Hotels Leading Innovation"
        subline="Secure your position as a forward-thinking hotel that delivers faster service, higher revenue and lasting guest loyalty."
        button={{
          text: "Apply for Founding Partner Status",
          href: "/pilot"
        }}
      />

      <Footer />
    </div>
  )
}