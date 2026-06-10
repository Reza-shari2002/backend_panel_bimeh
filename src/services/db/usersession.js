const db = require("../../config/db");
const AppError = require("../../config/AppErrore");

async function insert_user_sessions(data) {
  try {
    const query =
      "insert into user_sessions (user_id,refresh_token) values(?,?)";
    const [result] = await db.query(query, [data.user_id, data.refresh_token]);
    return result;
  } catch (err) {
    throw new AppError("server error", 500);
  }
}

async function revoke_sessions(user_id) {
  try {
    const query = "update user_sessions set is_revoked = ? where user_id = ?";
    const [data] = await db.query(query, [1, user_id]);
  } catch (err) {
    throw new AppError("server error", 500);
  }
}

async function find_sessions(refresh_token) {
  const query = "select * from user_sessions where refresh_token = ?";
  try {
    const [data] = await db.query(query, [refresh_token]);
    return data;

  } catch (err) {
    throw new AppError("server error ", 500);
  }
}

module.exports.insert = insert_user_sessions;
module.exports.revoke_sessions = revoke_sessions;
module.exports.find_sessions = find_sessions;
