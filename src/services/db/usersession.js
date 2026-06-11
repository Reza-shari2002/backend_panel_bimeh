const db = require("../../config/db");
const AppError = require("../../config/AppErrore");

async function insert_user_sessions(data) {
  try {
    const query =
      "insert into user_sessions (admin_id) values(?)";
    const [result] = await db.query(query, [data.admin_id]);
    return result;
  } catch (err) {
    throw new AppError("server error", 500);
  }
}






module.exports.insert = insert_user_sessions;
module.exports.revoke_sessions = revoke_sessions;
module.exports.find_sessions = find_sessions;
