const AppError = require("../../config/AppErrore");
const form_db = require("../db/forms");
const fileService = require("../file/fileService");
const notificationService = require("../notification/SendNotification");
const logger = require("../../logger/logger");
const { message } = require("../../validators/login_validate");

async function savedocument(req) {
  try {
    const savedFiles = await fileService.saveInsuranceFiles(req);
    const result = await form_db.saveondb(savedFiles, req.body);
    console.log("upload on db done");
    logger.info("upload on db done", {
      ip: req.ip,
      message: "upload on db done",
    });
    // const response = await notificationService.SendNotification_first_message(req.body)
    logger.info("sent sms done", { ip: req.ip, message: "sms done" });
    return;
  } catch (err) {
    logger.error("500", { message: err.message });
    throw new AppError("server error", 500);
  }
}

module.exports.savedocument = savedocument;
