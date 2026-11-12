"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, UserIcon } from "lucide-react"

type NavItem = {
  label: string
  href: string
  icon?: boolean
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Add Destination", href: "/add-destination" },
  { label: "My Bookings", href: "/bookings" },
]

const accountLinks: NavItem[] = [
  { label: "Profile", href: "/profile", icon: true },
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
]

export function Navbar() {
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

  const linkClassName = (href: string) =>
    `relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${
      isActive(href)
        ? "text-[#13A5BF] after:absolute after:right-0 after:bottom-[-8px] after:left-0 after:h-[2px] after:bg-[#13A5BF]"
        : "text-neutral-950"
    }`

  return (
    <header className="relative z-50 w-full bg-white text-neutral-950">
      <div className="mx-auto flex h-16 w-full max-w-293 items-center justify-between gap-6 px-6">
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={linkClassName(link.href)}
            >
              {link.label}
            </Link>
          ))}
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
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`flex items-center gap-2 ${linkClassName(link.href)}`}
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
                aria-current={isActive(link.href) ? "page" : undefined}
                className={linkClassName(link.href)}
              >
                {link.label}
              </Link>
            ))}

            <div className="h-px bg-neutral-200" />

            {accountLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`flex items-center gap-2 ${linkClassName(link.href)}`}
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
