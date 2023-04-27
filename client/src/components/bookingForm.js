import React, { useState } from "react";

const BookingForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({
        guestName: "",
        guestEmailAddress: "",
        checkedInStatus: false,
    });

    const isValidEmail = (email) => {
        const regex =
            /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

    const onChange = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    };

    const onCheckboxChange = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.name] = e.target.checked;
        setFormData(newFormData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.guestName) {
            alert("Guests need names, dummy.");
            return;
        }
        if (!isValidEmail(formData.guestEmailAddress)) {
            alert("Invalid email. Try harder.");
            return;
        }
        addBooking(formData);
        setFormData({
            guestName: "",
            guestEmailAddress: "",
            checkedInStatus: false,
        });
    };

    return (
        <>
            <h2>Add a new booking</h2>
            <form onSubmit={handleSubmit}>
                <div className="formWrap">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={onChange}
                        type="text"
                        id="name"
                        name="guestName"
                        value={formData.guestName}
                    />
                </div>
                <div className="formWrap">
                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={onChange}
                        type="text"
                        id="email"
                        name="guestEmailAddress"
                        value={formData.guestEmailAddress}
                    />
                </div>
                <div className="formWrap">
                    <label htmlFor="checked-in">Checked In?</label>
                    <input
                        onChange={onCheckboxChange}
                        type="checkbox"
                        id="checked-in"
                        name="checkedInStatus"
                        checked={formData.checkedInStatus}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default BookingForm;
