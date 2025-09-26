import Link from "next/link"

interface HeroProps {
  headline: string
  subline: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

export default function Hero({ headline, subline, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl md:max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-500 mb-6">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            {subline}
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <Link
              href={primaryCta.href}
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 px-6 font-semibold transition-all duration-300 flex items-center justify-center"
            >
              {primaryCta.text}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="bg-transparent text-emerald-600 ring-1 ring-emerald-600 hover:ring-emerald-700 rounded-xl h-12 px-6 font-semibold transition-all duration-300 flex items-center justify-center"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
