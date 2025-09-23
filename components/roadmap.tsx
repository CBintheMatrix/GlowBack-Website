export default function Roadmap() {
  return (
    <section id="roadmap" className="container max-w-screen-2xl py-24">
      <div className="text-center space-y-6 mb-20">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Roadmap</h2>
        <p className="mx-auto max-w-[50rem] text-lg text-muted-foreground leading-relaxed">
          Our development roadmap shows the exciting features and improvements coming to GlowBack.
        </p>
      </div>

      <div className="space-y-8">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <h3 className="text-xl font-semibold">Q1 2024 - Core Platform</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Launch of the foundational GlowBack platform with real-time task management, staff coordination, and basic
            reporting capabilities.
          </p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-semibold">Q2 2024 - Advanced Analytics</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Enhanced reporting dashboard with predictive insights, performance metrics, and automated recommendations
            for operational improvements.
          </p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <h3 className="text-xl font-semibold">Q3 2024 - Multi-Property Support</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Expansion to support hotel chains and multi-property operations with centralized management and
            location-specific customization.
          </p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-gray-400"></div>
            <h3 className="text-xl font-semibold">Q4 2024 - AI Integration</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Introduction of AI-powered features including intelligent task prioritization, predictive maintenance
            alerts, and automated guest preference learning.
          </p>
        </div>
      </div>
    </section>
  )
}
