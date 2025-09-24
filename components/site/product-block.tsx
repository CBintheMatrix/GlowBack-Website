import { ReactNode } from "react"
import Image from "next/image"

interface ProductBlockProps {
  title: string
  kicker: string
  color: "blue" | "green" | "purple"
  side: "left" | "right"
  children: ReactNode
  imageUrl?: string
}

export default function ProductBlock({ title, kicker, color, side, children, imageUrl }: ProductBlockProps) {
  const colorClasses = {
    blue: "bg-[#2563eb]",
    green: "bg-[#16a34a]",
    purple: "bg-[#7c3aed]"
  }

  return (
    <div className="grid lg:grid-cols-2 gap-0">
      <div className={`${side === "right" ? "lg:order-2" : ""}`}>
        {imageUrl ? (
          <div className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
            <Image
              src={imageUrl}
              alt={`${title} device`}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
            />
            {/* Fire effect overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-orange-500/20 via-transparent to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-orange-400/30 to-transparent"></div>
            </div>
          </div>
        ) : (
          <div className={`${colorClasses[color]} rounded-2xl p-10 text-white shadow-sm`}>
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-white/80">
                {kicker}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {title}
              </h2>
            </div>
          </div>
        )}
      </div>
      
      <div className={`p-10 ${side === "right" ? "lg:order-1" : ""}`}>
        {children}
      </div>
    </div>
  )
}
