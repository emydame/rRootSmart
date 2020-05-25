const db = require("../config/db.config");
const UserCategory = db.userCategory;

// Post a User category
exports.create = (req, res) => {
  let requests = {
    userCatId: req.body.userCatId,
    userId: req.body.userId,
    categoryName: req.body.categoryName,
    description: req.body.description,
    createdBy: req.body.createdBy
  };
  if (!req.body) {
    return res.status(400).send({
      message: "User details cannot be empty"
    });
  } else {
    // query user category table to check if category already exist
    UserCategory.findOne({ where: { categoryName: requests.categoryName } }).then((data) => {
      if (data) {
        res.status(401).send({
          message: "Category already exist"
        });
      } else {
        // create new user category 
        const userCategory = new UserCategory(requests);
        userCategory
          .save()
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || "Something wrong while creating the user category profile."
            });
          });
      }
    });
  }
};
