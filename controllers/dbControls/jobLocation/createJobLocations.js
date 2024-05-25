const db = require("../../../static/db.js");

const addJobLocations = async (req, res) => {
  const body = req.body;

  try {
    for (const eachLocation of body.locations) {
      const tempData = await db.query(
        `select * from jobLocationAvailable where location='${eachLocation}'`,
      );
      if (tempData[0].length == 0) {
        await db.query(
          `insert into jobLocationAvailable (location) values ('${eachLocation}')`,
        );
      }
    }
    res.status(201).json({ msg: "Job Locations Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};


module.exports={addJobLocations}