const db = require("../../../static/db.js");
const saltRounds = require("../../../static/static.json").saltRounds;
const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Error:", error);
    return { error: "Internal Server Error" };
  }
};

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
          await db.query(`INSERT INTO user (password, username, email, first_name, last_name, mobileNumber, is_superuser, is_staff, is_active) VALUES 
            ('${encryptedPassword}', '${body.email}', '${body.email}', '${body.firstName}', '${body.lastName}', ${body.mobileNumber}, ${body.admin}, ${body.teacher}, 1);`);
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
    res.status(401).json({msg:"User is not authorized for creating another User"});
  }
};

module.exports = { createUser };
