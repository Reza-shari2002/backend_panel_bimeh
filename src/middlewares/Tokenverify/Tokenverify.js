const jwt = require("jsonwebtoken");
const util = require("util");
const AppError = require("../../config/AppErrore");
const verifyAsync = util.promisify(jwt.verify);
require("dotenv").config();

async function access_verify(req, res, next) {
  const main_token = req.headers.authorization;
  const token = main_token && main_token.split(" ")[1];
  if (!token) {
    return next(new AppError("Unauthorized", 401));
  }

  try {
    const user = await verifyAsync(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = user;
    next();
  } catch (err) {
    next(new AppError("Unauthorized", 401));
  }
}

module.exports = access_verify;
