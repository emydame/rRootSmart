const db = require("../config/db.config");
const Lga = db.lga;

// Add LGA
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Please fill all  input fields"
    });
  } else {
    // Save LGA
    const lga = new Lga(req.body);
    lga
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
};

// Get all LGAs
exports.findAll = (req, res) => {
  Lga.findAll()
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
