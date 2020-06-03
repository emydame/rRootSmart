/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint no-console: "error" */
const bcrypt = require("bcrypt")
const db = require("../config/db.config");

const Organization = db.userOrganization;
const User = db.user;
const Userpass = db.userLogin;

// Post User organization
exports.create = (req, res) => {
  exports.create = (req, res) => {
  let today = new Date();
  let userRole = "Admin";
  let userPrivilege = "Level 1";
  let orgId = Math.floor(Math.random() * 10000) + 1;
  let userID = Math.floor(Math.random() * 100000) + 1;
  let loginID = Math.floor(Math.random() * 10000) + 1;

  //Check empty request
  if (!req.body) {
    return res.status(204).json({
      status: "error",
      message: "User details cannot be empty"
    });
  }

  let error = "";
  let status = false;
  let saved = "";
  User.findOne({ where: { email: req.body.email } })
    .then((data) => {
      if (data) {
        // return result if data already exist
        error = "User already exist";
        return;
      } else {
        // Create new instance of  user
        const user = new User({
          userId: userID,
          organizationId: orgId,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          otherName: req.body.otherName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          role: userRole,
          privilege: userPrivilege,
          dateCreated: today
        });
        user
          .save()
          .then((data) => {
            saved = "Data saved successfully";
          })
          .catch((error) => {
            status = true;
            console.log(error);
          });
      }
    })
    .catch((error) => console.log(error));

  Organization.findOne({ where: { email: req.body.companyEmail } })
    .then((data) => {
      if (data) {
        // return result if data already exist
        error = "User already exist";
        return;
      } else {
        const organization = new Organization({
          organizationId: orgId,
          companyName: req.body.companyName,
          category: req.body.userType,
          RCNumber: req.body.rccNumber,
          email: req.body.companyEmail,
          BVN: req.body.bvn,
          address: req.body.companyAddress,
          dateIncorporated: req.body.dateIncorporated
        });
        
        //Save organization
        organization
          .save()
          .then((data) => {
            saved = "Data saved successfully";
            console.log(data);
          })
          .catch(() => {
            console.log("Error saving org");
            status = true;
          });
      }
    })
    .catch((error) => console.log(error));

  Userpass.findOne({ where: { email: req.body.email } })
    .then((data) => {
      if (data) {
        // return result if data already exist
        error = "User already exist";
        return;
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            // Now we can store the password hash in db.
            if (err) {
              return res.status(401).json({
                status: "error",
                message: "Unauthorized user"
              });
            }
            const pass = new Userpass({
              loginId: loginID,
              userId: userID,
              organizationId: orgId,
              email: req.body.email,
              password: hash
            });

            pass
              .save()
              .then((data) => {
                saved = "Data saved successfully";
              })
              .catch((error) => {
                status = true;
                console.log(error);
              });
          });
        });
      }
    })
    .catch((error) => console.log(error));

  if (status) {
    return res.status(500).json({
      status: "error",
      message: error
    });
  } else {
    const data = {
      category: req.body.userType,
      organizationId: orgId,
      userId: userID,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      otherName: req.body.otherName,
      email: req.body.email
    };
    return res.status(200).json({
      status: "success",
      data,
      message: saved
    });
  }
};

  
};

// Retrieve all organizations
exports.findAll = (req, res) => {
  Organization.findAll()
    .then((organizations) => {
      return res.status(200).json({
        status: "success",
        data: organizations
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};

// Find organization by id
exports.findOne = (req, res) => {
  Organization.findOne({ where: { organizationId: req.body.organizationId } })
    .then((data) => {
      if (!data) {
        return res.status(401).json({
          status: "error",
          message: " organization not found"
        });
      } else {
        return res.status(200).json({
          status: "success",
          data
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};

// Find organization by Category
exports.findAll = (req, res) => {
  Organization.findAll({ where: { userCatId: req.body.userCatId } })
    .then((data) => {
      if (!data) {
        return res.status(401).json({
          status: "error",
          message: " organization not found"
        });
      } else {
        return res.status(200).json({
          status: "success",
          data
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};
