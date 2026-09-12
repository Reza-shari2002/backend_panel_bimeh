const express = require('express');
const third_party_insurance_router = require('../modules/third-party-insurance/third-party.routes');
const motor_third_party_insurance_router = require('../modules/motor-third-party-insurance/motor-third-party.routes');
const notification_router = require('../modules/notification/notification.routes');
const login_router = require('../modules/login/login.routes');
const router  = express.Router()


router.use("/login", login_router);

router.use("/third-party-insurance/forms", third_party_insurance_router);

router.use("/motor-third-party-insurance/forms" , motor_third_party_insurance_router);

router.use("/notification", notification_router);


module.exports = router;
