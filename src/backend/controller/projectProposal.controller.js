const db = require("../config/db.config");
const Proposal = db.proposal;

//Add proposal
exports.create = (req, res) => {
  let requestBody = {
    proposalId: req.body.proposalId,
    userId: req.body.userId,
    applicationId: req.body.applicationId,
    projectId: req.body.projectId,
    filePath: req.body.filePath
  };
  if (!req.body) {
    return res.status(400).send({
      message: "Category cannot be empty"
    });
  }

  const proposal = new Proposal(requestBody);
  proposal
    .save()
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Error occured"
      });
    });
};

//Retreive all proposall 
exports.findAll = (req, res) => {
  Proposal.findAll()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Something wrong while retrieving Proposals."
      });
    });
};
