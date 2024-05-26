const db = require('../../static/db.js')

const getSubTopics=async (req,res)=>{
    console.log(req.params)
    res.json({msg:"Inside getSubTopic"})
}

module.exports={getSubTopics}