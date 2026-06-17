const AppError = require("../config/AppErrore");
const forms_db = require("../services/db/forms");

function checkpermission(item) {
    if (item === "user_form") {
    return async function (req, res, next) {
      const id = Number(req.params.form_id);
      
      if (Number.isNaN(id)) {
        next(new AppError("id must be number", 400));
      }
      try {
        const users_form = await forms_db.find_user_data(id);
        req.user = users_form;
        
        
        return next();
      } catch (err) {
        next(err);
      }
    };
  }
}

module.exports = checkpermission;
