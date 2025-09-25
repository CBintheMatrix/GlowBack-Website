export default function SystemPanels() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-5xl md:max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-500 text-center">
          One Ecosystem. Three Tools.
        </h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/90 backdrop-blur p-8 text-center shadow-[0_6px_24px_-8px_rgba(16,24,40,.15)] ring-1 ring-black/5 transition hover:shadow-[0_10px_32px_-8px_rgba(16,24,40,.2)]">
            <div className="h-10 mb-3 flex items-center justify-center">
              <div className="w-12 h-8 bg-emerald-100 rounded-lg flex items-center justify-center relative">
                <div className="w-8 h-5 bg-emerald-600 rounded-sm flex items-center justify-center">
                  <div className="w-6 h-3 bg-emerald-800 rounded-sm"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-emerald-500">Guest Tablet</h3>
            <p className="mt-2 text-slate-600 text-sm leading-6">
              Instant service at the tap of a button.
              <br />
              Guests can request towels, cleaning or amenities instantly and leave feedback in real time — no calls, no confusion.
            </p>
          </div>
          
          <div className="rounded-2xl bg-white/90 backdrop-blur p-8 text-center shadow-[0_6px_24px_-8px_rgba(16,24,40,.15)] ring-1 ring-black/5 transition hover:shadow-[0_10px_32px_-8px_rgba(16,24,40,.2)]">
            <div className="h-10 mb-3 flex items-center justify-center">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-500 text-lg">📲</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-emerald-500">Staff App</h3>
            <p className="mt-2 text-slate-600 text-sm leading-6">
              Clear tasks, real-time updates.
              <br />
              Staff receive and accept jobs directly on their device, with progress tracked step by step for full accountability.
            </p>
          </div>
          
          <div className="rounded-2xl bg-white/90 backdrop-blur p-8 text-center shadow-[0_6px_24px_-8px_rgba(16,24,40,.15)] ring-1 ring-black/5 transition hover:shadow-[0_10px_32px_-8px_rgba(16,24,40,.2)]">
            <div className="h-10 mb-3 flex items-center justify-center">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-500 text-lg">💻</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-emerald-500">Manager Dashboard</h3>
            <p className="mt-2 text-slate-600 text-sm leading-6">
              Live visibility across operations.
              <br />
              See every active request and staff update as it happens, so you can spot bottlenecks and resolve issues faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
