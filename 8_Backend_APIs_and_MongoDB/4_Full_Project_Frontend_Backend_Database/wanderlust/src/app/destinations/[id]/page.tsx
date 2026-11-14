import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  Star,
} from "lucide-react";
import EditDestinationDialog from "@/components/EditDestinationDialog";
import DeleteDestinationDialog from "@/components/DeleteDestinationDialog";
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
    <main className="flex-1 bg-white px-5 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex items-center justify-between">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-[#13A5BF]"
          >
            <ArrowLeft className="size-3" aria-hidden="true" />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-2">
            <EditDestinationDialog destination={destination} />
            <DeleteDestinationDialog
              destinationId={destination._id}
              destinationName={destination.name}
            />
          </div>
        </div>

        <div className="flex w-full justify-center">
          <img
            src={destination.imageUrl}
            alt={`${destination.name}, ${destination.country}`}
            fetchPriority="high"
            className="block h-auto max-h-[380px] max-w-full w-auto"
          />
        </div>

        <div className="mt-8 border-t border-neutral-100 pt-7">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_280px]">
            <section>
              <p className="flex items-center gap-1.5 text-sm text-neutral-600">
                <MapPin className="size-4" aria-hidden="true" />
                {destination.country}
              </p>

              <h1 className="mt-2 text-3xl leading-tight font-light tracking-[-0.05em] text-neutral-950 sm:text-4xl">
                {destination.name}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                <span className="inline-flex items-center gap-1 font-medium text-neutral-900">
                  <Star
                    className="size-4 fill-green-600 text-green-600"
                    aria-hidden="true"
                  />
                  4.9
                </span>
                <span className="text-neutral-500">(234 reviews)</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-neutral-900">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  {destination.duration}
                </span>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-medium tracking-tight text-neutral-950">
                  Overview
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {description}
                </p>
              </div>

              <div className="mt-7">
                <h2 className="text-xl font-medium tracking-tight text-neutral-950">
                  Highlights
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {description}
                </p>

                <ul className="mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-xs leading-5 text-neutral-600"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-green-600"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <aside className="h-fit border border-neutral-200 p-5 shadow-sm">
              <p className="text-xs text-neutral-500">Starting from</p>
              <p className="mt-1 text-3xl leading-8 font-semibold text-[#13A5BF]">
                ${displayPrice}
              </p>
              <p className="text-xs text-neutral-500">per person</p>

              <div className="mt-6 flex h-10 items-center border border-neutral-100 bg-[#f7f8f9] px-3 text-xs text-neutral-800">
                {departureDate || "Choose departure date"}
              </div>

              <Link
                href="/bookings"
                className="mt-3 flex h-10 items-center justify-center gap-2 bg-[#13A5BF] text-sm font-medium text-white transition-colors hover:bg-[#108da4]"
              >
                Book Now
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <ul               className="mt-4 space-y-2.5">
                {[
                  "Free cancellation up to 7 days",
                  "Travel insurance included",
                  "24/7 customer support",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-xs leading-4 text-neutral-600"
                  >
                    <Check
                      className="size-4 shrink-0 text-green-600"
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
