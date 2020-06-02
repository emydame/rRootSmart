const db = require("../config/db.config");
const NgState = db.ngState;

// Add states
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Please fill all  input fields"
    });
  } else {
    NgState.findOne({ where: { id: req.body.id } }).then((result) => {
      if (result) {
        res.status(400).json({
          status: "error",
          message: "State already exist with this Id " + req.body.id
        });
      } else {
        // save state
        const ngState = new NgState({
          id: req.body.id,
          name: req.body.name
        });
        ngState
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

// Get list of all states
exports.findAll = (req, res) => {
  NgState.findAll()
    .then((result) => {
      return res.status(200).json({
        status: "success",
        data: result
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};
