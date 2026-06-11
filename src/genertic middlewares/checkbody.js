const { json } = require("express");
const AppError = require("../config/AppErrore");
const login_validate = require('../validators/login_validate');

function checkbody(item) {

  if (item === "login") {
    return async function (req, res, next) {
      const body = req.body;
      if (!body) {
        return res.status(400).json({ message: " request must have body" });
      }
      const { user_info } = req.body;

      if (!user_info) {
        return res
          .status(400)
          .json({ message: "بدنه درخواست باید شامل user_info باشد." });
      }

      const{error,value} = login_validate.validate(user_info);
      if(error){
        return next(new AppError(error.details[0].message,400));
      }

      next();
    };


  } 
}

module.exports = checkbody;
