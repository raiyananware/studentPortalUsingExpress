const db = require("../../static/db.js");
const saltRounds = require("../../static/static.json").saltRounds;
const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Error:", error);
    return { error: "Internal Server Error" };
  }
};

const createAdmin = async (req, res) => {
  console.log("//in admin")
  const getAdmin = await db.query("select * from user where username='admin';");
  if (getAdmin[0].length == 0) {
    // try {
    //   await db.query(
    //     `INSERT INTO user
    //     (password, username, email, first_name, last_name, mobileNumber, is_superuser, is_staff, is_active)
    //     VALUES ('admin','admin','admin','admin','admin',1234567891,1,0,1)`,
    //   );
    //   res.status(201).json({ msg: "Admin Created" });
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).json({ msg: "SomeThing went Wrong" });
    // }

    const encryptedPassword = await encryptPassword("admin");

    if (!encryptedPassword.error) {
      try {
        await db.query(`INSERT INTO user (password, username, email, first_name, last_name, mobileNumber, is_superuser, is_staff, is_active) VALUES 
            ('${encryptedPassword}', 'admin', 'admin', 'admin', 'admin', 1234567981, 1, 0, 1);`);
        res.status(201).json({ msg: "Admin Created Successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    } else {
      res.status(500).json({ msg: encryptedPassword.error });
    }
  } else {
    res.status(500).json({ msg: "Admin Already present" });
  }
};

module.exports = { createAdmin };
