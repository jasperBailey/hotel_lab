import BookingElement from "../components/bookingElement";

const BookingsContainer = ({ bookings, removeBooking }) => {
    return (
        <>
            <h2>Bookings Container</h2>
            <ul>
            {bookings.map((booking, index) => (
                <BookingElement key={index} booking={booking} removeBooking={removeBooking}/>
            ))}
            </ul>
        </>
    );
};

export default BookingsContainer;
