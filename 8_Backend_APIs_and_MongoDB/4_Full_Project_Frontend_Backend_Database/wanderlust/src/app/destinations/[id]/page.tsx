import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  Star,
  Trash2,
} from "lucide-react";
import EditDestinationDialog from "@/components/EditDestinationDialog";
import type { Destination } from "@/components/EditDestinationDialog";

async function getDestination(id: string): Promise<Destination> {
  const response = await fetch(
    `http://localhost:8000/destination/${encodeURIComponent(id)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    if (response.status === 404 || response.status === 400) {
      notFound();
    }

    throw new Error(`Could not load destination (${response.status}).`);
  }

  const destination: Destination | null = await response.json();

  if (!destination) {
    notFound();
  }

  return destination;
}

export default async function DestinationDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destination = await getDestination(id);
  const price = Number(destination.price);
  const displayPrice = Number.isFinite(price)
    ? price.toLocaleString("en-US")
    : destination.price;
  const departureDate = destination.departureDate
    ? new Date(`${destination.departureDate}T00:00:00`).toLocaleDateString(
        "en-US",
      )
    : "";
  const description =
    destination.description ||
    `Discover the magic of ${destination.name} in ${destination.country}, with beautiful scenery, local culture, and unforgettable experiences.`;

  const highlights = [
    "Luxury beachfront accommodation",
    "Visit local landmarks and attractions",
    "Traditional local cuisine experience",
    "Guided cultural tour",
    "Scenic trip to nearby viewpoints",
    "Free time to explore at your own pace",
  ];
  console.log(destination);
  return (
    <main className="flex-1 bg-white px-5 py-7 sm:px-8">
      <div className="mx-auto max-w-172">
        <div className="mb-3 flex items-center justify-between">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-[11px] text-neutral-500 transition-colors hover:text-[#13A5BF]"
          >
            <ArrowLeft className="size-3" aria-hidden="true" />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-2">
            <EditDestinationDialog destination={destination} />
            <Link
              href="/destinations"
              className="inline-flex h-7 items-center gap-1.5 border border-red-300 px-3 text-[10px] text-red-600 transition-colors hover:bg-red-50"
            >
              <Trash2 className="size-3" aria-hidden="true" />
              Cancel
            </Link>
          </div>
        </div>

        <div className="relative aspect-[2.54] w-full overflow-hidden bg-neutral-100">
          <Image
            src={destination.imageUrl}
            alt={`${destination.name}, ${destination.country}`}
            fill
            unoptimized
            priority
            sizes="(max-width: 720px) 100vw, 688px"
            className="object-cover"
          />
        </div>

        <div className="mt-5 border-t border-neutral-100 pt-5">
          <div className="grid gap-8 md:grid-cols-[1fr_215px]">
            <section>
              <p className="flex items-center gap-1.5 text-[10px] text-neutral-600">
                <MapPin className="size-3" aria-hidden="true" />
                {destination.country}
              </p>

              <h1 className="mt-1 text-[30px] leading-tight font-light tracking-[-0.06em] text-neutral-950">
                {destination.name}
              </h1>

              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px]">
                <span className="inline-flex items-center gap-1 font-medium text-neutral-900">
                  <Star
                    className="size-3 fill-green-600 text-green-600"
                    aria-hidden="true"
                  />
                  4.9
                </span>
                <span className="text-neutral-500">(234 reviews)</span>
                <span className="inline-flex items-center gap-1 font-medium text-neutral-900">
                  <CalendarDays className="size-3" aria-hidden="true" />
                  {destination.duration}
                </span>
              </div>

              <div className="mt-5">
                <h2 className="text-base font-medium tracking-tight text-neutral-950">
                  Overview
                </h2>
                <p className="mt-2 text-[10px] leading-[1.55] text-neutral-500">
                  {description}
                </p>
              </div>

              <div className="mt-5">
                <h2 className="text-base font-medium tracking-tight text-neutral-950">
                  Highlights
                </h2>
                <p className="mt-2 text-[10px] leading-[1.55] text-neutral-500">
                  {description}
                </p>

                <ul className="mt-3 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-1.5 text-[9px] leading-4 text-neutral-600"
                    >
                      <Check
                        className="mt-0.5 size-3 shrink-0 text-green-600"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <aside className="h-fit border border-neutral-200 p-3 shadow-sm">
              <p className="text-[9px] text-neutral-500">Starting from</p>
              <p className="text-xl leading-6 font-semibold text-[#13A5BF]">
                ${displayPrice}
              </p>
              <p className="text-[9px] text-neutral-500">per person</p>

              <div className="mt-6 flex h-7 items-center border border-neutral-100 bg-[#f7f8f9] px-2 text-[9px] text-neutral-800">
                {departureDate || "Choose departure date"}
              </div>

              <Link
                href="/bookings"
                className="mt-3 flex h-7.5 items-center justify-center gap-2 bg-[#13A5BF] text-[9px] font-medium text-white transition-colors hover:bg-[#108da4]"
              >
                Book Now
                <ArrowRight className="size-3" aria-hidden="true" />
              </Link>

              <ul className="mt-3 space-y-1.5">
                {[
                  "Free cancellation up to 7 days",
                  "Travel insurance included",
                  "24/7 customer support",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-1.5 text-[8px] leading-3 text-neutral-500"
                  >
                    <Check
                      className="size-3 shrink-0 text-green-600"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
