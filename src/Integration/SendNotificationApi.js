const axiosInstance = require("./axiosInstance");

async function SendNotificationApi(message, phoneNumber) {
  try {
    const response = await axiosInstance.post("/send-notification", {
      message,
      phoneNumber,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = SendNotificationApi;
