const db=require("../../../static/db.js")


const getQualification= async (req,res)=>{
    try{
        const qualification = await db.query(`select * from qualificationavailable`)
        res.json({qualification:qualification[0]})
    }
    catch(error){
        res.status(500).json(error)
    }
}

module.exports= {getQualification}