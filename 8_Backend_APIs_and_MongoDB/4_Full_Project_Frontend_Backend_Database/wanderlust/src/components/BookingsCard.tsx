'use client'
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Eye,
  MapPin,
  Trash2,
} from "lucide-react";
import { Button } from "@base-ui/react";
import { redirect } from "next/navigation";

export type Booking = {
  _id: string;
  destinationId?: string;
  name: string;
  price: string | number;
  imageUrl: string;
  departureDate?: string;
  status?: string;
};

const BookingsCard = ({ booking }: { booking: Booking }) => {
  const status = booking.status || "Confirmed";
  const isPending = status.toLowerCase() === "pending";

  const handleCancelBooking = async() => {
    const res = await fetch(`http://localhost:8000/my-bookings/${booking._id}`,{
        method:'DELETE',   
    });
    const data = await res.json();
    console.log(data);

    redirect('/my-bookings');
  }

  return (
    <div className="flex flex-col gap-5 border border-neutral-200 bg-white p-4 sm:flex-row sm:p-5">
      {/* Left Image */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-neutral-100 sm:w-72">
        <Image
          src={booking.imageUrl}
          alt={booking.name}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
              isPending
                ? "bg-amber-50 text-amber-500"
                : "bg-emerald-50 text-emerald-600"
            }`}
          >
            {isPending ? (
              <Clock className="size-3.5" />
            ) : (
              <CheckCircle2 className="size-3.5" />
            )}
            {status}
          </span>

          <h2 className="mt-2.5 text-2xl font-medium text-neutral-950">
            {booking.name}
          </h2>

          <div className="mt-2 space-y-1.5 text-xs text-neutral-500">
            <p className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-neutral-400" />
              <span>Departure: {booking.departureDate}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-neutral-400" />
              <span>Booking ID: {booking._id}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-medium text-[#13A5BF]">
            ${booking.price}
          </p>

          <div className="flex items-center gap-3">
            <Button
              onClick={handleCancelBooking}
              type="button"
              className="inline-flex h-9 cursor-pointer items-center gap-1.5 border border-red-300 bg-white px-4 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
            >
              <Trash2 className="size-3.5" />
              Cancel
            </Button>

            <Link
              href={`/destinations/${booking.destinationId ?? booking._id}`}
              className="inline-flex h-9 cursor-pointer items-center gap-1.5 bg-[#13A5BF] px-4 text-xs font-medium text-white transition-colors hover:bg-[#108da4]"
            >
              <Eye className="size-3.5" />
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsCard;