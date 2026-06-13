const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const login_router = require ('../src/routes/login.js')
const users_form_router = require('./routes/users_form.js');
const multer = require('multer')
const app = express();
app.set('trust proxy', 1);  
app.use(cors());
app.use(helmet());


app.use('/login' ,login_router );

app.use('/forms',users_form_router);


app.use((err,req,res,next)=>{

      if (err instanceof multer.MulterError) {

    switch (err.code) {

      case 'LIMIT_FILE_SIZE':
        return res.status(400).json({
          message: 'File size exceeds limit (max 5MB)'
        });

      case 'LIMIT_FILE_COUNT':
        return res.status(400).json({
          message: 'Too many files uploaded'
        });

      case 'LIMIT_FIELD_COUNT':
        return res.status(400).json({
          message: 'Too many form fields'
        });

      case 'LIMIT_FIELD_SIZE':
        return res.status(400).json({
          message: 'Field value too large'
        });

      case 'LIMIT_UNEXPECTED_FILE':
        return res.status(400).json({
          message: 'Unexpected file field'
        });

      default:
        return res.status(400).json({
          message: 'Upload error'
        });
    }
  }
  else{  console.log(err.message);
    res.status(err.statuscode || 500).json({message:err.message , status:err.status})}
  
})

app.listen(4000 , ()=>{console.log('server is listening on port 4000')})


  