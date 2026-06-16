const AppError = require("../../config/AppErrore");
const db = require("../../config/db");

async function find_user_data(id) {
  try {
    const query = "select * from forms where id = ?";
    const [user_data] = await db.query(query, [id]);
    if (user_data.length === 0) {
      throw new AppError("user not found", 404);
    }
    return user_data;
  } catch (err) {
    throw new AppError(err.message, 500);
  }
}

async function find_users_data() {
  try {
    const query = "select * from forms";
    const [users_form] = await db.query(query);
    return users_form;
  } catch (err) {
    console.log(err.message);
    throw new AppError("server Error", 500);
  }
}




async function saveondb(files, body) {

  const final_data = {
    ...body,
    ...files
  };

  try {

    const query = "INSERT INTO forms SET ?";

    const [result] = await db.query(query, [final_data]);

    console.log("data added to db");

    return result;

  } catch (err) {

   

    throw new AppError(err.message, 500);
  }
}




module.exports.find_user_data = find_user_data;
module.exports.find_users_data = find_users_data;
module.exports.saveondb = saveondb;