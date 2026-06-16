const AppError = require('../../config/AppErrore');
const form_db = require('../../services/db/forms');
const { message } = require('../../validators/login_validate');

async function saveondb(req,res,next) {
    try{
      const result =  await form_db.saveondb(req.savedFiles , req.body)
      console.log("upload on db done");
      res.status(200).json({message:"done"});

    }
    catch(err){
        console.log(err.message);
        next(new AppError("server error" , 500))
    }
    
}

module.exports = saveondb;