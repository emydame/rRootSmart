const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/db.config");

//Set CORS for all headers
app.use(cors());

//sync db
db.sequelize.sync().then(() => {});

require("./routes/user.route")(app);
require("./routes/userCat.route")(app);
require("./routes/userOganization.route")(app);
require("./routes/previlege.route")(app);

app.listen(PORT, () => {
  PORT;
});
