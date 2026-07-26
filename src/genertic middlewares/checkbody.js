const { json } = require("express");
const AppError = require("../config/AppErrore");
const login_validate = require("../validators/login_validate");
const create_form_validate = require("../validators/create_form_validate");
const send_notification_validate = require('../validators/send_notification_validate')
const logger = require("../logger/logger");

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

      const { error, value } = login_validate.validate(user_info);
      if (error) {
        console.log(`validation body :  ${error.details[0].message}`);
        return next(new AppError("login data wrong", 400));
      }

      next();
    };






  } else if (item === "create form") {
    return function (req, res, next) {
      const body = req?.body;

      if (!body) {
        
        return next(new AppError("form data wrong", 400));
      }

      const { error, value } = create_form_validate.create_form_validator.validate(req.body);
      if (error) {
        logger.error(`validation body :  ${error.details[0].message}`)
        console.log(`validation body :  ${error.details[0].message}`);
        return next(new AppError("form data wrong", 400));
      }


      req.body = value;
      return next();
    };

    
  }
  else if (item === "send") {
    return function (req, res, next) {
      const body = req?.body;

      if (!body) {
        console.log("req has not body");
        return next(new AppError("form data wrong", 400));
      }

      const { error, value } = send_notification_validate.validate(req.body);
      if (error) {
        logger.error(`validation body :  ${error.details[0].message}`)
        console.log(`validation body :  ${error.details[0].message}`);
        return next(new AppError("form data wrong", 400));
      }



      
      return next();
    };
  }
}

module.exports = checkbody;
