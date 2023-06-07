// Libraries and modules
const express = require("express");
const app = express();

// Middleware - data transmission settings in requests (formats: encoded or JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const database = require("./db/db");
const Order = require("./models/orderModel");
const orderController = require("./controllers/orderController");

// Synchronization with the database
try {
  database.sync().then(() => {});
} catch (erro) {
  console.log(
    "There has been a failure while synchronizing with the database.",
    erro
  );
}

// Routes
app.get("/", (req, res) => {
  return res.json({ message: "Welcome to our API!" });
});

// POST - Place an order
app.post("/placeorder", orderController.CreateOrder);

// GET - Listing
app.get("/Orders/:id?", orderController.ListOrder);

// PUT - Update
app.put("/Orders/:id", orderController.UpdateOrder);

// DELETE
app.delete("/Orders/:id", orderController.DeleteOrder);

app.listen(443);
