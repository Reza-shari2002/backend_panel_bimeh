const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // حداکثر ۵ مگابایت برای هر فایل
    files: 10,                 // حداکثر ۱۰ فایل در کل درخواست (برای پوشش تمام حالت‌ها)
    fields: 15                 // حداکثر ۱۵ فیلد متنی در body
  },
});

const uploadInsuranceDocuments = upload.fields([
  { name: "national_id_image_url", maxCount: 1 },
  { name: "car_card_image_front_url", maxCount: 1 },
  { name: "car_card_image_back_url", maxCount: 1 },
  { name: "green_paper_image_url", maxCount: 1 },
  { name: "prev_insurance_image_url", maxCount: 1 },
  { name: "plate_history_image_url", maxCount: 1 },
  { name: "endorsement_image_url", maxCount: 1 },
  { name: "relationship_docs1_image_person1_url", maxCount: 1 },
  { name: "relationship_docs2_image_person1_url", maxCount: 1 },
  { name: "relationship_docs1_image_person2_url", maxCount: 1 },
  { name: "relationship_docs2_image_person2_url", maxCount: 1 }
]);

module.exports = uploadInsuranceDocuments;
