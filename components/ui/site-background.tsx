import { ReactNode } from "react"

interface SiteBackgroundProps {
  children: ReactNode
}

export default function SiteBackground({ children }: SiteBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,.08),transparent_60%)]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-green-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
