const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
process.env.SECRET_KEY = "secret";

// Require database
const db = require("../config/db.config");
const User = db.userLogin;

exports.findOne = (req, res) => {
  let request = {
    username: req.body.username,
    password: req.body.password
  };
  User.findOne({
    where: {
      username: request.username
    }
  })
    .then((data) => {
      // Check if login credentials exist
      if (!data) {
        return res.status(401).send(); // return empty string to signify login creadentials not found
      } else {
        if (bcrypt.compareSync(request.password, data.password)) {
          let payload = { subject: data };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.status(200).send({ token });
        } else {
          res.status(401).send(); // return empty string to signify login creadentials not found
        }
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something went wrong"
      });
    });
};
