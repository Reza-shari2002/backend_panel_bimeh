const axiosInstance = require("./axiosInstance");

async function SendNotificationApi(messageTexts, mobiles) {
  try {
    const data = JSON.stringify({
      lineNumber: "30004505000017",
      messageTexts,
      mobiles,
      senddatetime: null,
    });

    const response = await axiosInstance.post("/send/likeToLike", data);

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}

module.exports = SendNotificationApi;
