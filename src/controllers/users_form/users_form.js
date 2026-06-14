const AppError = require("../../config/AppErrore");
const db = require("../../config/db");
const forms_db = require("../../services/db/forms");

async function users_form_controller(req, res, next) {
  try {
    const [data] = await forms_db.find_users_data();
    res.staus(200).json({ data: data });
  } catch (err) {
    next(err);
  }
}

module.exports = users_form_controller;
