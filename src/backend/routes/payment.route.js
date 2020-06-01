module.exports = (app) => {
  const payment = require("../controller/payment.controller");

  // Repay payments
  app.post("/payments", payment.create);

  // Retrieve all payments
  app.get("/payments/all", payment.findAll);

  // Retrieve payments by Id
  app.get("/payments/:id", payment.findOne);

  // Retrieve all payment with given status
  app.get("/payments/status", payment.findAll);

  // Retrieve all payments made by SME
  app.get("/payments/org", payment.findAll);
};
