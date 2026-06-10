const { json } = require("express");
const AppError = require("../config/AppErrore");
const create_task_validate = require('../validators/create_task_validate');
const login_validate = require('../validators/login_validate');
const update_task_validate = require('../validators/update_task_validate');
const next_return_validate = require('../validators/next_return_validate');
const refresh_validate = require('../validators/refresh_validate');

function checkbody(item) {
  if (item === "create task") {
    return function (req, res, next) {
      const body = req.body;
      if (!body) {
        next(new AppError("requset  must have body", 400));
      }
      const task = req.body.task;

      if (!task) {
        return next(new AppError("body is not valid", 400));
      }

      
  const { error, value } = create_task_validate.validate(task);

  if (error) {
    return next(new AppError(error.details[0].message, 400));
  }



      req.task = {
        ...value,
        company_id: req.user.company_id,
        unit_id: req.user.unit_id,
        created_by_user_id: req.user.id,
        progress_percent: 0,
        current_workflow_index: 0,
        active: 1,
        current_workflow_unit: task.workflow_stages[0].unit_id,
      };

      console.log(req.task);
      console.log(req.user);
      next();
    };
  }
  
  
  else if (item === "login") {
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


  } else if (item === "update task") {
    return function (req, res, next) {
      const body = req.body;
      if (!body) {
        next(new AppError("requset  must have body", 400));
      }
      const updatedata = req.body.updatedata;

      if (!updatedata) {
        return next(new AppError("body is not valid", 400));
      }

      const {error,value} = update_task_validate.validate(updatedata);
      
      if(error){
        return next (new AppError(error.details[0].message,400))
      }

 if (
        value.current_workflow_index >
        value.workflow_stages.length - 1 || value.current_workflow_index < 0
      ) {
        return next(new AppError("body is not valid", 400));
      }
      const progress_percent =
        (value.current_workflow_index /
          value.workflow_stages.length) *
        100;

      const current_workflow_unit =
        value.workflow_stages[value.current_workflow_index].unit_id;

      req.updatedata = {
        ...value,
        progress_percent: progress_percent,
        current_workflow_unit: current_workflow_unit,
      };
      console.log(value);
      console.log(req.user);
      next();
    };
  }
  else if((item === 'next') || (item === 'return')){
    return function (req, res, next) {
      const body = req.body;
      if (!body) {
        next(new AppError("requset  must have body", 400));
      }
      const {error , value} = next_return_validate.validate(req.body);
      if (error) {
    return next(new AppError(error.details[0].message, 400));
  }

      req.message = value.message;

      
      
      
      next();
    };
  }
else if(item === 'refresh'){
  return async function  (req,res,next) {
     const body = req.body;
      if (!body) {
        next(new AppError("requset  must have body", 400));
      }
      const {error , value} = refresh_validate.validate(req.body);
      if(error){
        return next (new AppError(error.details[0].message,401));
      }

      next();


      
  }
}
}

module.exports = checkbody;
