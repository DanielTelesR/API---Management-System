// Importing libraries and modules
const Sequelize = require("sequelize");
const database = require("../db/db");

// Creating the Order model and defining its fields: customer_id, name, order, address, phone
const Order = database.define(
  "order",
  {
    customer_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    items: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { database, modelName: "order", tableName: "orders" }
);

module.exports = Order;
