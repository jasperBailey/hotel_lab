require('./bookingElement.css')

const BookingElement = ({booking, removeBooking}) => {
    const handleDelete = () => {
        removeBooking(booking._id)
    }

    return (
        <>
            <li>
                <h3>BookingElement</h3>
                <p>{booking.guestName}</p>
                <button onClick={handleDelete}>Delete Booking</button>
            </li>
        </>
    );
};

export default BookingElement;
