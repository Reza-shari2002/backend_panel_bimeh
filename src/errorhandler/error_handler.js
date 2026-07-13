const multer = require("multer");
const logger = require("../logger/logger");
const { message } = require("../validators/login_validate");


const err_handler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    switch (err.code) {
      case "LIMIT_FILE_SIZE":
        logger.error("400 error",{ip:req.ip , message:"File size exceeds limit (max 5MB)"})
        return res.status(400).json({
          message: "File size exceeds limit (max 5MB)",
        });

      case "LIMIT_FILE_COUNT":
        logger.error("400 error",{ip:req.ip , message:"Too many files uploaded"})
        return res.status(400).json({
          message: "Too many files uploaded",
        });

      case "LIMIT_FIELD_COUNT":
        logger.error("400 error",{ip:req.ip , message:"Too many form fields"})
        return res.status(400).json({
          message: "Too many form fields",
        });

      case "LIMIT_FIELD_SIZE":
        logger.error("400 error",{ip:req.ip , message:"Field value too large"})
        return res.status(400).json({
          message: "Field value too large",
        });

      case "LIMIT_UNEXPECTED_FILE":
        logger.error("400 error",{ip:req.ip , message:"Unexpected file field"})
        return res.status(400).json({
          message: "Unexpected file field",
        });

      default:
        logger.error("400 error",{ip:req.ip , message:"Upload error"})
        return res.status(400).json({
          message: "Upload error",
        });
    }
  } else {
    console.log(err.message);
    logger.error(err.message,{ip:req.ip , message:err.message , status:err.statuscode})
    res
      .status(err.statuscode || 500)
      .json({ message: err.message, status: err.status });
  }
}


module.exports = err_handler;