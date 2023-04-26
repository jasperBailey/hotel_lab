import "./App.css";
import React, { useState, useEffect } from 'react';
import { getBookings, deleteBooking, postBooking } from "./bookingsService";
import BookingsContainer from "./containers/bookingsContainer";
import BookingForm from "./components/bookingForm";


function App() {

    const [bookings, setBookings] = useState([])

    useEffect( () => {
        getBookings().then(res => setBookings(res))
    }, [])

    const removeBooking = (id) => {
        deleteBooking(id)
        setBookings(bookings.filter(booking => id !== booking._id))
    }

    const addBooking = (payload) => {
        postBooking(payload)
            .then(newBooking => setBookings([...bookings, newBooking]))
    }

    return (
        <div className="App">
            <h1>Domicile d'Imbéciles</h1>
            <BookingForm addBooking={addBooking}/>
            <BookingsContainer bookings={bookings} removeBooking={removeBooking}/>
        </div>
    );
}

export default App;
