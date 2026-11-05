import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ReadyStartJourney() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950">
      <Image
        src="/images/CTA.png"
        alt=""
        fill
        priority
        className="object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,22,0.75),rgba(11,22,26,0.45),rgba(14,20,18,0.7))]" />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-6xl items-center justify-center px-6 py-20 text-center text-white">
        <div className="max-w-5xl">
          <h2 className="text-[clamp(2.7rem,5vw,5rem)] font-light tracking-[-0.05em] text-white">
            Ready To Start Your Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base text-white/90 sm:text-xl">
            Join thousands of travelers who have discovered the world with us
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-3 border border-neutral-200 bg-white px-8 py-4 text-base font-semibold uppercase tracking-[0.08em] text-neutral-900 shadow-lg transition hover:bg-neutral-100"
            >
              Book your trip today
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
