import Link from "next/link"

interface MiniCtaProps {
  label: string
  href: string
}

export default function MiniCta({ label, href }: MiniCtaProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-600 transition-colors"
    >
      {label}
    </Link>
  )
}
