import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4">
        {/* Logo - Left side */}
        <div className="flex items-center space-x-3 group w-1/3">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/GlowBack Logo.png"
                alt="Glowback Logo"
                width={36}
                height={36}
                className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-emerald-500 to-emerald-500 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-emerald-400 transition-all duration-300">Glowback</span>
          </Link>
        </div>
        
        {/* Navigation Links - Center */}
        <nav className="hidden md:flex items-start justify-center w-1/3 space-x-8 text-sm font-medium pt-6">
          <Link href="/services" className="text-emerald-500 hover:text-emerald-600 transition-colors duration-200 font-semibold">
            Services
          </Link>
          <Link href="/benefits" className="text-emerald-500 hover:text-emerald-600 transition-colors duration-200 font-semibold">
            Benefits
          </Link>
          <Link href="/about" className="text-emerald-500 hover:text-emerald-600 transition-colors duration-200 font-semibold">
            About
          </Link>
          <Link href="/roadmap" className="text-emerald-500 hover:text-emerald-600 transition-colors duration-200 font-semibold">
            Our Future
          </Link>
        </nav>
        
        {/* Action Buttons - Right side */}
        <div className="flex items-center justify-end space-x-3 w-1/3">
          <Link href="mailto:hello@glowback.io">
            <Button variant="ghost" size="icon" className="text-black hover:text-emerald-600 hover:bg-emerald-50">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="ghost" size="sm" className="text-black hover:text-emerald-600 hover:bg-emerald-50">
              Contact
            </Button>
          </Link>
          <Link href="/pilot">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Apply for Pilot
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}