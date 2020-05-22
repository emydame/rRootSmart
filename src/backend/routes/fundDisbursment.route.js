module.exports = (app) => {
  const disbursedFund = require("../controller/fundDisbursment.controller");

  app.post("/disbursements", disbursedFund.create);

  app.get("/disbursed/all", disbursedFund.findAll);

  app.get("/disbursed", disbursedFund.findOne);
};
