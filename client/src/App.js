import "./App.css";
import React, { useState, useEffect } from "react";
import {
    getBookings,
    getBooking,
    deleteBooking,
    postBooking,
    putBooking,
} from "./bookingsService";
import BookingsContainer from "./containers/bookingsContainer";
import BookingForm from "./components/bookingForm";

function App() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings().then((res) => setBookings(res));
    }, []);

    const removeBooking = (id) => {
        deleteBooking(id);
        setBookings(bookings.filter((booking) => id !== booking._id));
    };

    const addBooking = (payload) => {
        postBooking(payload).then((newBooking) =>
            setBookings([...bookings, newBooking])
        );
    };

    const updateBooking = (id, payload) => {
        const filteredBookings = bookings.filter(
            (booking) => id !== booking._id
        );
        putBooking(id, payload)
            .then(() => getBooking(id))
            .then((res) => setBookings([...filteredBookings, res]));
    };

    return (
        <div className="App">
            <h1>Domicile d'Imbéciles</h1>
            <BookingForm addBooking={addBooking} />
            <BookingsContainer
                bookings={bookings}
                removeBooking={removeBooking}
                updateBooking={updateBooking}
            />
        </div>
    );
}

export default App;
