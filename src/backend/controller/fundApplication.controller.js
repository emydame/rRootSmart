const db = require("../config/db.config");
const FundApplication = db.fundApplication;

// Post a application
exports.create = (req, res) => {
  let date = new Date();
  let requests = {
    applicationId: req.body.applicationId,
    userId: req.body.userId,
    fundId: req.body.fundId,
    fundCatId: req.body.fundCatId,
    status: req.body.status,
    applicationDate: date
  };
  if (!req.body) {
    return res.status(400).send({
      message: "Fields cannot be empty"
    });
  } else {
    FundApplication.findOne({
      where: { applicationId: req.body.applicationId }
    }).then((data) => {
      if (data) {
        res.status(400).send({
          message: "Application already Submit"
        });
      } else {
        // create new user instance
        const fundApplication = new FundApplication(requests);
        fundApplication
          .save()
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || "Something went wrong."
            });
          });
      }
    });
  }
};

// Get all fund applications
exports.findAll = (req, res) => {
  FundApplication.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

/* Find funds by userId
 *
 * This will filter all funds applied by user with its status
 */
exports.findOne = (req, res) => {
  FundApplication.findAll({ where: { userId: req.body.userId } })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: " Fund Application not found"
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};
