module.exports = (app) => {
  const category = require("../controller/projectCategory.controller");

  app.post("/projects/category", category.create);
};
