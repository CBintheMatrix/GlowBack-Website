import { ReactNode } from "react"

interface SectionProps {
  title: string
  subtitle?: string
  id?: string
  children: ReactNode
  className?: string
}

export default function Section({ title, subtitle, id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="max-w-5xl md:max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-700">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
