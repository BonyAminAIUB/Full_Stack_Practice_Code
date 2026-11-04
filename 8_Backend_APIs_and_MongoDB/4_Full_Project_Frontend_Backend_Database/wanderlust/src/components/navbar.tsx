import Image from "next/image"
import Link from "next/link"
import { MenuIcon, UserIcon } from "lucide-react"

type NavItem = {
  label: string
  href: string
  icon?: boolean
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
]

const accountLinks: NavItem[] = [
  { label: "Profile", href: "/profile", icon: true },
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
]

export function Navbar() {
  return (
    <header className="relative z-50 w-full bg-white text-neutral-950">
      <div className="mx-auto flex h-16 w-full max-w-293 items-center justify-between gap-6 px-6">
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = link.href === "/"

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-[15px] font-medium text-[#15a1bf] underline decoration-2 underline-offset-[5px]"
                    : "text-[15px] font-medium text-neutral-950 transition-colors hover:text-[#15a1bf]"
                }
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link href="/" aria-label="Wanderlast home" className="shrink-0">
          <Image
            src="/images/Wanderlast.png"
            alt="Wanderlast"
            width={162}
            height={24}
            priority
            className="h-5 w-auto"
          />
        </Link>

        <nav aria-label="Account" className="hidden items-center gap-7 lg:flex">
          {accountLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-[15px] font-medium text-neutral-950 transition-colors hover:text-[#15a1bf]"
            >
              {link.icon ? (
                <UserIcon className="size-4" strokeWidth={1.5} />
              ) : null}
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="relative lg:hidden">
          <summary
            aria-label="Open menu"
            className="flex size-10 cursor-pointer list-none items-center justify-center transition-colors hover:bg-neutral-100 [&::-webkit-details-marker]:hidden"
          >
            <MenuIcon className="size-5" />
          </summary>

          <nav
            aria-label="Mobile"
            className="absolute top-full right-0 mt-2 flex w-60 flex-col gap-4 border border-neutral-200 bg-white p-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.href === "/"
                    ? "text-[15px] font-medium text-[#15a1bf]"
                    : "text-[15px] font-medium text-neutral-950"
                }
              >
                {link.label}
              </Link>
            ))}

            <div className="h-px bg-neutral-200" />

            {accountLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-[15px] font-medium text-neutral-950"
              >
                {link.icon ? (
                  <UserIcon className="size-4" strokeWidth={1.5} />
                ) : null}
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}
