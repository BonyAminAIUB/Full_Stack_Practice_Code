import BookingsCard, { Booking } from "@/components/BookingsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`http://localhost:8000/my-bookings/${user?.email}`);
    const bookings = await res.json();

    console.log(bookings);

    return (
        <div>
            <main className="min-h-[60vh] flex-1 bg-white px-5 py-10 sm:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-8">
                        <h1 className="text-4xl font-light tracking-tight text-neutral-950">
                            My Bookings
                        </h1>
                        <p className="mt-1.5 text-sm text-neutral-500">
                            Manage and view your upcoming travel plans
                        </p>
                    </div>

                    <div className="space-y-5">
                        {bookings?.map((booking: Booking) => (
                            <BookingsCard key={booking._id} booking={booking} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyBookingsPage;