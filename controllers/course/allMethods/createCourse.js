const db=require("../../../static/db.js")


async function getCourseByName(name){
    const TempData=await db.query(`select * from course where courseName='${name}'`)
    return TempData[0]
}


const createCourse=async(req,res)=>{
    if(req.user.is_superuser==1){
    const body=req.body;
    const courseData=await getCourseByName(body.courseName)
    if(courseData.length==0){
        try{
            await db.query(`insert into course(courseName,courseTopicIds) values('${body.courseName}', '[${body.topicIds}]')`)
            res.status(201).json({msg:"Course Created Successfully"})
        }
        catch(error){
            console.log(error)
            res.status(500).json({msg:"Internal Server Error"})
        }
    }else{
        res.status(500).json({msg:"Course with this name already exist"})
    }
}else{
    res.status(401).json({msg:"You do not have permission to create a Course"})
}
}


module.exports={createCourse}