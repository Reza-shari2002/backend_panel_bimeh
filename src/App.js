const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const login_router = require("../src/routes/login.js");
const forms_router = require("./routes/forms.js");
const err_handler = require('./errorhandler/error_handler.js')
const multer = require("multer");
const app = express();


app.set("trust proxy", 1);
app.use(cors());
app.use(helmet());

app.use("/login", login_router);

app.use("/forms", forms_router);



app.use(err_handler);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
