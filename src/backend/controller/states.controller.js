const db = require("../config/db.config");
const NgState = db.ngState;

// Add states
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      messege: "Please fill all  input fields",
    });
  } else {
    NgState.findOne({ where: { id: req.body.id } }).then((result) => {
      if (result) {
        res.status(400).send({
          message: "State already exist with this Id " + req.body.id,
        });
      } else {
        // save state
        const ngState = new NgState({
          id: req.body.id,
          name: req.body.name,
        });
        ngState
          .save()
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || "Not saved",
            });
          });
      }
    });
  }
};

// Get list of all states
exports.findAll = (req, res) => {
  NgState.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
