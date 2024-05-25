const db = require("../../../static/db.js");

const { getUserById } = require("../../../commonFunction/getUserDetails.js");

async function changeActiveStatus(userId, state) {
  db.query(`update user set is_active=${state} where id=${userId}`);
}

const activateUser = async (req, res) => {
    console.log(req.user)
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

module.exports = { activateUser, deactivateUser };
