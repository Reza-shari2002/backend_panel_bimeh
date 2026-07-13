const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const login_router = require("../src/routes/login.js");
const forms_router = require("./routes/forms.js");
const notification_router = require('./routes/notifications.js')
const err_handler = require('./errorhandler/error_handler.js')
const multer = require("multer");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger.js");
const logger = require("./logger/logger");

const app = express();




app.set("trust proxy", 1);
app.use(cors());
app.use(helmet());

logger.info("started")
app.use("/login", login_router);

app.use("/forms", forms_router);

app.use('/notification' , notification_router)




app.use(err_handler);

app.listen(3000, "127.0.0.1" ,() => {
  console.log("server is listening on port 3000");
});
