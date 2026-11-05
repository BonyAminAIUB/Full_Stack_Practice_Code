import { BookOpenText, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: BookOpenText,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#dfeef1] px-6 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-light tracking-[-0.04em] text-neutral-950">
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-base text-neutral-700/80 sm:text-lg">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex min-h-60 flex-col items-center justify-start rounded-xs border border-[#d7e5e8] bg-[#f3f8f8] px-7 py-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
            >
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#36bfd2] bg-transparent text-[#36bfd2]">
                <Icon className="h-8 w-8 stroke-[1.8]" aria-hidden="true" />
              </div>

              <h3 className="text-3xl font-normal tracking-[-0.04em] text-neutral-950">
                {title}
              </h3>

              <p className="mt-3 max-w-70 text-base leading-relaxed text-neutral-700">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
