function MakeMessage(data) {
  const {
    payment_type,
    date,
    full_name,
    car_name,
    total_cost,
    precome,
    cost_of_rate,
    count_of_rate,
  } = data;

  const normalizedPaymentType = String(payment_type);
  const formattedDate = new Date(date).toLocaleDateString("fa-IR");
  const formattedTotalCost = Number(total_cost).toLocaleString("fa-IR");
  const formattedPrecome = Number(precome).toLocaleString("fa-IR");
  const formattedCostOfRate = Number(cost_of_rate).toLocaleString("fa-IR");

  if (normalizedPaymentType === "1") {
    return `کاربر گرامی
 ${full_name}، بیمه نامه خودرو ${car_name} به مبلغ ${formattedTotalCost} ریال به صورت اقساط با پیش پرداخت ${formattedPrecome} ریال و اقساط ماهانه ${formattedCostOfRate} ریال به تعداد ${count_of_rate} قسط در تاریخ ${formattedDate} برای شما ثبت گردید. جهت پرداخت نهایی به قسمت فروشگاه ،بخش پرداخت حق بیمه مراجعه کنید

با تشکر
 اپلیکیشن پرند`;
  }

  if (normalizedPaymentType === "0") {
    return `کاربر گرامی
 ${full_name}، بیمه نامه خودرو ${car_name} به مبلغ ${formattedTotalCost} ریال به صورت نقد در تاریخ ${formattedDate} برای شما ثبت گردید.
جهت پرداخت نهایی به قسمت فروشگاه ،بخش پرداخت حق بیمه مراجعه کنید.

با تشکر
 اپلیکیشن پرند`;
  }

  return "";
}

module.exports = MakeMessage;
