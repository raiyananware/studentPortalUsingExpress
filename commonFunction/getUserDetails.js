const db = require("../static/db.js")

const getUserDetailsByEmail = async  (username)=> {
  const data = await db.query(
    `select * from user where username='${username}'`,
  );
  console.log(data)
  return data[0][0];
}

const getUserById=async(userId)=>{
  const data = await db.query(
    `select * from user where id='${userId}'`,
  );
  return data[0][0];}

module.exports = { getUserDetailsByEmail, getUserById};
