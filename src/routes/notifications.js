const express = require("express");
const checkbody = require("../genertic middlewares/checkbody.js");
const iplimiter = require("../config/Iplimiter.js");
const token_verify = require("../middlewares/Tokenverify/Tokenverify");
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
