const express = require("express");
const router = express.Router();
const user=require("../controllers/users/users.js")
const {login}=require("../controllers/users/login.js")
const{authenticateToken}=require("../commonFunction/decryptJwt.js")


router.route("/login").post(login)
router.route("/:userId?").get(authenticateToken, user.getUser)
router.route("/createUser").post(authenticateToken, user.createUser)
router.route("/:userId/activate").put(authenticateToken, user.activateUser)
router.route("/updateUser/:userId").put(authenticateToken, user.updateUser)
router.route("/:userId/deactivate").put(authenticateToken, user.deactivateUser)
router.route("/qualification").put(authenticateToken, user.updateQualification)
router.route("/jobLocations").put(authenticateToken, user.updateJobLocations)
router.route("/workExperience").put(authenticateToken, user.updateWorkExperience)

module.exports = router;
