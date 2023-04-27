import BookingElement from "../components/bookingElement";
require("./bookingsContainer.css");

const BookingsContainer = ({ bookings, removeBooking, updateBooking}) => {
    return (
        <>
            <h2>Bookings Container</h2>
            <ul>
                {bookings.map((booking, index) => (
                    <BookingElement
                        key={index}
                        booking={booking}
                        removeBooking={removeBooking}
                        updateBooking={updateBooking}
                    />
                ))}
            </ul>
        </>
    );
};

export default BookingsContainer;
