const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = "serete";
const db = require("../config/db.config");
const User = db.users;
const Userpass = db.userLogin;
const Organization = db.userOrganization;

// Post User
exports.create = (req, res) => {
  let today = new Date();
  let userRole = "Admin";
  let userPrivilege = "Level 1";
  //Check empty request
  if (!req.body) {
    return res.status(204).json({
      status: "error",
      message: "User details cannot be empty"
    });
  } else {
    //Query user table to check if details already exist
    User.findOne({ where: { email: req.body.email } }).then((data) => {
      if (data) {
        // return result if data already exist
        return res.status(401).json({
          status: "error",
          message: "User already exist"
        });
      } else {
        Organization.findOne({ where: { email: req.body.companyEmail } }).then((data) => {
          if (data) {
            return res.status(401).json({
              status: "error",
              message: "Organisation already registered" 
            });
          } else {
            //Query userlogin table to check if user login credentials already exist
            Userpass.findOne({ where: { email: req.body.email } }).then((data) => {
              if (data) {
                // return data if user login creadentials exist
                return res.status(401).json({
                  status: "error",
                  message: "User already exist"
                });
              } else {
                let orgId = Math.floor(Math.random() * 10000) + 1;
                let userID = Math.floor(Math.random() * 100000) + 1;
                let loginID = Math.floor(Math.random() * 10000) + 1;
                /**
                 * It is assume that any user that successfuly submit registeration
                 * form becomes the company's admin with all privileges.
                 * Therefore, USER ROLE is set to ADMIN by defualt while PRIVILEGE to
                 * LEVEL 1.
                 * Admin will then create other users (company staff) and assign roles
                 * and privileges to each staff.
                 *
                 * NOTE: The default signup page is meant to register companies and overall
                 * company admin while sub-user form is access from the company's admin
                 * dashboard
                 */
                
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
                // save new user
                user
                  .save()
                  .then((data) => {
                    if (data) {
                      const organization = new Organization({
                        organizationId: orgId,
                        companyName: req.body.companyName,
                        category: req.body.userType,
                        RCNumber: req.body.rcNumber,
                        email: req.body.companyEmail, 
                        BVN: req.body.BVN,
                        address: req.body.companyAddress,
                        dateIncorporated: req.body.dateIncorporated
                      });
                      //Save organization
                      organization.save().then((data) => {
                        // save login credentials if user details is succesfully saved
                        if (data) {
                          const pass = new Userpass({ 
                            loginId: loginID,
                            userId: userID,
                            organizationId: orgId,
                            email: req.body.email,
                            password: req.body.password  
                          });
                          // Encode password
                          bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(pass.password, salt, (err, hash) => {
                              if (err) {
                                return res.status(400).json({
                                  status: "error",
                                  message: err.message
                                });
                              } else {
                                pass.password = hash;
                                pass.saltSecret = salt;
                                pass
                                  .save()
                                  .then((data) => {
                                    if (data) {
                                      Organization.findOne({ where: { organizationId: orgId } }).then((data) => {
                                        return res.json({
                                          status: "success",
                                          data
                                        });
                                      });
                                    }
                                  })
                                  .catch((err) => {
                                    return res.status(500).json({
                                      status: "error",
                                      message: err.message
                                    });
                                  });
                              }
                            });
                          });
                        } else {
                          return res.status(400).json({
                            status: "error",
                            message: "Not saved"
                          });
                        }
                      });
                    }
                  })
                  .catch((err) => {
                    return res.status(500).json({
                      status: "error",
                      message: err.message || "Something wrong while creating the user profile."
                    });
                  });
              }
            });
          }
        });
      }
    });
  }
};

exports.findAll = (req, res) => {
  User.findAll()
    .then((users) => {
      return res.status(200).json({
        status: "success",
        data: users
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};

//fine single user by id
exports.findOne = (req, res) => {
  User.findOne({ where: { userId: req.body.userId } })
    .then((user) => {
      res.status(200).json({
        status: "success",
        data: user
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).json({
          status: "error",
          message: "User Profile not found "
        });
      }
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};
