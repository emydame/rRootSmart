const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
process.env.SECRET_KEY = "secret";

// Require database
const db = require("../config/db.config");
const UserLogin = db.userLogin;
const User = db.users;
const Organization = db.userOrganization;

exports.findOne = (req, res) => {
  let request = {
    username: req.body.username,
    password: req.body.password
  };
  UserLogin.findOne({ where: { username: request.username } })
    .then((data) => {
      // Check if login credentials exist
      if (!data) {
        return res.status(401).send({
          message: " Invalid username or password"
        });
      } else {
        if (bcrypt.compareSync(request.password, data.password)) {
          //res.send(data);
          if (data) {
            Organization.findOne({
              where: {
                organizationId: data.organizationId
              }
            }).then((result) => {
              //res.send(result)
              let payload = { subject: result };
              let token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 1440
              });
              res.status(200).send({ token });
            });
          }
        } else {
          return res.status(401).send({
            message: "Invalid username or password"
          }); // return empty string to signify login creadentials not found
        }
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Something went wrong"
      });
    });
};
