import Link from "next/link"

interface CtaBannerProps {
  headline: string
  subline: string
  button: {
    text: string
    href: string
  }
}

export default function CtaBanner({ headline, subline, button }: CtaBannerProps) {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-5xl md:max-w-6xl mx-auto px-4">
        <div className="rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-500">
            {headline}
          </h2>
          <p className="mt-2 text-emerald-900/80">
            {subline}
          </p>
          <Link
            href={button.href}
            className="mt-6 inline-flex h-12 px-6 items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all duration-300"
          >
            {button.text}
          </Link>
        </div>
      </div>
    </section>
  )
}
