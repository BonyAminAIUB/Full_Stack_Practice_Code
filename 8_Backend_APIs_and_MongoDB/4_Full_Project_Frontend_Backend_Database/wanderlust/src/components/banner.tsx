import Image from "next/image"
import Link from "next/link"
import { MoveRightIcon } from "lucide-react"

const searchFields = [
  {
    name: "location",
    label: "Location",
    placeholder: "Address, City Or Zip",
  },
  {
    name: "date",
    label: "Date/Duration",
    placeholder: "Anytime/3 Days",
  },
  {
    name: "budget",
    label: "Budget",
    placeholder: "$0-$3000",
  },
  {
    name: "people",
    label: "People",
    placeholder: "5-10",
  },
]

export function Banner() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-1 flex-col overflow-hidden">
      <Image
        src="/images/Banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/10"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-12">
        <div className="flex w-full max-w-3xl flex-col items-center text-center text-white">
          <h1 className="text-[clamp(3rem,6.2vw,5rem)] leading-[1.05] font-light tracking-[-0.01em]">
            Discover Your
            <br />
            Next Adventure
          </h1>

          <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-white/90 sm:text-[15px]">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/destinations"
              className="inline-flex h-12 items-center justify-center gap-2 bg-[#15a1bf] px-4 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:bg-[#1290aa] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore Now
              <MoveRightIcon className="size-5" strokeWidth={1.5} />
            </Link>

            <Link
              href="/destinations"
              className="inline-flex h-12 items-center justify-center bg-white/25 px-4 text-xs font-semibold tracking-[0.1em] text-white uppercase backdrop-blur-[2px] transition-colors hover:bg-white/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              View Destination
            </Link>
          </div>
        </div>
      </div>

      <form
        action="/"
        method="get"
        className="relative z-10 grid w-full grid-cols-1 border-t border-white/40 bg-white/35 backdrop-blur-md md:grid-cols-[repeat(4,minmax(0,1fr))_10rem]"
      >
        {searchFields.map((field) => (
          <label
            key={field.name}
            className="flex min-h-16 flex-col justify-center border-b border-white/40 px-5 py-3 md:min-h-[76px] md:border-r md:border-b-0"
          >
            <span className="text-[15px] leading-5 font-medium text-neutral-800">
              {field.label}
            </span>
            <input
              name={field.name}
              placeholder={field.placeholder}
              className="mt-0.5 w-full bg-transparent text-[11px] leading-4 text-neutral-700 outline-none placeholder:text-neutral-600"
            />
          </label>
        ))}

        <button
          type="submit"
          className="min-h-12 bg-[#15a1bf] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1290aa] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white md:min-h-[76px]"
        >
          Search
        </button>
      </form>
    </section>
  )
}
