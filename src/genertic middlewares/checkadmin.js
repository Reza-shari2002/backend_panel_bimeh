const AppError = require("../config/AppErrore");

function checkadmin(item) {
  if (item === "create task") {
    return function (req, res, next) {
      if (
        req.user.user_role === "unit_manager" ||
        req.user.user_role === "ceo"
      ) {
        return next();
      }

      next(new AppError("forbidden", 403));
    };
  } else if (item === "update task" || item === "delete task") {
    return function (req, res, next) {
      if (req.user.user_role === "ceo") {
        return next();
      }
      next(new AppError("forbidden", 403));
    };
  }
}

module.exports = checkadmin;
