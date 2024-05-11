// import mysql from 'mysql2/promise';
const static= require('../static/static.json')
const mysql = require('mysql2/promise')
const pool = mysql.createPool({
  host: static.host,
  user: static.user,
  password: static.password,
  database: static.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
// export default pool;
module.exports= pool