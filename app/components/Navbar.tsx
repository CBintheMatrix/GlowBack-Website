import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/glowback-logo-new.svg"
                alt="Glowback Logo"
                width={32}
                height={32}
                className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent group-hover:from-green-300 group-hover:to-emerald-400 transition-all duration-300">
                Glowback
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Pricing
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Resources
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Community
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Download
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
            <Button className="text-sm bg-gradient-to-r from-primary to-accent hover:opacity-90">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
