import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiFacebook, SiGithub } from "@icons-pack/react-simple-icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "My Profile", href: "/profile" },
];

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0b0b] px-6 text-white">
      <div className="mx-auto max-w-295 pt-14 pb-10 sm:pt-16">
        <Link
          href="/"
          aria-label="Wanderlast home"
          className="inline-block text-[clamp(3.5rem,7vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.065em]"
        >
          Wanderlast
        </Link>
        <p className="mt-2 text-sm text-neutral-400 sm:text-base">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-10 grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.65fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <h2 className="text-xs font-medium uppercase text-neutral-200">
              Newsletter
            </h2>
            <p className="mt-1 text-[11px] text-neutral-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form
              action="/"
              method="get"
              className="mt-3 flex h-8.5 max-w-67.5 bg-[#303030]"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter email"
                required
                className="min-w-0 flex-1 bg-transparent px-3 text-xs text-white outline-none placeholder:text-neutral-400 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex w-9 items-center justify-center text-white transition-colors hover:text-[#20b5d0]"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-xs font-medium uppercase text-neutral-200">
              Quick Links
            </h2>
            <ul className="mt-3 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support">
            <h2 className="text-xs font-medium uppercase text-neutral-200">
              Support
            </h2>
            <ul className="mt-3 space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-medium uppercase text-neutral-200">
              Contact Us
            </h2>
            <address className="mt-3 space-y-2.5 text-xs not-italic text-neutral-400">
              <p>
                <a className="transition-colors hover:text-white" href="tel:7869011622">
                  786 901 1622
                </a>
              </p>
              <p>
                <a
                  className="transition-colors hover:text-white"
                  href="mailto:info@wandarland.com"
                >
                  info@wandarland.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-neutral-400">
            © 2026 Wanderlust. All rights reserved.
          </p>
          <nav aria-label="Social media" className="flex items-center gap-5">
            <a
              href="https://github.com/BonyAminAIUB"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="text-white transition-colors hover:text-[#20b5d0]"
            >
              <SiGithub className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-bony-amin-50a653344/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="text-white transition-colors hover:text-[#20b5d0]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/md.bony.amin.534899/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="text-white transition-colors hover:text-[#20b5d0]"
            >
              <SiFacebook className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
