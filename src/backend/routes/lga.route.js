module.exports = (app) => {
  const lga = require("../controller/lga.controller");

  app.post("/lga", lga.create);

  app.get("/lga", lga.findAll);
};
