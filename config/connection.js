const mysql = require('mysql2');
//require('dotenv').config() 

const db = mysql.createConnection(
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,
  {
    host: "localhost",
    user: "root",
    password: "fIk262/?56Gh",
    database: "employee_db",
  }
);

module.exports = db;
