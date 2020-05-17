module.exports = (app) => {
  const project = require("../controller/project.controller");

  app.post("/projects", project.create);

  app.get("/projects", project.findAll);

  app.get("/projects/:id", project.findAll);
};
