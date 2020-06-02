const db = require("../config/db.config");
const Previlege = db.userPrevilege;

// Post User privileges
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Privileges not assigned"
    });
  }

  const privilege = new Previlege({
    userId: req.body.useruserIdCatId,
    privilegeName: req.body.privilegeName,
    description: req.body.description,
    createdBy: req.body.createdBy
  });
  privilege
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
        message: err.message || "Privileges not assigned"
      });
    });
};
