const db = require("../config/db.config");
const FundApplication = db.fundApplication;
const FundDisbursment = db.fundDisbursment;
const Sequelize = db.sequelize;


// Post a application
exports.create = (req, res) => {
  //let date = new Date();  
  const appId = Math.floor(Math.random() * 100000) + 1;
  let requests = {  
    applicationId: appId,
    organizationId: req.body.organizationId,
    fundId: req.body.fundId,
    projectId: req.body.projectId,
    projectName: req.body.projectName,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd,
    description: req.body.description,
    proposals: req.body.proposal,
    status:"Initiated"
   // proposals: req.file.path
  };
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Fields cannot be empty"
    });
  } else {
    FundApplication.findOne({
      where: { applicationId: appId }
    }).then((data) => {
      if (data) {
        return res.status(400).json({
          status: "error",
          message: "Application already Submit"
        });
      } else {
        // create new user instance
        const fundApplication = new FundApplication(requests);
        fundApplication
          .save()
          .then((data) => {
            return res.status(200).json({
              status: "success",
              message: "New Fund Application Created",
              data
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: "error",
              message: err.message || "Something went wrong."
            });
          });
      }
    });
  }
};

// Get all fund applications
exports.findAll = (req, res) => {
  const { Op } = require("sequelize");
FundApplication.findAll({
  where: {
    status: {
      [Op.eq]: "Initiated"
    }
  }
})
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

/* Find funds by userId
 *
 * This will filter all funds applied by organization with application status
 **/
exports.findOne = (req, res) => {
  //FundApplication.findAll({ where: { organizationId: req.body.email } })
  FundApplication.findAll({ where: { organizationId: req.params.id } })
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: " Fund Application not found"
        });
      } else {
        return res.status(200).json(data);
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message
      });
    });
};


exports.updateStatus = (req, res) => {
  FundApplication.findOne({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: " Fund Application not found"
        });
      } else {
        const stat ="Approved";
      let result= data.dataValues;
        FundApplication.update({ status: stat },
          { where: { id:req.params.id  } }
          ).then(() => {
            //insert record into disurssment
        
            const appId = Math.floor(Math.random() * 100000) + 1;
            let Disbursenew = {  
              id: appId,
              disbursementId: appId,
              organization: result.organizationId,
              applicationId: result.applicationId,
              projectId: result.projectId,
              status: "Cash not Dispensed"
              
            };
            const fundDisbursment = new FundDisbursment(Disbursenew);
            fundDisbursment
              .save()
              .then((data2) => {
                return res.status(200).json({
                  status: "success",
                  message: " Fund Application Approved",
                  data: result
                });
              })
              .catch((err) => {
                return res.status(500).json({
                  status: "error",
                  message: err.message || "Something went wrong."
                });
              });
  
        }).catch((err) => {

          return res.status(500).json({
          status: "error",
          message: err.message
          });
    
        });
       
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message
      });
    });
};

// update investment status
exports.updateSt = (req, res) => {
  Fund.findOne({ where: { fundId: req.body.id } })
    .then((fund) => {
      //get user details from req and save changes 
      fund.status = req.body.status;   
      fund.save().then(() => {
        res.status(200).json({
        status: "success",
        message: "fund status have been update"
        }) ;   
      })
    .catch((err) => {
        return res.status(500).json({
        status: "error",
          message: err.message
        });
      }); 
  
});
};