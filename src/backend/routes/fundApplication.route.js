const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads");
  },
  filename(req, file, cb) {
    cb(null, new Date().toDateString() + file.originalname);
  }
});

// const upload = multer({ storage: storage });
//, upload.single("proposals")
module.exports = (app) => {
  const fundApplication = require("../controller/fundApplication.controller");

  app.post("/fund/apply", fundApplication.create);

  app.get("/fund/applications/all", fundApplication.findAll);

  app.get("/fund/application/:id", fundApplication.findOne);
};
