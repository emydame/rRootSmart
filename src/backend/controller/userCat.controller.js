const db = require("../config/db.config");
const UserCategory = db.userCategory;

// Post a User category
exports.create = (req, res) => {
  let today = new Date();
  let requests = {
    userCatId: req.body.userCatId,
    categoryName: req.body.categoryName,
    description: req.body.description,
    createdBy: req.body.createdBy,
    createdAt: today
  };
  if (!req.body) {
    return res.status(400).send({
      message: "User details cannot be empty"
    });
  } else {
    // query user category table to check if category already exist
    UserCategory.findOne({ where: { categoryName: requests.categoryName } }).then((data) => {
      if (data) {
        return res.status(401).send({
          message: "Category already exist"
        });
      } else {
        // create user category
        const userCategory = new UserCategory(requests);
        userCategory
          .save()
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((err) => {
            return res.status(500).send({
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
      res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message
      });
    });
};
