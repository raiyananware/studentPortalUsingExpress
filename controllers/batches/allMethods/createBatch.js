const db=require("../../../static/db.js")

const createBatch=async (req,res)=>{
    const body=req.body;
    console.log(body)
    res.json(body)

}


module.exports={createBatch}