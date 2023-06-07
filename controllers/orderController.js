// Importing the Order model
const Order = require("../models/orderModel");

module.exports = class orderController {
  //CREATE
  static async CreateOrder(req, res) {
    let name = req.body.name;
    let items = req.body.items;
    let address = req.body.address;
    let phone = req.body.phone;
    const order = {
      name: name,
      items: items,
      address: address,
      phone: phone,
    };
    await Order.create(order);
    res.json({ message: "Your order has successfully been placed!" });
  }
  // READ
  static async ListOrder(req, res) {
    const customer_id = req.params.id;
    if (customer_id) {
      const order = await Order.findOne({
        where: { customer_id: customer_id },
      });
      res.json(order);
    } else {
      const order = await Order.findAll({ raw: true });
      res.json(order);
    }
  }

  //UPDATE
  static async UpdateOrder(req, res) {
    const customer_id = req.params.id;
    let name = req.body.name;
    let items = req.body.items;
    let address = req.body.address;
    let phone = req.body.phone;
    const order = {
      name: name,
      items: items,
      address: address,
      phone: phone,
    };
    await Order.update(order, { where: { customer_id: customer_id } }); // Ensures the specified ID corresponds to the customer/order.
    res.json({
      message:
        "Your order has been successfully updated! The following changes were applied: ",
      data: order,
    });
  }

  // DELETE
  static async DeleteOrder(req, res) {
    const customer_id = req.params.id;
    await Order.destroy({ where: { customer_id: customer_id } });
    res.json({ message: "Your order has been successfully deleted!" });
  }
};
