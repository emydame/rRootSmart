module.exports = (app) => {
  const privilege = require("../controller/userPrivilege.controller");

  app.post("/privileges", privilege.create);
};
