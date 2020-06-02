const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
process.env.SECRET_KEY = "secret";

// Require database
const db = require("../config/db.config");
const UserLogin = db.userLogin;
const Organization = db.userOrganization;

exports.findOne = (req, res) => {
  let request = {
    email: req.body.email,
    password: req.body.password
  };
  UserLogin.findOne({ where: { email: request.email } })
    .then((data) => {
      // Check if login credentials exist
      if (!data) {
        return res.status(401).json({
          status: "error",
          message: " Invalid username or password"
        });
      } else {
        if (bcrypt.compareSync(request.password, data.password)) {
          if (data) {
            Organization.findOne({
              where: {
                organizationId: data.organizationId
              }
            }).then((result) => {
              return res.json({
                status: "success",
                data: result
              });
            });
          }
        } else {
          return res.status(401).json({
            status: "error",
            message: "Invalid username or password"
          }); 
        }
      }
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message || "Something went wrong"
      });
    });
};
