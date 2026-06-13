const AppError = require("../../config/AppErrore");
const db = require("../../config/db");
const users_db = require("../../services/db/users");

async function users_form_controller(req, res, next) {
  try {
    const [data] = await users_db.find_users_data();
    res.staus(200).json({ data: data });
  } catch (err) {
    next(err);
  }
}
