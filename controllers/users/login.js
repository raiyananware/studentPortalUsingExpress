const db = require("../../static/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../static/static.json").jwtSecret;
const { getUserDetails } = require("../../commonFunction/getUserDetails.js");

async function generateAccessToken(user) {
  return await jwt.sign(user, jwtSecret, { expiresIn: "2h" });
}

const login = async (req, res) => {
  const body = req.body;
  const userData = await getUserDetails(body.email);
  try {
    const match = await bcrypt.compare(body.password, userData.password);
    if (match) {
      const tempUserData = {
        username: userData.username,
        userId: userData.id,
        mobileNumber: userData.mobileNumber,
        firstName: userData.first_name,
        lastName: userData.last_name,
        teacher: userData.is_staff,
        admin: userData.is_superuser,
        active: userData.is_active,
      };

      const jwtToken = await generateAccessToken(tempUserData);
      res.json({ msg: "User Logged In", token: "Bearer " + jwtToken, userId:userData.userId });
    } else {
      res.status(401).send("Invalid username or password");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { login };
