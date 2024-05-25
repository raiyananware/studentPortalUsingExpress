const db = require("../../static/db.js");

const getTopics=async (req,res)=>{
    const topicsData=await db.query(`select * from topic`)
    res.json(topicsData[0])
}

module.exports={getTopics}