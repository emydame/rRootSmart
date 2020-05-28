module.exports = (app) => {
  const payment = require("../controller/payment.controller");

  // Repay payments
  app.post("/payment", payment.create);

  // Retrieve all payments
  app.get("/payments", payment.findAll);

  // Retrieve all payment with given status
  app.get("/payments/status", payment.findOne);

  // Retrieve all payments made by SME
  app.get("/payments/organizationId", payment.findOne);
};
