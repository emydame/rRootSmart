/**
 * This API controll repayment of funds recieved for a specific
 * project applied
 */
// Invest funds
const db = require("../config/db.config");
const Payment = db.payment;

exports.create = (req, res) => {
  let requests = {
    paymentId: req.body.payment,
    organizationId: req.body.organizationId,
    fundId: req.body.fundId,
    accountNumber: req.body.accountNumber,
    bankName: req.body.bankName,
    amount: req.body.amount,
    status: req.body.status,
    paidBy: req.body.paidBy,
    paymentDate: req.body.paymentDate
  };
  if (!req.body) {
    return res.status(400).send({
      messege: "Please all input fields required"
    });
  } else {
    Payment.findOne({ where: { paymentId: req.body.paymentId } }).then((data) => {
      if (data) {
        return res.status(400).send({
          message: "Record already exist"
        });
      } else {
        // Add Payment
        const payment = new Payment(requests);
        payment
          .save()
          .then((data) => {
            return res.status(200).send(data);
          })
          .catch((err) => {
            return res.status(500).send({
              message: err.message || "Not saved"
            });
          });
      }
    });
  }
};

// Get all payments made
exports.findAll = (req, res) => {
  Payment.findAll()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message
      });
    });
};

// Get Payments made  by id
exports.findOne = (req, res) => {
  Payment.findOne({ where: { paymentId: req.body.paymentId } })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: " Record not found"
        });
      } else {
        return res.status(200).send(data);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message
      });
    });
};

// Get Payments made  by organisation
exports.findAll = (req, res) => {
  Payment.findAll({ where: { organizationId: req.body.organizationId } })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: " Record not found"
        });
      } else {
        return res.status(200).send(data);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message
      });
    });
};

// Get Payments by status
exports.findAll = (req, res) => {
  Payment.findAll({ where: { status: req.body.status } })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: " Record not found"
        });
      } else {
        return res.status(200).send(data);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message
      });
    });
};
