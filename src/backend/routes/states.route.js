module.exports = (app) => {
  const states = require("../controller/states.controller");

  app.post("/state", states.create);

  app.get("/states/all", states.findAll);
};
