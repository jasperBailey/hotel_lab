use hotel;

db.dropDatabase();

db.bookings.insertOne({
    guestName: "Jasper",
    guestEmailAddress: "jasper@gmail.com",
    checkedInStatus: false
});

db.bookings.insertOne({
    guestName: "Greg",
    guestEmailAddress: "greghead@gmail.com",
    checkedInStatus: false
});

db.bookings.insertOne({
    guestName: "Wenjing",
    guestEmailAddress: "wenjing@gmail.com",
    checkedInStatus: false
});

db.bookings.insertOne({
    guestName: "Paul",
    guestEmailAddress: "paul@gmail.com",
    checkedInStatus: false
});