const db = require("../../static/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../static/static.json").jwtSecret;
const {
  getUserDetailsByEmail,
} = require("../../commonFunction/getUserDetails.js");

async function generateAccessToken(user) {
  return await jwt.sign(user, jwtSecret, { expiresIn: "2h" });
}

const login = async (req, res) => {
  const body = req.body;
  const userData = await getUserDetailsByEmail(body.email);

  if (userData && userData.is_active == 1) {
    try {
      const match = await bcrypt.compare(body.password, userData.password);
      if (match) {
        delete userData.password;
        const tempUserData = userData;
        const jwtToken = await generateAccessToken(tempUserData);
        res.json({
          msg: "User Logged In",
          token: "Bearer " + jwtToken,
          userId: tempUserData.id,
        });
      } else {
        res.status(401).json({ msg: "Invalid password" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  } else if (userData && userData.is_active == 0) {
    res.status(500).json({
      msg: "You are InActive Please ask the administrator to activate yourself",
    });
  } else {
    res.status(401).send({ msg: "User Does Not Exist" });
  }
};

module.exports = { login };
