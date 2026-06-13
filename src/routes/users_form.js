const express = require('express');
const iplimiter = require('../config/Iplimiter');
const token_verify = require('../middlewares/Tokenverify/Tokenverify')
const users_form_controller = require('../controllers/users_form/users_form');
const checkpermission = require('../genertic middlewares/checkPermission');
const userData_controller = require('../controllers/users_form/user_form');
const uploadInsuranceDocuments = require('../middlewares/forms/uploadInsuranceDocuments');


const router = express.Router();



router.get('/',iplimiter , token_verify , users_form_controller);

router.get('/:user_id',iplimiter,token_verify,checkpermission('user_form'),userData_controller);

router.post('/' , iplimiter , uploadInsuranceDocuments , (req,res)=>{res.json({name:req.body})}  )  



module.exports = router;