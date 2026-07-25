const MakeMessage = require("./MakeMessage");
const SendNotificationApi = require("../../Integration/SendNotificationApiKavenegar");

async function SendNotification_submit(data) {
  const message = MakeMessage(data);

  const response = await SendNotificationApi(
    [message, "پیام برای کاربر ارسال شد" ,  "پیام برای کاربر ارسال شد" ,  "پیام برای کاربر ارسال شد" ,  "پیام برای کاربر ارسال شد"],
    [data.phone_number, "09166082219" ,"09001052444"  , "09165246694"  , "09029082442"]
  );

  return response;
}
async function SendNotification_first_message(data) {
  const message1 = `کاربر گرامی 
  درخواست شما ثبت گردید لطفا منتظر تماس از طرف پشتیبان اپلیکیشن پرند باشید` 
  const message2 = `پشتیبان گرامی
شخصی به نام ${data.full_name} جهت بیمه شخص ثالث اطلاعات خود را ثبت کرد ، لطفا پنل را چک کنید`;

  const response = await SendNotificationApi(
    [message1, message2 , message2 , message2 ,  message2],
    [data.phone_number, "09166082219" , "09001052444"  , "09165246694"  , "09029082442"]
  );

  return response;
}

module.exports.SendNotification_submit = SendNotification_submit;
module.exports.SendNotification_first_message = SendNotification_first_message;
