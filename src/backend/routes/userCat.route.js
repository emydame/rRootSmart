module.exports = (app) => {
  const userCategory = require("../controller/userCat.controller");

  // Create a new User Category
  app.post("/category", userCategory.create);

  // Retrieve all User Categories
  app.get("/category/all", userCategory.findAll);
};
