import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Star, MoveUpRight } from "lucide-react";

type Destination = {
  _id?: string;
  name: string;
  country: string;
  price: string | number;
  duration: string;
  imageUrl: string;
};

function isDestination(value: unknown): value is Destination {
  if (typeof value !== "object" || value === null) return false;

  const destination = value as Record<string, unknown>;

  return (
    typeof destination.name === "string" &&
    typeof destination.country === "string" &&
    (typeof destination.price === "string" ||
      typeof destination.price === "number") &&
    typeof destination.duration === "string" &&
    typeof destination.imageUrl === "string" &&
    (destination._id === undefined || typeof destination._id === "string")
  );
}

async function getDestinations(): Promise<Destination[]> {
  const response = await fetch("http://localhost:8000/destinations", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Destination request failed with status ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data) || !data.every(isDestination)) {
    throw new Error("The destinations API returned an invalid response.");
  }

  return data;
}

function DestinationCard({ destination }: { destination: Destination }) {
  const price = Number(destination.price);
  const formattedPrice = Number.isFinite(price)
    ? price.toLocaleString("en-US")
    : destination.price;

  return (
    <article className="min-w-0">
      <div className="relative aspect-[1.78] overflow-hidden bg-neutral-100">
        <Image
          src={destination.imageUrl}
          alt={`${destination.name} in ${destination.country}`}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 220px"
          className="object-contain"
        />
        <div className="absolute top-2 right-2 inline-flex items-center gap-1 bg-white/90 px-2 py-1 text-[10px] font-medium text-neutral-900">
          4.5
          <Star className="size-3 fill-current" aria-hidden="true" />
        </div>
      </div>

      <div className="pt-2">
        <p className="flex items-center gap-1 text-[10px] leading-4 text-neutral-500">
          <MapPin className="size-3" aria-hidden="true" />
          {destination.country}
        </p>

        <div className="mt-0.5 flex items-baseline justify-between gap-2">
          <h2 className="truncate text-[13px] leading-5 text-neutral-950">
            {destination.name}
          </h2>
          <p className="shrink-0 text-[13px] leading-5 text-neutral-950">
            ${formattedPrice}
            <span className="text-[9px] text-neutral-500">/Person</span>
          </p>
        </div>

        <p className="mt-0.5 flex items-center gap-1 text-[10px] leading-4 text-neutral-500">
          <CalendarDays className="size-3" aria-hidden="true" />
          {destination.duration}
        </p>

        <Link
          href={
            destination._id
              ? `/destinations/${destination._id}`
              : "/destinations"
          }
          className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium uppercase text-[#109db9] transition-colors hover:text-[#087b92]"
        >
          Book now
          <MoveUpRight className="size-3" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default async function AllDestinationsPage() {
  let destinations: Destination[];
  let loadError: string | null = null;

  try {
    destinations = await getDestinations();
  } catch (error) {
    console.error("Failed to load destinations:", error);
    destinations = [];
    loadError =
      "We couldn’t load destinations. Please make sure the Wanderlust server is running and try again.";
  }

  return (
    <main className="min-h-[60vh] flex-1 bg-white px-6 py-6 sm:px-8">
      <div className="mx-auto max-w-171">
        {loadError ? (
          <p role="alert" className="py-8 text-center text-sm text-red-700">
            {loadError}
          </p>
        ) : destinations.length === 0 ? (
          <p className="py-8 text-center text-sm text-neutral-600">
            No travel packages are available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination._id ?? `${destination.name}-${index}`}
                destination={destination}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
