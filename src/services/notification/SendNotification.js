const  MakeMessage  = require("./MakeMessage")
const SendNotificationApi  = require("../../Integration/SendNotificationApi");
async function SendNotification_submit(data) {
    try{
        const message = MakeMessage(data);
        console.log(message);
        const response =  await SendNotificationApi(message  , data.phone_number);
        return response;
    }
    catch(err){
        throw err;
    }
}

async function SendNotification_first_message(data) {
    try{
        const message = 'کاربر گرامی درخواست شما ثبت گردید منتظر تماس از طرف پشتیبانی باشید'
        console.log(message);
        const response =  await SendNotificationApi(message  , data.phone_number);
        return response;
    }
    catch(err){
        throw err;
    }
}

module.exports.SendNotification_submit = SendNotification_submit;
module.exports.SendNotification_first_message = SendNotification_first_message;