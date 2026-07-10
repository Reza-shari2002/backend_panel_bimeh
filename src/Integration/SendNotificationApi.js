const axiosInstance = require("./axiosInstance");

async function SendNotificationApi(messageTexts, mobiles) {
  try {
    // ۱. ارسال مستقیم آبجکت (بدون نیاز به JSON.stringify)
    // ۲. اصلاح نحوه نگارش پارامتر به sendDateTime
    const payload = {
      lineNumber: "50003181890144",
      messageTexts,
      mobiles,
      sendDateTime: null, // اصلاح نام پارامتر به CamelCase
    };

    const response = await axiosInstance.post("/send/likeToLike", payload);

    return response.data;
  } catch (error) {
    console.log(error)
    throw error.response?.data || error.message;
  }
}

module.exports = SendNotificationApi;
