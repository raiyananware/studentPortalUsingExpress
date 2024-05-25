const db = require("../../../static/db.js");
const { getUserDetailsByEmail } = require("../../../commonFunction/getUserDetails.js");

const updateUser = async (req, res) => {
  const userDetails = await getUserDetailsByEmail(req.user.username);
  // console.log(req.user.userId);
  if (req.user.id == (userDetails.id || 1)) {
    res.json({ msg: "in Update User" });
  } else {
    res.status(401).json({
      msg: "you don't have the permission to update the another User's Data",
    });
  }
};

// const updateUserBatch=async (req,res)=>{

// }

module.exports = { updateUser };
