const AppError = require('../../config/AppErrore');
const form_db = require('../../services/db/forms');
const { message } = require('../../validators/login_validate');
const documentService = require('../../services/document/documentService')

async function savedataController(req,res,next) {
    try{
      const result =  await documentService.savedocument(req);
      
      res.status(200).json({message:"done"});
        
    }
    catch(err){
        console.log(err.message);
        next(new AppError("server error" , 500))
    }
    
}

module.exports = savedataController;