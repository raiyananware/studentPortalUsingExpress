const db = require("../../../static/db.js");
const {authenticateToken}= require("../../../commonFunction/decryptJwt.js")

const getTopics = async  (req, res) => {
  const data = await db.query(`select * from topic`);
  res.json({ topics: data[0] });
};

module.exports = { getTopics };
