const express = require("express");
const iplimiter = require("../config/Iplimiter");
const token_verify = require("../middlewares/Tokenverify/Tokenverify");
const users_form_controller = require("../controllers/users_form/users_form");
const checkpermission = require("../genertic middlewares/checkPermission");
const userData_controller = require("../controllers/users_form/user_form");
const uploadInsuranceDocuments = require("../middlewares/forms/uploadInsuranceDocuments");
const checkbody = require("../genertic middlewares/checkbody");
const validationUploadFiles = require('../middlewares/forms/validationUploadFiles');
const verifyCaptcha = require('../middlewares/forms/verifyCaptcha');
const verifyRCaptcha = require('../middlewares/forms/verifyCaptchaRcaptcha')
const savedataController = require('../controllers/users_form/savedataController');
const viewcontroler = require('../controllers/users_form/viewcontroler');

const router = express.Router();





router.get("/",/* iplimiter*/ token_verify, users_form_controller);


router.get("/view"  , token_verify  ,  viewcontroler);


router.get(
  "/:form_id",/*
  iplimiter,*/
  token_verify,
  checkpermission("user_form"),
  userData_controller,
);




router.post("/", iplimiter,/*verifyRCaptcha,*/ uploadInsuranceDocuments, checkbody("create form"),validationUploadFiles , savedataController );

module.exports = router;
