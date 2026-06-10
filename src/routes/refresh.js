const express = require('express');
const iplimiter = require('../config/Iplimiter');
const refresh_check = require('../middlewares/refresh/refresh');
const refreshcontroller = require('../controllers/refresh/refreshcontroller');
const checkbody = require('../genertic middlewares/checkbody');

const router = express.Router();

router.post('/' ,iplimiter ,checkbody('refresh'),refresh_check , refreshcontroller );

module.exports = router;