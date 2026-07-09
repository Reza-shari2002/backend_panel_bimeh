const AppError = require('../../config/AppErrore');
const form_db = require('../db/forms');
const fileService = require('../file/fileService')
const notificationService = require('../notification/SendNotification');
async function savedocument(req) {
    try{
      const savedFiles = await fileService.saveInsuranceFiles(req)  
      const result =  await form_db.saveondb(savedFiles , req.body)
      console.log("upload on db done");
      const response = await notificationService.SendNotification_first_message(req.body)
      return ;
      
      

    }
    catch(err){
        throw(new AppError("server error" , 500))
    }
    
}

module.exports.savedocument = savedocument;