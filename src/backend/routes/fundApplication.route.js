const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) { 
    cb(null, new Date().toDateString() + file.originalname);
  }
});

const upload = multer ({ storage: storage, 
  limits: {
      fileSize : 1024 * 1024 * 5
}
});

//const upload = multer({ dest: 'uploads/' })

module.exports = (app) => {
  const fundApplication = require("../controller/fundApplication.controller");

  app.post("/fund/apply", upload.single("proposals"), fundApplication.create);

  app.get("/fund/applications/all", fundApplication.findAll);

  app.get("/fund/application/:id", fundApplication.findOne);
};
