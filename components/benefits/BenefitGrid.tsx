import Image from "next/image"

export default function BenefitGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 — Revenue Growth */}
      <div className="rounded-2xl bg-white p-10 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] ring-1 ring-black/5 hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
        <div className="mb-6">
          <Image
            src="/Revenue.png"
            alt="Revenue Growth"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold text-emerald-500 mb-6">Revenue Growth</h3>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Elevated Visibility</h4>
            <p className="text-lg text-slate-600 leading-relaxed">Stronger service leads to stronger impressions, keeping your property top of mind with travelers.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Effortless Upsells</h4>
            <p className="text-lg text-slate-600 leading-relaxed">Guest tablets open new pathways to showcase local experiences and services naturally.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Return Stays</h4>
            <p className="text-lg text-slate-600 leading-relaxed">Guests remember when operations feel seamless — and they come back.</p>
          </div>
        </div>
      </div>

      {/* Card 2 — Risk Reduction */}
      <div className="rounded-2xl bg-white p-10 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] ring-1 ring-black/5 hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
        <div className="mb-6">
          <Image
            src="/Risk.png"
            alt="Risk Reduction"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold text-emerald-500 mb-6">Risk Reduction</h3>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Silent Recovery</h4>
            <p className="text-lg text-slate-600 leading-relaxed">Requests are handled before they become frustrations.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Predictive Calm</h4>
            <p className="text-lg text-slate-600 leading-relaxed">Bottlenecks are caught early, so issues don't spill over into complaints.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Stronger Teams</h4>
            <p className="text-lg text-slate-600 leading-relaxed">Clearer processes reduce stress, keeping staff focused and steady.</p>
          </div>
        </div>
      </div>

      {/* Card 3 — Market Position */}
      <div className="rounded-2xl bg-white p-10 shadow-[0_8px_24px_-10px_rgba(16,24,40,.18)] ring-1 ring-black/5 hover:shadow-[0_16px_40px_-12px_rgba(16,24,40,.22)] transition duration-300">
        <div className="mb-6">
          <Image
            src="/Market Position.png"
            alt="Market Position"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold text-emerald-500 mb-6">Market Position</h3>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Recognized Leadership</h4>
            <p className="text-lg text-slate-600 leading-relaxed">Owners and partners see visible consistency without extra effort.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Guest Confidence</h4>
            <p className="text-lg text-slate-600 leading-relaxed">Visitors sense when they're staying in a forward-thinking property.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Future-Proof Operations</h4>
            <p className="text-lg text-slate-600 leading-relaxed">A system that evolves with hospitality's changing standards.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
