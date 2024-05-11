const express = require("express");
const router = express.Router();
const { createTable } = require("../controllers/dbControls/createTables.js");
const { createTopics } = require("../controllers/dbControls/topics/createTopics.js");
const {getTopics} = require("../controllers/dbControls/topics/getTopics.js")
const {createSubTopics }= require("../controllers/dbControls/subTopics/createSubTopics.js")
const {getSubTopics}= require("../controllers/dbControls/subTopics/getSubTopics.js")
const {getLectures}= require("../controllers/dbControls/lectures/getLectures.js")
const {createLecture}= require("../controllers/dbControls/lectures/createLectures.js")
const {createQualification}= require("../controllers/dbControls/qualification/createQualifications.js")
const {getQualification}= require("../controllers/dbControls/qualification/getQualification.js")
const {authenticateToken}= require("../commonFunction/decryptJwt.js")

router.route("/createTables").post(authenticateToken,createTable);
router.route("/topics").post(authenticateToken,createTopics);
router.route("/topics").get(authenticateToken,getTopics)
router.route("/subTopics").post(authenticateToken,createSubTopics)
router.route("/subTopics").get(authenticateToken,getSubTopics)
router.route("/lectures").post(authenticateToken,createLecture)
router.route("/lectures").get(authenticateToken,getLectures)
router.route("/qualificationAvailable").post(authenticateToken,createQualification)
router.route("/qualificationAvailable").get(authenticateToken,getQualification)


module.exports = router;
