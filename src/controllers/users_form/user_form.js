const AppError = require("../../config/AppErrore");

async function user_form_controller(req, res, next) {
  try {
    const formData =
      typeof req.user?.toJSON === "function"
        ? req.user.toJSON()
        : { ...req.user };

    const fileFields = [
      "national_id_image_url",
      "car_card_image_front_url",
      "car_card_image_back_url",
      "green_paper_image_url",
      "prev_insurance_image_url",
      "plate_history_image_url",
      "endorsement_image_url",
      "relationship_docs1_image_person1_url",
      "relationship_docs2_image_person1_url",
      "relationship_docs1_image_person2_url",
      "relationship_docs2_image_person2_url",
    ];

    for (const field of fileFields) {
      const filePath = formData[field];

      if (filePath) {
        formData[field] = `forms/view?path=${encodeURIComponent(filePath)}`;
      }
    }

    return res.status(200).json({
      status: "success",
      data: formData,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = user_form_controller;
