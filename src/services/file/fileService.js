const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const AppError = require('../../config/AppErrore');
const FileType = require("file-type");

async function saveInsuranceFiles(data) {
  try {
    const requiredFiles = data.requiredFiles;
    const files = data.files;

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
      const absolutePath = path.join(baseDir, fileName);

      await fs.promises.writeFile(absolutePath, file.buffer);

      savedFiles[fieldName] = `insurance-documents/${fileName}`;
    }
    


     return savedFiles;
  
  } catch (error) {
    console.log(error.message);
    throw(new AppError(error.message, 400) );
  }
}


module.exports.saveInsuranceFiles = saveInsuranceFiles;
