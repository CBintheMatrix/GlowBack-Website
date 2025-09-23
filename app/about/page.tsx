import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Shield, Award, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="container max-w-screen-2xl py-24">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-20">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              About Glowback
            </h1>
            <p className="mx-auto max-w-[60rem] text-xl text-muted-foreground leading-relaxed">
              We're revolutionizing the hospitality industry by transforming traditional hotels into intelligent,
              connected ecosystems where technology serves humanity, not the other way around.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid gap-8 md:grid-cols-2 mb-20">
            <Card className="bg-background/60 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-emerald-500" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To eliminate the friction between guest desires and hotel operations, creating seamless experiences
                  that feel effortless yet deliver extraordinary results.
                </p>
                <p className="text-muted-foreground">
                  Every interaction should feel intuitive, every request should be anticipated and every stay should
                  leave guests wondering how everything worked so perfectly behind the scenes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where hospitality technology amplifies human connection rather than replacing it, where staff
                  can focus on creating memorable moments instead of managing systems.
                </p>
                <p className="text-muted-foreground">
                  We envision hotels as living, breathing ecosystems that learn, adapt and evolve with every guest
                  interaction, continuously improving the art of hospitality.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <Card className="bg-background/60 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-rose-500" />
                  <CardTitle className="text-2xl">Our Story</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Glowback was born from a simple observation: the hospitality industry's greatest asset — human
                  connection — was being buried under layers of inefficient technology and fragmented systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our founders witnessed firsthand how hotel staff spent more time fighting with outdated systems than
                  creating exceptional guest experiences. Meanwhile, guests were left frustrated by slow service and
                  impersonal interactions, despite staying at properties that genuinely cared about their satisfaction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We realized that the solution wasn't just better software—it was intelligent software that could
                  anticipate needs, streamline operations, and give staff the superpowers they needed to deliver
                  hospitality that guests would never forget.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Leadership Team</h2>
              <p className="mx-auto max-w-[42rem] text-muted-foreground text-lg">
                Meet the visionaries transforming hospitality technology
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-emerald-500" />
                    <CardTitle>Leadership Team</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Experienced Leadership</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our leadership team brings together decades of combined experience in hospitality technology, 
                    operations management, and industry innovation to drive Glowback's mission forward.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-blue-500" />
                    <CardTitle>Industry Expertise</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Deep Hospitality Knowledge</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team's deep understanding of hotel operations and industry relationships ensures our solutions 
                    address real-world challenges that matter to property managers and staff.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-purple-500" />
                    <CardTitle>Strategic Vision</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Future-Focused</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic guidance and industry thought leadership ensure Glowback stays aligned with the evolving 
                    needs of modern hotel operations and guest expectations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
              <p className="mx-auto max-w-[42rem] text-muted-foreground text-lg">
                The principles that guide everything we build
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-emerald-500" />
                    <CardTitle className="text-lg">Human-First Technology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Technology should enhance human capabilities, not replace human connection. Every feature we build
                    amplifies what makes hospitality special.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-blue-500" />
                    <CardTitle className="text-lg">Operational Excellence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We obsess over the details that matter to daily operations. If it doesn't make staff more effective
                    or guests happier, we don't build it.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="h-6 w-6 text-purple-500" />
                    <CardTitle className="text-lg">Continuous Innovation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The hospitality industry evolves constantly. We stay ahead by listening to our partners and
                    anticipating tomorrow's challenges today.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust & Security */}
          <Card className="bg-background/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-emerald-500" />
                <CardTitle className="text-2xl">Trust & Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hotels trust us with their most sensitive operations and guest data. We take this responsibility
                seriously with enterprise grade security, transparent practices and scalable architecture.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Data Protection</h4>
                  <p className="text-sm text-muted-foreground">
                    End to end encryption, SOC 2 compliance and GDPR adherence ensure guest information stays protected
                    at every touchpoint.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reliable Infrastructure</h4>
                  <p className="text-sm text-muted-foreground">
                    99.9% uptime guarantee with redundant systems and real time monitoring because hotel operations
                    never sleep.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
