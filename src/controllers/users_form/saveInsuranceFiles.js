const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const AppError = require('../../config/AppErrore');
const FileType = require("file-type");

async function saveInsuranceFiles(req, res, next) {
  try {
    const requiredFiles = req.requiredFiles;
    const files = req.files;

    const baseDir = path.join(
      process.cwd(),
      "storage",
      "private",
      "insurance-documents"
    );

    await fs.promises.mkdir(baseDir, { recursive: true });

    const savedFiles = {};

    for (const fieldName of requiredFiles) {
      const file = files?.[fieldName]?.[0];

      if (!file) continue;

      const type = await FileType.fromBuffer(file.buffer);

      if (!type) {
        throw new AppError(`Invalid file type for field ${fieldName}`, 400);
      }

      const randomName = crypto.randomBytes(16).toString("hex");
      const fileName = `${randomName}.${type.ext}`;
      console.log(fileName);
      const absolutePath = path.join(baseDir, fileName);

      await fs.promises.writeFile(absolutePath, file.buffer);

      savedFiles[fieldName] = `insurance-documents/${fileName}`;
    }
    
    req.savedFiles = savedFiles;
    console.log(req.savedFiles);

    return next()
  
  } catch (error) {
    console.log(error.message);
    next(new AppError(error.message, 400) );
  }
}


module.exports = saveInsuranceFiles;
