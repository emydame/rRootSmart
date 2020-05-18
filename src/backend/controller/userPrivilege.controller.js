const db = require("../config/db.config");
const Previlege = db.userPrevilege;

// Post a User
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Privileges not assigened"
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
      res.status(200).send("User privileges assigned");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Privileges not assigned"
      });
    });
};
