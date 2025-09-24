import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  body: string
  result?: string
  className?: string
}

export default function FeatureCard({ icon, title, body, result, className = "" }: FeatureCardProps) {
  return (
    <div className={`rounded-2xl bg-white/90 backdrop-blur p-8 text-center shadow-[0_6px_24px_-8px_rgba(16,24,40,.15)] ring-1 ring-black/5 transition hover:shadow-[0_10px_32px_-8px_rgba(16,24,40,.2)] ${className}`}>
      <div className="h-10 mb-3 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-emerald-600">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm leading-6">
        {body}
        {result && (
          <span className="block mt-2 text-emerald-700 font-medium">
            Result: {result}
          </span>
        )}
      </p>
    </div>
  )
}
