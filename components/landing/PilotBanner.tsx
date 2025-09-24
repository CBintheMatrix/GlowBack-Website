export default function PilotBanner() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-5xl md:max-w-6xl mx-auto px-4">
        <div className="mt-14 rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
            Now selecting 5 hotels in Thailand for our 2025 Pilot Program.
          </h2>
          <p className="mt-2 text-emerald-900/80">
            Join early, lock in lifetime partner rates and help shape the future of hospitality operations.
          </p>
          <p className="mt-4 text-sm text-emerald-900/70 italic">
            "Glowback is like having an invisible operations manager 24/7." — Pilot Hotel Manager
          </p>
          <a
            href="/pilot"
            className="mt-6 inline-flex h-12 px-6 items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all duration-300"
          >
            Apply for Pilot
          </a>
        </div>
      </div>
    </section>
  )
}
