module.exports = (app) => {
  const fundApplication = require("../controller/fundApplication.controller");

  app.post("/fund/apply", fundApplication.create);

  app.get("/fund/applications/list", fundApplication.findAll);

  app.get("/fund/application/:id", fundApplication.findOne);
};
