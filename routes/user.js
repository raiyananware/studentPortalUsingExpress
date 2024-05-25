const express = require("express");
const router = express.Router();
const{authenticateToken}=require("../commonFunction/decryptJwt.js")
const userFunctions=require("../controllers/users/methods.js")


router.route("/login").post(userFunctions.login)
router.route("/createUser").post(authenticateToken,userFunctions.createUser)
router.route("/:userId?").get(authenticateToken, userFunctions.getUser)
router.route("/updateUser/:userId").put(authenticateToken, userFunctions.updateUser)
router.route("/:userId/active").put(authenticateToken,userFunctions.activateUser)
router.route("/:userId/deactivate").put(authenticateToken,userFunctions.deactivateUser)

module.exports = router;
