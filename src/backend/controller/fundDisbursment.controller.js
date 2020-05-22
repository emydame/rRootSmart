const db = require("../config/db.config");
const Disbursement = db.fundDisbursment;

/*
Fund is being disbursed to successfully screened SMEs.
This API record details of funds disbursed 
*/

exports.create = (req, res) => {
  let requests = {
    disbursementId: req.body.disbursementId,
    applicationId: req.body.applicationId,
    fundId: req.body.fundId,
    disbursedBy: req.body.disbursedBy,
    bankName: req.body.bankName,
    accountNunber: req.body.accountNunber,
    status: req.body.status
  };
  if (!req.body) {
    return res.status(400).send({
      message: "Fields cannot be empty"
    });
  } else {
    Disbursement.findOne({
      where: { disbursementId: req.body.disbursementId }
    }).then((data) => {
      if (data) {
        res.status(400).send({
          message: "Fund already disbursed"
        });
      } else {
        // create new user instance
        const fundDisbursement = new Disbursement(requests);
        fundDisbursement
          .save()
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message
            });
          });
      }
    });
  }
};

//Get all disbursed funds
exports.findAll = (req, res) => {
  Disbursement.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

// Get funds by status
exports.findOne = (req, res) => {
  Disbursement.findAll({ where: { disbursementId: req.body.disbursementId } })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: " Record not found"
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
