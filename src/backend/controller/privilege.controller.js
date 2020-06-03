const db = require("../config/db.config");
const Privilege = db.privilege;

exports.create = (req, res) => {
  let date = new Date();
  let request = {
    privilegeName: req.body.privilegeName,
    description: req.body.description,
    dateCreated: date
  };
  // check empty request
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Input fields cannot be empty "
    });
  } else {
    // Check is privilege already exist
    Privilege.findOne({ where: { privilegeName: request.privilegeName } }).then((data) => {
      if (data) {
        return res.status(401).json({
          status: "error",
          message: "Role already exist"
        });
      } else {
        //Save privilege
        let privilege = new Privilege(request);
        privilege
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

exports.findAll = (req, res) => {
  Privilege.findAll()
    .then((privileges) => {
      return res.status(200).json({
        status: "success",
        data: privileges
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};
