interface Book {
    name : string;
    guests : number;
    time : string;
}
const formatBookingConfirmation = (booking:Book):string => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};

console.log(formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" }));
console.log(formatBookingConfirmation({ name: "Rahim", guests: 2, time: "8:30 PM" }));