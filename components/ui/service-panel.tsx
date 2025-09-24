import { ReactNode } from "react"

interface ServicePanelProps {
  title: string
  description: string
  icon: ReactNode
  color: "blue" | "green" | "purple"
  children: ReactNode
  reverse?: boolean
}

export default function ServicePanel({ title, description, icon, color, children, reverse = false }: ServicePanelProps) {
  const colorClasses = {
    blue: "from-blue-600 to-blue-700",
    green: "from-green-600 to-green-700", 
    purple: "from-purple-600 to-purple-700"
  }

  const iconColorClasses = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600"
  }

  return (
    <div className="mb-20">
      <div className="rounded-2xl bg-white/90 backdrop-blur shadow-[0_6px_24px_-8px_rgba(16,24,40,.15)] ring-1 ring-black/5 overflow-hidden">
        <div className={`grid lg:grid-cols-2 gap-0 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={`bg-gradient-to-br ${colorClasses[color]} text-white p-8 md:p-12 ${reverse ? 'lg:order-2' : ''}`}>
            <div className="flex items-center mb-4">
              <div className={`h-12 w-12 mr-4 ${iconColorClasses[color]} bg-white/20 rounded-lg flex items-center justify-center`}>
                {icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
            </div>
            <p className="text-white/90 text-lg">
              {description}
            </p>
          </div>
          
          <div className={`p-8 md:p-12 ${reverse ? 'lg:order-1' : ''} bg-white`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
