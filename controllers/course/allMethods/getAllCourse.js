const db = require("../../../static/db.js");

const getCourse = async (req, res) => {
  if (req.params.courseId) {
    const courseData = await db.query(
      `select * from course where courseId=${req.params.courseId}`,
    );
    res.json(courseData[0][0]);
  } else if (!req.params.courseId) {
    const courseData = await db.query(`select * from course`);
    res.json(courseData[0]);
  }
};

module.exports = { getCourse };
