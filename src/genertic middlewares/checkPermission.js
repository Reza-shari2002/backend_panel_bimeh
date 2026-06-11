const AppError = require("../config/AppErrore");
const units_db = require("../services/db/units");
const task_db = require("../services/db/tasks");
const notification_user_db = require('../services/db/notification_users');


function checkpermission(item) {
  if (item === "tasks_of_units") {
    return async function (req, res, next) {
      try {
        const unit_id = Number(req.params.unit_id);

        if (Number.isNaN(unit_id)) {
          return next(new AppError("invalid unit", 400));
        }

        const result = await units_db.findcompany_of_unit(unit_id);
        if (!result) {
          return next(new AppError("unit not found", 404));
        }

        if (req.user.company_id !== result.company_id) {
          return next(new AppError("forbidden", 403));
        }

        req.unit_id = unit_id;
        next();
      } catch (err) {
        next(err);
      }
    };
  } else if (item === "read_task" ) {
    return async function (req, res, next) {
      try {
        const task_id = Number(req.params.task_id);

        if (Number.isNaN(task_id)) {
          return next(new AppError("invalid task id", 400));
        }

        const result = await task_db.findcompany_of_task(task_id);

        if (!result) {
          return next(new AppError("task not found", 404));
        }

        if (req.user.company_id !== result.company_id) {
          return next(new AppError("forbidden", 403));
        }

        req.task_id = task_id;
        next();
      } catch (err) {
        next(err);
      }
    };
  } else if ((item === "update_task") ||  (item ==='delete')) {
    return async function (req, res, next) {
      try {
        const task_id = Number(req.params.task_id);

        if (Number.isNaN(task_id)) {
          return next(new AppError("invalid task id", 400));
        }

        const result = await task_db.findcompany_of_task(task_id);

        if (!result) {
          return next(new AppError("task not found", 404));
        }

        if (req.user.company_id !== result.company_id) {
          return next(new AppError("forbidden", 403));
        }
        const task = result

        req.oldtask = task;
        next();
      } catch (err) {
        next(err);
      }
    };
  }
  else if ((item === "next") || (item === "return")) {
    return async function (req, res, next) {
      try {
        const task_id = Number(req.params.task_id);

        if (Number.isNaN(task_id)) {
          return next(new AppError("invalid task id", 400));
        }

        const result = await task_db.findcompany_of_task(task_id);
        
        if (!result) {
          return next(new AppError("task not found", 404));
        }

        if ((req.user.company_id !== result.company_id) || (req.user.unit_id !== result.current_workflow_unit)) {
          return next(new AppError("forbidden", 403));
        }
        const task = result
        req.oldtask = task;

        console.log("hellooo");
        const result2 = await units_db.find_ceo_unit_id(req.user.company_id);
        if(!result2){
         return next(new AppError('ceo unit not found',500))  
        }
       
        req.ceo_unit_id = result2[0].id;
        
        next();
      } catch (err) {
        next(err);
      }
    };
  }
  else if(item === 'read notification'){
       return async function (req, res, next) {
      try {
        const notification_id = Number(req.params.notification_id);

        if (Number.isNaN(notification_id)) {
          return next(new AppError("invalid notification_id", 400));
        }

        const result = await notification_user_db.find_notification_of_user(req.user.id,notification_id);

        if (!result) {
          return next(new AppError("forbidden", 403));
        }

        req.notification_id = notification_id;

       return next();
      } catch (err) {
        next(err);
      }
    };
  }
  else if(item === "b_form"){
    return(async function (req,res,next) {
      const id = Number(req.params.user_id);
      if(Number.isNaN(id)){
        next(new AppError("id must be number",400))
      }

      

      
    })
  }
  
}

module.exports = checkpermission;
