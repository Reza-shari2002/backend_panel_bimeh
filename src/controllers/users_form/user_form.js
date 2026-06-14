const AppError = require("../../config/AppErrore");

async function user_form_controller(req, res, next) {
  return res.status(200).json({ data: req.user_data });
}

module.exports = user_form_controller;
