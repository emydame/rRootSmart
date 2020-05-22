const db = require("../config/db.config");
const Fund = db.fund;

// Invest funds
exports.create = (req, res) => {
  let requests = {
    fundId: req.body.fundId,
    organizationId: req.body.organizationId,
    fundCatId: req.body.fundCatId,
    amount: req.body.amount,
    status: req.body.status,
    dateInitiated: req.body.dateInitiated,
  };
  if (!req.body) {
    return res.status(400).send({
      messege: "Please fill all funds input fields",
    });
  } else {
    Fund.findOne({ where: { fundId: req.body.fundId } }).then((result) => {
      if (result) {
        res.status(400).send({
          message: "Fund already exist with this Id " + req.body.fundIdId,
        });
      } else {
        // Add project
        const fund = new Fund(requests);
        fund
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

// Get all funds
exports.findAll = (req, res) => {
  Fund.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving Funds.",
      });
    });
};

// Get funds by organisation
exports.findOne = (req, res) => {
  Fund.findAll({ where: { organizationId: req.body.organizationId } })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: " Fund not found",
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Funds.",
      });
    });
};


// Get funds by status
exports.findOne = (req, res) => {
  Fund.findAll({ where: { status: req.body.status } })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: " Fund not found",
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Funds.",
      });
    });
};
