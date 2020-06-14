const db = require("../config/db.config");
const Refund = db.repayment;

exports.create = (req, res) => {
  let today = new Date();
  let id = Math.floor(Math.random() * 10000) + 1;

  let payment = {
    repaymentId: id,
    companyName: req.body.companyName,
    applicationId: req.body.applicationId,
    amountPaid: req.body.amountPaid,
    bank: req.body.bank,
    accountNumber: req.body.accountNumber,
    repaymentDAte: today
  };
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Please fill all details"
    });
  } else {
    Repay.findOne({ where: { repaymentId: id } }).then((result) => {
      if (result) {
        return res.status(400).json({
          status: "error",
          message: "Details already exist"
        });
      } else {
        // Add project
        const refund = new Refund(payment);
        refund
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
              message: err.message
            });
          });
      }
    });
  }
};
