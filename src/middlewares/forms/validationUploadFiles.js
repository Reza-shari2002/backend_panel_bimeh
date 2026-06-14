const file_type = require("file-type");

async function validationUploadFiles(req, res, next) {
  const national_id_image_url = req?.files?.national_id_image_url?.[0];
  const car_card_image_front_url = req?.files?.car_card_image_front_url?.[0];
  const car_card_image_back_url = req?.files?.car_card_image_back_url?.[0];
  const green_paper_image_url = req?.files?.green_paper_image_url?.[0];
  const prev_insurance_image_url = req?.files?.prev_insurance_image_url?.[0];
  const plate_history_image_url = req?.files?.plate_history_image_url?.[0];
  const endorsement_image_url = req?.files?.endorsement_image_url?.[0];
  const relationship_docs1_image_person1_url =
    req?.files?.relationship_docs1_image_person1_url?.[0];
  const relationship_docs2_image_person1_url =
    req?.files?.relationship_docs2_image_person1_url?.[0];
  const relationship_docs1_image_person2_url =
    req?.files?.relationship_docs1_image_person2_url?.[0];
  const relationship_docs2_image_person2_url =
    req?.files?.relationship_docs2_image_person2_url?.[0];
}
