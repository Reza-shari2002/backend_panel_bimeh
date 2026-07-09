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

module.exports.SendNotification_submit = SendNotification_submit;