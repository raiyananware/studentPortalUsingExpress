const db = require("../../../static/db.js");

const getLectures = async (req, res) => {
  const data = await db.query(`select * from lecture`);
  res.json({ lectures: data[0] });
};

module.exports = { getLectures };