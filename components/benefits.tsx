import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Heart, Package, Star, TrendingUp, Shield } from "lucide-react"

export default function Benefits() {
  return (
    <section id="benefits" className="container max-w-screen-2xl py-24 bg-muted/50">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Glowback Matters</h2>
        <p className="mx-auto max-w-[42rem] text-muted-foreground sm:text-lg">
          Transform your hotel operations and deliver exceptional guest experiences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-yellow-500" />
              <CardTitle className="text-lg">Faster Staff Response</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Every request is routed instantly to the right staff member and tracked until completion. Staff see jobs
              in real time, accept them with one tap, then update progress step by step. Guests feel cared for. Staff
              feel supported. Managers can oversee the entire process without chasing.
            </p>
            <p className="text-sm font-medium text-primary mt-2">
              Result: Faster service, fewer complaints and smoother daily operations across the hotel.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500" />
              <CardTitle className="text-lg">Happier Guests</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              From room cleaning to extra towels to maintenance, every guest request is visible, tracked and delivered
              within minutes. Guests can view updates live from their in-room tablet. This creates a sense of control
              and trust. The experience is seamless, modern and memorable.
            </p>
            <p className="text-sm font-medium text-primary mt-2">
              Result: Better reviews, glowing word of mouth, repeat bookings and stronger brand reputation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-blue-500" />
              <CardTitle className="text-lg">Smart Inventory</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              GlowBack tracks every towel, amenity and supply in real time. Managers know exactly what is left, which
              staff used it and when stock is running low. Automatic alerts prevent shortages before they happen. Waste
              is reduced.
            </p>
            <p className="text-sm font-medium text-primary mt-2">
              Result: Lower costs, no "sorry, we're out" moments and complete confidence in daily operations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-orange-500" />
              <CardTitle className="text-lg">Boost OTA Ratings</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              When service feels effortless, ratings rise. Faster response times with fewer guest complaints directly
              increase Booking.com, Agoda and TripAdvisor scores. Higher ratings mean higher placement on OTA platforms.
              The result is more clicks, more visibility and more reservations.
            </p>
            <p className="text-sm font-medium text-primary mt-2">
              Result: Better rankings, stronger reputation and consistent revenue growth.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <CardTitle className="text-lg">More Bookings</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Every happy guest becomes a promoter. GlowBack's real-time service with visible follow through turns daily
              operations into a competitive advantage. Occupancy grows when guests return, leave stronger reviews and
              recommend the hotel to others.
            </p>
            <p className="text-sm font-medium text-primary mt-2">
              Result: Year-round occupancy growth from compounding service wins.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-purple-500" />
              <CardTitle className="text-lg">Less Manager Stress</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              No more chasing staff or firefighting. The GlowBack Manager Dashboard shows exactly who is on shift, what
              tasks are pending, what is completed and where risks are rising. Escalations highlight only what matters.
              Managers lead with clarity whether on site or away.
            </p>
            <p className="text-sm font-medium text-primary mt-2">
              Result: Calm, confident leadership powered by real-time visibility and full control.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
