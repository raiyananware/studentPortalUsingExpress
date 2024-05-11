const db = require("../../static/db.js");
const { getUserDetails } = require("../../commonFunction/getUserDetails.js");

const updateUser = async (req, res) => {
  const userDetails = await getUserDetails(req.user.username);
  console.log(req.user.userId);
  if (req.user.userId == (userDetails.id || 1)) {
    res.json({ msg: "in Update User" });
  } else {
    res
      .status(401)
      .json({
        msg: "you don't have the permission to update the another User's Data",
      });
  }
};

module.exports = { updateUser };
