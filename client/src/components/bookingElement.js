require("./bookingElement.css");

const BookingElement = ({ booking, removeBooking, updateBooking }) => {
    const handleDelete = () => {
        removeBooking(booking._id);
    };

    const handleUpdate = () => {
        updateBooking(booking._id, {
            checkedInStatus: !booking.checkedInStatus,
        });
    };

    return (
        <>
            <li
                className={
                    booking.checkedInStatus ? "checked-in" : "not-checked-in"
                }
            >
                <h3>{booking.guestName}</h3>
                <p>{booking.guestEmailAddress}</p>

                <button onClick={handleUpdate}>
                    {booking.checkedInStatus ? "Check Out" : "Check In"}
                </button>
                <button onClick={handleDelete}>Delete Booking</button>
            </li>
        </>
    );
};

export default BookingElement;
