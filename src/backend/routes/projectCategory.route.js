module.exports = (app) => {
  const category = require("../controller/projectCategory.controller");

  app.post("/projects/category", category.create);

  app.get("/projects/category", category.findAll);

  app.get("/projects/category/one", category.findOne);
};
