const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Reza.sh2002",
  database: "test_db",
  waitForConnections: true
});

module.exports = db;
