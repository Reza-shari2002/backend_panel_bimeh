const express = require("express");
const checkbody_query = require("../../middlewares/checkbody&query.js");
const iplimiter = require("../../middlewares/Iplimiter.js");
const token_verify = require("../../middlewares/Tokenverify.js");
const sendnotificationController = require("../controllers/notification/sendnotificationController.js");

const router = express.Router();

router.use(express.json());

router.post(
  "/send",
  iplimiter,
  token_verify,
  checkbody("send"),
  sendnotificationController,
);

module.exports = router;
