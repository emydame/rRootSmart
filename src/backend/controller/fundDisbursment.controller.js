const db = require("../config/db.config");
const Disbursement = db.fundDisbursment;

/*
Fund is being disbursed to successfully screened SMEs.
This API record details of funds disbursed 
*/

exports.create = (req, res) => {
  let requests = {
    disbursementId: req.body.disbursementId,
    organizationId: req.body.organizationId,
    applicationId: req.body.applicationId,
    fundId: req.body.fundId,
    disbursedBy: req.body.disbursedBy,
    bankName: req.body.bankName,
    accountNunber: req.body.accountNunber,
    status: req.body.status
  };
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Fields cannot be empty"
    });
  } else {
    Disbursement.findOne({
      where: { disbursementId: req.body.disbursementId }
    }).then((data) => {
      if (data) {
        return res.status(400).json({
          status: "error",
          message: "Fund already disbursed"
        });
      } else {
        // create disbursemenr
        const fundDisbursement = new Disbursement(requests);
        fundDisbursement
          .save()
          .then((data) => {
            return res.status(200).json({
              status: "success",
              message: "Fund disbursed successfully",
              data
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: "error",
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
      return res.status(200).json({
        status: "success",
        message: "All disbursed Funds fetched",
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

// Get fund disbursement by id
exports.findOne = (req, res) => {
  Disbursement.findAll({ where: { disbursementId: req.body.disbursementId } })
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          status: "error",
          message: " Record not found"
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
        message: err.message
      });
    });
};
