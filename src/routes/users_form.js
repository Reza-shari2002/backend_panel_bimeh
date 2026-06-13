const express = require('express');
const iplimiter = require('../config/Iplimiter');
const token_verify = require('../middlewares/Tokenverify/Tokenverify')
const checkpermission = require('../genertic middlewares/checkPermission')
const userData_controller = require('../controllers/users_form/user_form')


const router = express.Router();


router.get('/',iplimiter , token_verify)

router.get('/:user_id',iplimiter,token_verify,checkpermission('user_form'),userData_controller);



module.exports = router;