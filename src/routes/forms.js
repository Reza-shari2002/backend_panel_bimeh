const express = require("express");
const iplimiter = require("../middlewares/Iplimiter");
const token_verify = require("../middlewares/Tokenverify");
const users_form_controller = require("../controllers/users_form/users_form");
const checkpermission = require("../genertic middlewares/checkPermission");
const userData_controller = require("../controllers/users_form/user_form");
const uploadInsuranceDocuments = require("../middlewares/forms/uploadInsuranceDocuments");
const checkbody = require("../genertic middlewares/checkbody");
const validationUploadFiles = require("../middlewares/forms/validationUploadFiles");
const verifyCaptcha = require("../middlewares/verifyCaptcha");
const verifyRCaptcha = require("../middlewares/verifyCaptchaRcaptcha");
const savedataController = require("../controllers/users_form/savedataController");
const viewcontroler = require("../controllers/users_form/viewcontroler");
const users_form_query_controller = require("../controllers/users_form/users_forms_query");
const filter_forms_controller = require('../controllers/users_form/filter_forms_controller')
const router = express.Router();
router.use(express.json());

router.get("/", /* iplimiter*/ token_verify, users_form_controller);

router.get("/view", token_verify, viewcontroler);

router.get('/query'  , token_verify , checkbody('query')  , users_form_query_controller );

router.get('/filter' , token_verify  ,  checkbody('filter') , filter_forms_controller )
 
router.get(
  "/:form_id"   , /* 
  iplimiter,*/
  token_verify,
  checkpermission("user_form"),
  userData_controller,
);

router.post(
  "/",
  iplimiter,
  verifyRCaptcha, uploadInsuranceDocuments,
  checkbody("create form"),
  validationUploadFiles,
  savedataController,
);

module.exports = router;
