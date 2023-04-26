const express = require("express");
const app = express();
const cors = require("cors");
const createRouter = require("./helpers/createRouter");
const MongoClient = require('mongodb').MongoClient;

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('hotel');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`App running on port ${this.address().port}`);
});