import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Shield } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="container max-w-screen-2xl py-24">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Glowback</h2>
        <p className="mx-auto max-w-[42rem] text-muted-foreground sm:text-lg">
          Our mission is to transform hotels into intelligent service ecosystems
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-blue-500" />
              <CardTitle>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Transform hotels into intelligent service ecosystems where technology seamlessly connects guests, staff,
              and management for exceptional experiences.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-green-500" />
              <CardTitle>Our Team</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A dedicated team of hospitality technology experts, industry veterans, and innovation leaders working together to transform hotel operations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-purple-500" />
              <CardTitle>Trust & Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built with secure data handling and scalable architecture designed to grow with your hotel operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
