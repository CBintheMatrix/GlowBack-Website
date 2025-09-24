import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  )
}
