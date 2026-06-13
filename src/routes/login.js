const express = require('express');
const loginmiddleware = require('../middlewares/login/loginmiddleware');
const loginController = require('../controllers/login/loginController.js');
const checkbody = require('../genertic middlewares/checkbody.js');
const iplimiter = require('../config/Iplimiter.js');
const router = express.Router();


router.use(express.json({limit:'10mg'}));

router.post('/',iplimiter, checkbody('login'), loginmiddleware, loginController);

module.exports = router;
