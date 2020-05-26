module.exports = (app) => {
  const privilege = require("../controller/privilege.controller");

  app.post("/privileges", privilege.create);
};
