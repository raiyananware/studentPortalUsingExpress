const db = require("../../../static/db.js");
const { getUserById } = require("../../../commonFunction/getUserDetails.js");

const getUser = async (req, res) => {
  if (req.params.userId) {
    const userData = await getUserById(req.params.userId);
    delete userData.password;
    res.json(userData);
  } else if (!req.params.userId) {
    delete req.user.iat;
    delete req.user.exp;
    res.json(req.user);
  }
};

module.exports = { getUser };
