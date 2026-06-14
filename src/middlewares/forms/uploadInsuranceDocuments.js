const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 2, fields: 2 },
});

const uploadInsuranceDocuments = upload.fields([
  { name: "cardoc", maxCount: 2 },
  { name: "card_id", maxCount: 2 },
]);

module.exports = uploadInsuranceDocuments;
