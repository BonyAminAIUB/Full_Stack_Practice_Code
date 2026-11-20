"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, UserIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { authClient } from "@/lib/auth-client"

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"

export function Navbar() {
  const pathname = usePathname();

  const { data: session } = authClient.useSession()
  const user = session?.user;

  const handleSignout = () => {
    authClient.signOut();
  }

  return (
    <header className="relative z-50 w-full bg-white text-neutral-950">
      <div className="mx-auto flex h-16 w-full max-w-293 items-center justify-between gap-6 px-6">
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/"
              ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
              : "text-neutral-950"
              }`}
          >
            Home
          </Link>
          <Link
            href="/destinations"
            aria-current={
              pathname === "/destinations" || pathname.startsWith("/destinations/")
                ? "page"
                : undefined
            }
            className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/destinations" || pathname.startsWith("/destinations/")
              ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
              : "text-neutral-950"
              }`}
          >
            Destinations
          </Link>
          <Link
            href="/add-destination"
            aria-current={
              pathname === "/add-destination" ? "page" : undefined
            }
            className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/add-destination"
              ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
              : "text-neutral-950"
              }`}
          >
            Add Destination
          </Link>
          <Link
            href="/bookings"
            aria-current={
              pathname === "/bookings" || pathname.startsWith("/bookings/")
                ? "page"
                : undefined
            }
            className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/bookings" || pathname.startsWith("/bookings/")
              ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
              : "text-neutral-950"
              }`}
          >
            My Bookings
          </Link>
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
          <Link
            href="/profile"
            aria-current={pathname === "/profile" ? "page" : undefined}
            className={`relative flex items-center gap-2 text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/profile"
              ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
              : "text-neutral-950"
              }`}
          >
            <UserIcon className="size-4" strokeWidth={1.5} />
            Profile
          </Link>
          {
            user ? <Popover>
              <PopoverTrigger render={<Avatar>
                <AvatarImage referrerPolicy="no-referrer" src={user?.image as string} />
                <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
              </Avatar>}>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>{user?.name}</PopoverTitle>
                  <PopoverDescription>
                    <p>{user?.email}</p>
                    <Button onClick={handleSignout} variant={"destructive"}>Signout</Button>
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover> : <><Link
              href="/login"
              aria-current={pathname === "/login" ? "page" : undefined}
              className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/login"
                ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
                : "text-neutral-950"
                }`}
            >
              Login
            </Link>
              <Link
                href="/signup"
                aria-current={pathname === "/signup" ? "page" : undefined}
                className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/signup"
                  ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
                  : "text-neutral-950"
                  }`}
              >
                Sign Up
              </Link></>
          }
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
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/"
                ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
                : "text-neutral-950"
                }`}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              aria-current={
                pathname === "/destinations" || pathname.startsWith("/destinations/")
                  ? "page"
                  : undefined
              }
              className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/destinations" || pathname.startsWith("/destinations/")
                ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
                : "text-neutral-950"
                }`}
            >
              Destinations
            </Link>
            <Link
              href="/add-destination"
              aria-current={
                pathname === "/add-destination" ? "page" : undefined
              }
              className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/add-destination"
                ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
                : "text-neutral-950"
                }`}
            >
              Add Destination
            </Link>
            <Link
              href="/bookings"
              aria-current={
                pathname === "/bookings" || pathname.startsWith("/bookings/")
                  ? "page"
                  : undefined
              }
              className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/bookings" || pathname.startsWith("/bookings/")
                ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
                : "text-neutral-950"
                }`}
            >
              My Bookings
            </Link>

            <div className="h-px bg-neutral-200" />

            <Link
              href="/profile"
              aria-current={pathname === "/profile" ? "page" : undefined}
              className={`relative flex items-center gap-2 text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/profile"
                ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
                : "text-neutral-950"
                }`}
            >
              <UserIcon className="size-4" strokeWidth={1.5} />
              Profile
            </Link>
            <Link
              href="/login"
              aria-current={pathname === "/login" ? "page" : undefined}
              className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/login"
                ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
                : "text-neutral-950"
                }`}
            >
              Login
            </Link>
            <Link
              href="/signup"
              aria-current={pathname === "/signup" ? "page" : undefined}
              className={`relative text-[15px] font-medium transition-colors hover:text-[#13A5BF] ${pathname === "/signup"
                ? "text-[#13A5BF] after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#13A5BF]"
                : "text-neutral-950"
                }`}
            >
              Sign Up
            </Link>
          </nav>
        </details>
      </div>
    </header>
  )
}
