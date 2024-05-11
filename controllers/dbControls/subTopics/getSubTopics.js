const db = require("../../../static/db.js");

const getSubTopics = async (req, res) => {
  if(req.query.topicId){
    const data = await db.query(`select * from subtopic where topicId=${req.query.topicId}`);
    res.json({ subTopics: data[0] });

  }
  else{
  const data = await db.query(`select * from subtopic`);
  res.json({ subTopics: data[0] });

}


};

module.exports = { getSubTopics };
