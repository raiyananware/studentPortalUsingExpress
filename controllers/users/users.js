const db = require("../../static/db.js");
const saltRounds = require("../../static/static.json").saltRounds;
const { getUserById } = require("../../commonFunction/getUserDetails.js");
const bcrypt = require("bcrypt");
const {
  getUserDetailsByEmail,
} = require("../../commonFunction/getUserDetails.js");

const encryptPassword = async (password) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Error:", error);
    return { error: "Internal Server Error" };
  }
};

async function getExactDate(date) {
  return await date.toISOString().split("T")[0];
}

const getQualification = async (userId) => {
  const qualification = await db.query(
    `select * from qualification where studentID=${userId}`,
  );
  return qualification[0][0];
};

const getWorkingDetails = async (userId) => {
  const workingDetails = await db.query(
    `select * from workingDetails where studentID=${userId}`,
  );
  return workingDetails[0][0];
};

const createUserDetails = async (user) => {
  const workingDetails = await getWorkingDetails(user.id);
  const qualification = await getQualification(user.id);

  let tempData = {
    jobLocationSelected: [],
    personalDetails: {},
    workDetails: {},
    qualification: {},
  };

  {
    tempData.personalDetails["id"] = user.id;
    tempData.personalDetails["admin"] = user.is_superuser == 1 ? true : false;
    tempData.personalDetails["teacher"] = user.is_staff == 1 ? true : false;
    tempData.personalDetails["active"] = user.is_active == 1 ? true : false;
    tempData.personalDetails["username"] = user.username;
    tempData.personalDetails["firstName"] = user.first_name;
    tempData.personalDetails["middleName"] = user.middleName;
    tempData.personalDetails["lastName"] = user.last_name;
    tempData.personalDetails["email"] = user.email;
    tempData.personalDetails["mobileNumber"] = user.mobileNumber;
    tempData.personalDetails["gender"] = user.gender;
    tempData.personalDetails["batchId"] = user.batchId;
  }

  if (qualification) {
    delete qualification.studentID;
    tempData.qualification = qualification;
  }

  if (workingDetails) {
    delete workingDetails.studentID;
    tempData.workDetails = workingDetails;
    tempData.workDetails.fresher = workingDetails.fresher == 1 ? true : false;
    tempData.workDetails.working = workingDetails.working == 1 ? true : false;
    tempData.workDetails.startDate = await getExactDate(
      workingDetails.startDate,
    );
    tempData.workDetails.lastDate = await getExactDate(workingDetails.lastDate);
  }

  if (user.dob)
    tempData.personalDetails["dob"] = user.dob.toString().split("T")[0];

  if (user.jobLocationSelected)
    tempData.jobLocationSelected = JSON.parse(user.jobLocationSelected);

  return tempData;
};

async function changeActiveStatus(userId, state) {
  db.query(`update user set is_active=${state} where id=${userId}`);
}

const createUser = async (req, res) => {
  if (req.user.is_superuser == 1) {
    const body = req.body;
    const getUser = await db.query(
      `select * from user where username='${body.email}'`,
    );
    if (getUser[0].length == 0) {
      const encryptedPassword = await encryptPassword(body.password);

      if (!encryptedPassword.error) {
        try {
          await db.query(`INSERT INTO user (password, username, email, first_name, last_name, mobileNumber, is_superuser, is_staff, is_active, dob, gender) VALUES 
            ('${encryptedPassword}', '${body.email}', '${body.email}', '${body.firstName}', '${body.lastName}', ${body.mobileNumber}, ${body.admin}, ${body.teacher}, 1, '${body.dob}', ${body.gender});`);
          res.status(201).json({ msg: "User Created Successfully" });
        } catch (error) {
          console.log(error);
          res.status(500).json(error);
        }
      } else {
        res.status(500).json({ msg: encryptedPassword.error });
      }
    } else {
      res.status(400).json({ msg: "User with this Email Exist" });
    }
  } else {
    res
      .status(401)
      .json({ msg: "User is not authorized for creating another User" });
  }
};

const getUser = async (req, res) => {
  if (req.params.userId && req.user.is_superuser == 1) {
    const userData = await getUserById(req.params.userId);
    const data = await createUserDetails(userData);
    res.json(data);
  } else if (!req.params.userId || req.params.userId == req.user.id) {
    const data = await createUserDetails(req.user);
    res.json(data);
  } else {
    res
      .status(401)
      .json({ msg: "You are not Authorized to access other users Data" });
  }
};

const updateUser = async (req, res) => {
  const userDetails = await getUserDetailsByEmail(req.user.username);
  if (req.user.id == (userDetails.id || 1)) {
    res.json({ msg: "in Update User" });
  } else {
    res.status(401).json({
      msg: "you don't have the permission to update the another User's Data",
    });
  }
};

const activateUser = async (req, res) => {
  console.log(req.user);
  if (req.user.is_superuser == 1) {
    let userData = await getUserById(req.params.userId);
    if (userData.is_active == 0) {
      changeActiveStatus(userData.id, 1);
      res.status(200).json({ msg: "User activated successfully" });
    } else {
      res.status(500).json({ msg: "User is already active" });
    }
  } else {
    res.status(401).json({
      msg: "You don't have the permission to activate or deactivate User",
    });
  }
};

const deactivateUser = async (req, res) => {
  if (req.user.is_superuser == 1) {
    let userData = await getUserById(req.params.userId);
    if (userData.is_active == 1) {
      changeActiveStatus(userData.id, 0);
      res.status(200).json({ msg: "User deactivated successfully" });
    } else {
      res.status(500).json({ msg: "User is already inactive" });
    }
  } else {
    res.status(401).json({
      msg: "You don't hove the permission to activate or deactivate User",
    });
  }
};

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
        res.json({ msg: "Qualification Updated Successfully" });
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
            where studentId=${body.studentId};`);
        res.json({ msg: "Qualifications Updated Successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
      }
    }
  } else {
    res
      .status(401)
      .json({ msg: "You are not authorized to update other users data" });
  }
};

const updateJobLocations = async (req, res) => {
  const body = req.body;
  try {
    await db.query(`update user set jobLocationSelected='${body.locations}'`);
    res.json({ msg: "Job Locations Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

const updateWorkExperience = async (req, res) => {
  const body = req.body;
  if (body.studentId == req.user.id) {
    const getDetails = await db.query(
      `select * from workingDetails where studentId=${body.studentId}`,
    );
    if (getDetails[0].length == 0) {
      try {
        await db.query(`insert into workingDetails (studentID, fresher, working, companyName, designation, startDate, lastDate) values 
        (${body.studentId}, ${body.fresher ? 1 : 0}, ${
          body.working ? 1 : 0
        }, '${body.companyName}', '${body.designation}', '${
          body.startDate
        }', '${body.lastDate}' )`);
        res.status(200).json({ msg: "Work Experience Updated Successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
      }
    } else {
      try {
        await db.query(`update workingDetails set 
        fresher=${body.fresher ? 1 : 0},
        working=${body.working ? 1 : 0}, 
        companyName='${body.companyName}',
        designation='${body.designation}',
        startDate='${body.startDate}',
        lastDate='${body.lastDate}'
        where studentId=${body.studentId};`);
        res.status(200).json({ msg: "Work Experience Updated Successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
      }
    }
  } else {
    res
      .status(401)
      .json({ msg: "You are not authorized to update other users data" });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  activateUser,
  deactivateUser,
  updateQualification,
  updateJobLocations,
  updateWorkExperience,
};
