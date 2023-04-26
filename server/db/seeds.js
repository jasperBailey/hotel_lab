use hotel;

db.dropDatabase();

db.bookings.insertOne({
    guest_name: "Jasper",
    guest_email_address: "jasper@gmail.com",
    checked_in_status: "false"
});