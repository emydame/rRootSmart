module.exports = (app) => {
  const fundCategory = require("../controller/fundCategory.controller");

  // create fund category
  app.post("/funds/category", fundCategory.create);

  // Retrieve all categories
  app.get("/funds/category/all", fundCategory.findAll);

  // Get single category
  app.get("/funds/category", fundCategory.findOne);
};
