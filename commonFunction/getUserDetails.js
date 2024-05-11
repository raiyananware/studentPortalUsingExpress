const db = require("../static/db.js")

const getUserDetails = async  (username)=> {
  const data = await db.query(
    `select * from user where username='${username}'`,
  );
  console.log(username)
  return data[0][0];
}

module.exports = { getUserDetails };
