module.exports = (app) => {
  const role = require("../controller/role.controller");

  app.post("/roles", role.create);
};
