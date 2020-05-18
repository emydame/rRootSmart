const db = require("../config/db.config");
const Project = db.project;

exports.create = (req, res) => {
  let today = new Date();
  if (!req.body) {
    return res.status(400).send({
      messege: "Projects field is empty",
    });
  }
  const project = new Project({
    projectId: req.body.projectId,
    projectCatId: req.body.projectCatId,
    projectName: req.body.projectName,
    description: req.body.description,
    createdBy: req.body.createdBy,
    dateStart: today,
    dateEnd: req.body.dateEnd,
  });
  project
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Not saved",
      });
    });
};

// Get all projects
exports.findAll = (req, res) => {
  Project.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving Proposals.",
      });
    });
};

// Get single Project using conditional parameter

exports.findAll = (req, res) => {
  Project.findAll({ where: { projectId: req.body.projectId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Project.",
      });
    });
};
