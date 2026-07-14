const AppError = require("../../config/AppErrore");
const db = require("../../config/db");

async function find_user_data(id) {
  try {
    const query = "select * from forms where id = ?";
    const [user_data] = await db.query(query, [id]);

    if (user_data.length === 0) {
      throw new AppError("user not found", 404);
    }

    return user_data[0];
  } catch (err) {
    console.log(err.message);

    if (err instanceof AppError) {
      throw err;
    }

    throw new AppError("server error", 500);
  }
}

async function find_users_data() {
  try {
    const query =
      "select phone_number, payment_type, id, address, postal_code, plate_history_code, has_discount_transfer, has_active_insurance_transfer, is_relative_transfer, plate_history_type, document_car_type, full_name, created_at from forms order by created_at desc";
    const [users_form] = await db.query(query);
    return users_form;
  } catch (err) {
    console.log(err.message);
    throw new AppError("server error", 500);
  }
}

async function saveondb(files, body) {
  const final_data = {
    ...body,
    ...files,
  };

  try {
    const query = "INSERT INTO forms SET ?";
    const [result] = await db.query(query, [final_data]);

    console.log("data added to db");

    return result;
  } catch (err) {
    console.log(err.message);
    throw new AppError("server error", 500);
  }
}

module.exports.find_user_data = find_user_data;
module.exports.find_users_data = find_users_data;
module.exports.saveondb = saveondb;
