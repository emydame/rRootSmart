const db = require("../config/db.config");
const ProjectCategory = db.projectCategory;

// Create projeect category
exports.create = (req, res) => {
  let request = {
    projectCatId: req.body.projectCatId,
    categoryName: req.body.categoryName,
    categoryDescription: req.body.categoryDescription,
    createdBy: req.body.createdBy
  };
  if (!req.body) {
    return res.status(400).send({
      message: "Category cannot be empty"
    });
  }
  const category = new ProjectCategory(request);
  category
    .save()
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Error occured"
      });
    });
};

// Retrieve all project categories
exports.findAll = (req, res) => {
  ProjectCategory.findAll()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Something wrong while retrieving Project category."
      });
    });
};

// Get single Project category using  parameter
exports.findOne = (req, res) => {
  ProjectCategory.findOne({ where: { projectCatId: req.body.projectCatId } })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: " Project category not found"
        });
      } else {
        return res.status(200).send(data);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving Project category."
      });
    });
};
