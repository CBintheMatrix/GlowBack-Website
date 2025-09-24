export default function CTA() {
  return (
    <div className="mt-14">
      <div className="rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 p-8 md:p-10 text-center shadow-[0_8px_24px_-12px_rgba(16,185,129,.35)]">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
          Join the Hotels Leading Innovation
        </h2>
        <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
          Secure your position as a forward-thinking hotel that delivers faster service, higher revenue and lasting guest loyalty.
        </p>
        <a
          href="/pilot"
          className="mt-6 inline-flex h-12 px-6 items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors duration-300"
        >
          Apply for Founding Partner Status
        </a>
      </div>
    </div>
  )
}
