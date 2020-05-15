const db = require("../config/db.config");
const Login = db.userLogin;

// Post a User
exports.create = (req, res) => {
  if (!req.body)
    return res.status(400).send({
      message: "User login credentials cannot be empty",
    });
  // create new user instance
  const user = new User({
    userId: req.body.userId,
    username: req.body.username,
    password: req.body.password,
   
  });
  user
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Something wrong while creating the user profile.",
      });
    });
};

exports.findAll = (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving users.",
      });
    });
};

//fine single user by id
exports.findOne = (req, res) => {
  User.findOne({ userId: req.body.userId })
    .then((user) => {
      if (!user)
        return res.status(404).send({
          message: "User Profile not found",
        });
      // if user found, send user details
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId")
        return res.status(404).send({
          message: "User Profile not found ",
        });

      return res.status(500).send({
        message: "Something went wrong retrieving User profile ",
      });
    });
};



