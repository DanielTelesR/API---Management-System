// Libraries and modules
const Sequelize = require("sequelize");

// Database settings
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./delivery.sqlite",
});

// Handling errors and database authentication
try {
  sequelize.authenticate();
  console.log("Successfully connected to the database!");
} catch (err) {
  console.log(
    "There has been an error trying to connect to the database.",
    err
  );
}

module.exports = sequelize;
