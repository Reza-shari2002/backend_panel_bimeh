const  SendNotification = require('../../services/notification/SendNotification');
const AppError = require('../../config/AppErrore')

async function sendnotificationController (req,res,next) {
    try{
        const response = await SendNotification.SendNotification_submit(req.body);
        res.status(200).json({message:"موفقیت آمیز بود"})
        return
    }
    catch(err){
        next(new AppError("خطا در ارتباط با سرویس ارسال پیام"   , 500))
    }
    
}

module.exports = sendnotificationController