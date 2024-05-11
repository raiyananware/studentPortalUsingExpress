const db=require("../../../static/db.js")


const createQualification= async (req, res)=>{
    const qualification = await db.query(`select * from qualificationavailable`);
    if (qualification[0].length == 0) {
      try {
        data=`INSERT INTO qualificationavailable (qualificationName) VALUES 
        ('Post Graduation'),
        ('Graduation'),
        ('Diploma'),
        ('12th Board'),
        ('10th Board');`
        await db.query(data)
         res.status(201).json({ msg: "Qualification Added successfully"});
      } catch (error) {
        res.status(500).json(error) ;
      }
    } else {
       res.status(500).json({ msg:"Qualification already added", qualification: qualification[0]});
    }

}

module.exports= {createQualification}