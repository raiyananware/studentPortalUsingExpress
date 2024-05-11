const express = require("express");
const router = express.Router();
const {login} = require("../controllers/users/login")
const {createUser}= require("../controllers/users/createUser.js")
const{authenticateToken}=require("../commonFunction/decryptJwt.js")
const {getUser}= require("../controllers/users/getUser.js")
const {updateUser}= require("../controllers/users/updateUser.js")

router.route("/login").post(login)
router.route("/createUser").post(authenticateToken,createUser)
router.route("/").get(authenticateToken, getUser)
router.route("/updateUser/:userId").put(authenticateToken, updateUser)

module.exports = router;
