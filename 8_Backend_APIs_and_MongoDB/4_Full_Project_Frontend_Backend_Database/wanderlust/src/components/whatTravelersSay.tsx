import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    author: "Michael Chen",
    location: "Singapore",
    image: "/images/person2.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    author: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/person1.png",
  },
];

export function WhatTravelersSay() {
  return (
    <section className="bg-white px-6 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[916px]">
        <div className="mb-7 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-[clamp(2.25rem,4vw,2.75rem)] font-light leading-tight tracking-[-0.06em] text-neutral-950">
              What Travelers Say
            </h2>
            <p className="mt-1 text-[13px] text-neutral-600">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonials"
              className="flex size-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-400 transition-colors hover:bg-neutral-50"
            >
              <ArrowLeft className="size-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              className="flex size-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-400 transition-colors hover:bg-neutral-50"
            >
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.map(({ quote, author, location, image }) => (
            <article
              key={author}
              className="flex min-h-[223px] border border-neutral-200 bg-white p-4"
            >
              <div className="flex min-w-0 flex-1 flex-col justify-between pr-3">
                <blockquote className="text-[16px] leading-[1.1] font-normal tracking-[-0.045em] text-neutral-950">
                  {quote}
                </blockquote>

                <div className="mt-5 pl-0.5">
                  <p className="text-[13px] leading-5 text-[#16a8c6]">
                    — {author}
                  </p>
                  <p className="pl-4 text-[10px] leading-4 text-neutral-600">
                    {location}
                  </p>
                </div>
              </div>

              <div className="relative hidden w-[156px] shrink-0 sm:block">
                <Image
                  src={image}
                  alt={author}
                  fill
                  sizes="156px"
                  className="object-cover object-center"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
