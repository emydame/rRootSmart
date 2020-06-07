module.exports = (app) => {
    const eligibility = require("../controller/eligibility.controller");
  
    app.post("/eligibilty", eligibility.create);
  
    app.get("/eligibilty/find", eligibility.findOne);
  
  };
  