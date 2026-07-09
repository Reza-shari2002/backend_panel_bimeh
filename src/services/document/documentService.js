const AppError = require('../../config/AppErrore');
const form_db = require('../db/forms');
const fileService = require('../file/fileService')

async function savedocument(req) {
    try{
      const savedFiles = await fileService.saveInsuranceFiles(req)  
      const result =  await form_db.saveondb(savedFiles , req.body)
      console.log("upload on db done");
      res.status(200).json({message:"done"});
      

    }
    catch(err){
        console.log(err.message);
        next(new AppError("server error" , 500))
    }
    
}

module.exports = saveondb;