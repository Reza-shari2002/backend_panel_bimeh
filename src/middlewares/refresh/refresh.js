const AppError = require("../../config/AppErrore");
const util = require("util");
const jwt = require("jsonwebtoken");
const verifyAsync = util.promisify(jwt.verify);
const user_sessions_db = require("../../services/db/usersession");
require('dotenv').config();


async function checkrefresh(req, res, next) {
  const { refresh_token } = req.body;
  console.log(req.body);
  if (!refresh_token) {
    return next(new AppError("Unauthorized form", 401));
  }

  try {
    const user = await verifyAsync(refresh_token , process.env.REFRESH_TOKEN_SECRET);
    req.user = user;
    const result = await user_sessions_db.find_sessions(refresh_token);
    if (result.length === 0 || result.length > 1) {
      return next(new AppError("Unauthorized no find", 401));
    }

    if (result[0].is_revoked === 1) {
      await user_sessions_db.revoke_sessions(user.id);
      return next(new AppError("protocol aminiati", 401));
    }

    return next();
  } catch (err) {
    next(new AppError(err.message, 500));
  }
}

module.exports = checkrefresh;
