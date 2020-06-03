const db = require("../config/db.config");
const Proposal = db.proposal;

//Add proposal
exports.create = (req, res) => {
  id = Math.floor(Math.random() * 10000) + 1;
  let requestBody = {
    proposalId: id,
    userId: req.body.userId,
    applicationId: req.body.applicationId,
    projectId: req.body.projectId,
    filePath: req.body.filePath
  };
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Category cannot be empty"
    });
  }

  const proposal = new Proposal(requestBody);
  proposal
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
        message: err.message || "Error occured"
      });
    });
};

//Retreive all proposall 
exports.findAll = (req, res) => {
  Proposal.findAll()
    .then((result) => {
      return res.status(200).json({
        status: "success",
        data: result
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message || "Something wrong while retrieving Proposals."
      });
    });
};
