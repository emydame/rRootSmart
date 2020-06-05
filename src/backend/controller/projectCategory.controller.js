const db = require("../config/db.config");
const ProjectCategory = db.projectCategory;

// Create projeect category
exports.create = (req, res) => {
  let id = Math.floor(Math.random() * 10000) + 1;
  let request = {
    projectCatId: id,
    categoryName: req.body.categoryName,
    categoryDescription: req.body.categoryDescription,
    createdBy: req.body.createdBy
  };
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Category cannot be empty"
    });
  }
  const category = new ProjectCategory(request);
  category
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
        message: err.message || "Error occured"
      });
    });
};

// Retrieve all project categories
exports.findAll = (req, res) => {
  ProjectCategory.findAll()
    .then((result) => {
      return res.status(200).json({
        status: "success",
        data: result
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message || "Something wrong while retrieving Project category."
      });
    });
};   

// Get single Project category using  parameter
exports.findOne = (req, res) => {
  ProjectCategory.findOne({ where: { projectCatId: req.body.projectCatId } })
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          status: "error",
          message: " Project category not found"
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
        message: err.message || "Some error occurred while retrieving Project category."
      });
    });
};
