const { json } = require("express");
const AppError = require("../config/AppErrore");
const login_validate = require("../validators/login_validate");
const create_form_validate = require("../validators/create_form_validate");

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
        console.log("req has not body");
        return next(new AppError("form data wrong", 400));
      }

      const { error, value } = create_form_validate.create_form_validator.validate(req.body);
      if (error) {
        console.log(`validation body :  ${error.details[0].message}`);
        return next(new AppError("form data wrong", 400));
      }


      if(req?.body.plate_history_type === '0'){
        const {error , value} = create_form_validate.plate_history_validator.validate(req.body.plate_history_code);
         if (error) {
        console.log(`plate_history_code is required`);
        return next(new AppError("form data wrong", 400));
      }

      }
      
      return next();
    };
  }
}

module.exports = checkbody;
