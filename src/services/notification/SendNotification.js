const  MakeMessage  = require("./MakeMessage")
const SendNotificationApi  = require("../../Integration/SendNotificationApi");
async function SendNotification_submit(data) {
    try{
        const message = MakeMessage(data);
        const response =  await SendNotificationApi([message , "پیام برای کاربر ارسال شد"]  , [data.phone_number , "09165246694"]);
        return response;
    }
    catch(err){
        throw err;
    }
}

async function SendNotification_first_message(data) {
    try{
        const message1 = 'کاربر گرامی درخواست شما ثبت گردید منتظر تماس از طرف پشتیبانی باشید'
        const message2 = `کاربر گرامی شخصی به نام ${data.full_name} ثبت اطلاعات کرد خواهشا پنل را چک فرمایید`
        const response =  await SendNotificationApi([message1,message2]  , [data.phone_number,'09165246694']);
        return response;
    }
    catch(err){
        throw err;
    }
}

module.exports.SendNotification_submit = SendNotification_submit;
module.exports.SendNotification_first_message = SendNotification_first_message;