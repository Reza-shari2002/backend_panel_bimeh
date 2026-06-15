const file_type = require("file-type");


function getRequiredFiles(body) {
  const required = ["national_id_image_url"];

  if (body.document_car_type == 0) {
    required.push("car_card_image_front_url", "car_card_image_back_url");
  }

  if (body.document_car_type == 1) {
    required.push("green_paper_image_url");
  }

  if (body.has_discount_transfer == 1) {
    required.push("prev_insurance_image_url");

    if (body.plate_history_type == 1) {
      required.push("plate_history_image_url");
    }
  }

  if (body.has_active_insurance_transfer == 1) {
    required.push("endorsement_image_url");
  }

  if (body.is_relative_transfer == 1) {
    required.push(
      "relationship_docs1_image_person1_url",
      "relationship_docs2_image_person1_url",
      "relationship_docs1_image_person2_url",
      "relationship_docs2_image_person2_url"
    );
  }

  return required;
}


async function validateUploadedFiles(req, res, next) {
  const requiredFiles = getRequiredFiles(req.body);

  const uploaded = req.files || {};

  const allowed = ["pdf", "jpg", "jpeg", "png", "webp"];

  for (const field of requiredFiles) {
    const file = uploaded?.[field]?.[0];

    if (!file) {
      return res.status(400).json({
        message: `${field} is required`
      });
    }

    const detectedType = await fileTypeFromBuffer(file.buffer);

    if (!detectedType || !allowed.includes(detectedType.ext)) {
      return res.status(400).json({
        message: `Invalid file type for ${field}`
      });
    }
  }

  next();
}


module.exports = validateUploadedFiles;