const db = require("../../../static/db.js");
const { getUserById } = require("../../../commonFunction/getUserDetails.js");

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

  if (user.dob) {
    tempData.personalDetails["dob"] = user.dob.toString().split("T")[0];
  }

  if (user.jobLocationSelected) {
    tempData.jobLocationSelected = JSON.parse(user.jobLocationSelected);
  }

  return tempData;
};

const getUser = async (req, res) => {
  if (req.params.userId && req.user.is_superuser == 1) {
    const userData = await getUserById(req.params.userId);
    const data = await createUserDetails(userData);
    res.json(data);
  } else if (req.params.userId && req.user.is_superuser != 1) {
    res
      .status(401)
      .json({ msg: "You are not Authorized to access other users Data" });
  } else {
    const data = await createUserDetails(req.user);
    res.json(data);
  }
};

module.exports = { getUser };
