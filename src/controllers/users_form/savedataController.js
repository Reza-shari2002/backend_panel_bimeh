const AppError = require("../../config/AppErrore");
const form_db = require("../../services/db/forms");
const { message } = require("../../validators/login_validate");
const documentService = require("../../services/document/documentService");
const logger = require("../../logger/logger");

async function savedataController(req, res, next) {
  try {
    const result = await documentService.savedocument(req);
    logger.info("done upload", {
      ip: req.ip,
      message: "uplodad document",
      phone_number: req?.body?.phone_number,
    });
    res
      .status(200)
      .json({
        message:
          "اطلاعات شما ارسال شد . منتظر تماس پشتیبان  جهت اعلام قیمت باشید...",
      });
  } catch (err) {
    next(new AppError("server error", 500));
  }
}

module.exports = savedataController;
