import { ReactNode } from "react"

interface FeatureItemProps {
  icon: ReactNode
  title: string
  body: string
  result: string
}

export default function FeatureItem({ icon, title, body, result }: FeatureItemProps) {
  return (
    <div className="rounded-lg border border-gray-200/60 bg-white/70 backdrop-blur-sm p-3 shadow-sm">
      <div className="flex items-start space-x-2">
        <div className="flex-shrink-0 mt-0.5" aria-hidden="true">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-sm text-gray-900">{title}</h3>
          <p className="text-gray-700 text-xs leading-relaxed mt-1">
            {body}
          </p>
          <div className="mt-2 text-xs font-medium text-emerald-500">
            {result}
          </div>
        </div>
      </div>
    </div>
  )
}
