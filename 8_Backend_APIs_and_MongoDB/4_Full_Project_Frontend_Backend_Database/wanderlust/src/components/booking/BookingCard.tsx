'use client'
import { ArrowRight, Check } from "lucide-react";
import type { Destination } from "@/components/EditDestinationDialog";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Button } from "../ui/button";

const BookingCard = ({ destination }: { destination: Destination }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    function formatPrice(price: string | number): string | number {
        const numericPrice = Number(price);
        if (Number.isFinite(numericPrice)) {
            return numericPrice.toLocaleString("en-US");
        }
        return price;
    }

    const [departureDate, setDepartureDate] = useState(
        destination.departureDate ? destination.departureDate.split("T")[0] : ""
    );

    const bookingBenefits = [
        "Free cancellation up to 7 days",
        "Travel insurance included",
        "24/7 customer support",
    ];

    const displayPrice = formatPrice(destination.price);

    const handleBooking = async (e) => {
        e.preventDefault();

        const departureDate = e.target.departureDate.value;
        
        const data = {
            username: user?.name,
            email: user?.email,
            image: user?.email,
            ...destination,
            departureDate: departureDate,
        }
        console.log(data);
    }

    return (
        <aside className="h-fit border border-neutral-200 p-5 shadow-sm">
            <p className="text-xs text-neutral-500">Starting from</p>
            <p className="mt-1 text-3xl leading-8 font-semibold text-[#13A5BF]">
                ${displayPrice}
            </p>
            <p className="text-xs text-neutral-500">per person</p>

            <form action="" onSubmit={handleBooking}>
                <input
                    type="date"
                    name="departureDate"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="mt-6 h-10 w-full border border-neutral-200 bg-[#f7f8f9] px-3 text-xs text-neutral-800 outline-none focus:border-[#13A5BF]"
                />

                <Button
                    type="submit"
                    
                    className="mt-3 flex h-10 w-full cursor-pointer items-center justify-center gap-2 bg-[#13A5BF] text-sm font-medium text-white transition-colors hover:bg-[#108da4]"
                >
                    Book Now
                    <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
            </form>
            <ul className="mt-4 space-y-2.5">
                {bookingBenefits.map((benefit) => (
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
    );
};

export default BookingCard;