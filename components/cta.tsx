import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Want to see how it works?</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Watch our comprehensive video demonstration that walks you through the complete Glowback workflow. See exactly
          how our platform transforms hotel operations from guest check-in to staff coordination in real-time.
        </p>
        <Button size="lg" className="mt-4">
          How it works?
        </Button>
      </div>
    </section>
  )
}
