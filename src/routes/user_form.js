const express = require('express');
const router = express.Router();
const iplimiter = require('../config/Iplimiter');
const token_verify = require('../middlewares/Tokenverify/Tokenverify')
const 




router.get('/:user_id',iplimiter,token_verify)