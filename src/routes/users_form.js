const express = require('express');
const iplimiter = require('../config/Iplimiter');
const token_verify = require('../middlewares/Tokenverify/Tokenverify')
const users_form_controller = require('../controllers/users_form/users_form');
const checkpermission = require('../genertic middlewares/checkPermission')
const userData_controller = require('../controllers/users_form/user_form')
const multer = require('multer');

const router = express.Router();

const upload = multer({storage:multer.memoryStorage() , limits:{fileSize:5*1024*1024 , files:2 , fields:2}})

router.get('/',iplimiter , token_verify , users_form_controller);

router.get('/:user_id',iplimiter,token_verify,checkpermission('user_form'),userData_controller);

router.post('/' , iplimiter , upload.fields([{name:'car_document_front' ,maxCount:1} , {name:"car" , maxCount:1}]) , (req,res)=>{res.json({name:req.body})}  )  



module.exports = router;