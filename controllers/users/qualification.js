const db = require("../../static/db.js");

const updateQualification = async (req, res) => {
  const body = req.body;
  if (body.studentId == req.user.id) {
    const getQualification = await db.query(
      `select * from qualification where studentId=${body.studentId}`,
    );
    if (getQualification[0].length == 0) {
      try {
        await db.query(`insert into qualification(studentID, highestQualification, university, yearOfPassing, score) values 
            (${body.studentId},'${body.highestQualification}','${body.university}',${body.yearOfPassing},${body.score})`);
        res.status(200).json({ msg: "Qualification Updated Successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
      }
    } else {
      try {
        await db.query(`update qualification set highestQualification='${body.highestQualification}',
            university='${body.university}',
            yearOfPassing=${body.yearOfPassing},
            score=${body.score}
            where studentId=2;`);
        res.status(200).json({ msg: "Qualifications Updated Successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
      }
    }
    res.json(body);
  } else {
    res.status(401).json({ msg: "You are not authorized to other users data" });
  }
};

module.exports = { updateQualification };
