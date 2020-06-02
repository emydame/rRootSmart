const db = require("../config/db.config");
const Role = db.role;

exports.create = (req, res) => {
  let date = new Date();
  let request = {
    roleName: req.body.roleName,
    description: req.body.description,
    dateCreated: date
  };
  // check empty request
  if (!req.body) {
    return res.status(400).json({
      message: "Input fields cannot be empty "
    });
  } else {
    // Check is role already exist
    Role.findOne({ where: { roleName: request.roleName } }).then((data) => {
      if (data) {
        return res.status(401).json("Role laready exist");
      } else {
        //Save role
        let role = new Role(request);
        role
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
  Role.findAll()
    .then((roles) => {
      return res.status(200).json({
        status: "success",
        data: roles
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};
