const db = require("../config/db.config");
const Organization = db.userOrganization;

// Post User organization 
exports.create = (req, res) => {
  let request = {
    organizationId: req.body.organizationId,
    userId: req.body.userId,
    userCatId: req.body.userCatId,
    companyName: req.body.companyName,
    RCNumber: req.body.RCNumber,
    email: req.body.email,
    BVN: req.body.BVN,
    address: req.body.address,
    dateIncorporated: req.body.dateIncorporated
  }
  if (!req.body) {
    return res.status(400).send({
      message: "User organization details cannot be empty"
    });
  }else{
    Organization.findOne({where : {organizationId : req.body.organizationId}})
  }

  // create new instance of user organization
  const userOrganization = new Organization();
  userOrganization
    .save()
    .then((data) => {
      res.status(200).send("Organization details Saved");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to save organization details."
      });
    });
};
