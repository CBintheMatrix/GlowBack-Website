import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <div className="relative">
            <Image
              src="/glowback-logo.svg"
              alt="Glowback Logo"
              width={32}
              height={32}
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>
          <span className="font-bold text-xl group-hover:text-green-500 transition-colors duration-300">Glowback</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/benefits" className="transition-colors hover:text-primary">
            Benefits
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/roadmap" className="transition-colors hover:text-primary">
            Our Future
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="mailto:hello@glowback.io">
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </Link>
          <Link href="/pilot">
            <Button size="sm">Apply for Pilot</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
