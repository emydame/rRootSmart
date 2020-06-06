module.exports = (app) => {
  const milestone = require("../controller/milestone.controller");

  // Create milestones
  app.post("/milestones", milestone.create);

  // Retrieve all milestones
  app.get("/milestone/all", milestone.findAll);

  // Retrieve milestone by name
  app.get("/milestone/name", milestone.findOne);
};
