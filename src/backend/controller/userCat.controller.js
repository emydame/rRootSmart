const db = require("../config/db.config");
const UserCategory = db.userCategory;

// Post User category
exports.create = (req, res) => {
  let today = new Date();
  id = Math.floor(Math.random() * 10000) + 1;

  let requests = {
    userCatId: id,
    categoryName: req.body.categoryName,
    description: req.body.description,
    createdBy: req.body.createdBy,
    dateCreated: today
  };
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "User details cannot be empty"
    });
  } else {
    // query user category table to check if category already exist
    UserCategory.findOne({ where: { categoryName: requests.categoryName } }).then((data) => {
      if (data) {
        return res.status(401).json({
          status: "error",
          message: "this category already exist"
        }); // Data returned signify that category already exist
      } else {
        // create user category
        const userCategory = new UserCategory(requests);
        userCategory
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
              message: err.message || "Something wrong while creating the user category profile."
            });
          });
      }
    });
  }
};

//return all user categories
exports.findAll = (req, res) => {
  UserCategory.findAll()
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
};
