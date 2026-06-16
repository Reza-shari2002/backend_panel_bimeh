const multer = require("multer");


const err_handler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    switch (err.code) {
      case "LIMIT_FILE_SIZE":
        return res.status(400).json({
          message: "File size exceeds limit (max 5MB)",
        });

      case "LIMIT_FILE_COUNT":
        return res.status(400).json({
          message: "Too many files uploaded",
        });

      case "LIMIT_FIELD_COUNT":
        return res.status(400).json({
          message: "Too many form fields",
        });

      case "LIMIT_FIELD_SIZE":
        return res.status(400).json({
          message: "Field value too large",
        });

      case "LIMIT_UNEXPECTED_FILE":
        return res.status(400).json({
          message: "Unexpected file field",
        });

      default:
        return res.status(400).json({
          message: "Upload error",
        });
    }
  } else {
    console.log(err.message);
    res
      .status(err.statuscode || 500)
      .json({ message: err.message, status: err.status });
  }
}


module.exports = err_handler;