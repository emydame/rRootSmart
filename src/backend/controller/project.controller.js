const db = require("../config/db.config");
const Project = db.project;

exports.create = (req, res) => {
  let today = new Date();
  let projects = {
    projectId: req.body.projectId,
    projectCatId: req.body.projectCatId,
    projectName: req.body.projectName,
    description: req.body.description,
    createdBy: req.body.createdBy,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd,
    dateCreated: today
  };
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Please fill all project input fields"
    });
  } else {
    Project.findOne({ where: { projectId: req.body.projectId } }).then((result) => {
      if (result) {
        return res.status(400).json({
          status: "error",
          message: "Project already exist with this Id " + req.body.projectId
        });
      } else {
        // Add project
        const project = new Project(projects);
        project
          .save()
          .then((data) => {
            return res.status(200).json({
              status: "success",
              data
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: "error",
              message: err.message || "Not saved"
            });
          });
      }
    });
  }
};

// Get all projects
exports.findAll = (req, res) => {
  Project.findAll()
    .then((result) => {
      return res.status(200).json({
        status: "success",
        data: result
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message || "Something wrong while retrieving Proposals."
      });
    });
};
 
// Get single Project using  parameter
exports.findOne = (req, res) => {
  Project.findOne({ where: { projectId: req.body.projectId } })
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          status: "error",
          message: " Project not found"
        });
      } else {
        return res.status(200).json({
          status: "success",
          data
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message || "Some error occurred while retrieving Project."
      });
    });
};
