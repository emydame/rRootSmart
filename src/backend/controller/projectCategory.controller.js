const db = require("../config/db.config");
const ProjectCategory = db.projectCategory;

// Create projeect category
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Category cannot be empty",
    });
  }

  const category = new ProjectCategory({
    projectCatId: req.body.projectCatId,
    categoryName: req.body.categoryName,
    description: req.body.description,
    createdBy: req.body.createdBy,
  });
  category
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured",
      });
    });
};
