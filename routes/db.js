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
const {createAdmin} = require("../controllers/dbControls/createAdmin.js")
const {addJobLocations}= require("../controllers/dbControls/jobLocation/createJobLocations.js")

router.route("/createTables").post(createTable);
router.route("/topics").post(createTopics);
router.route("/topics").get(getTopics)
router.route("/subTopics").post(createSubTopics)
router.route("/subTopics").get(getSubTopics)
router.route("/lectures").post(createLecture)
router.route("/lectures").get(getLectures)
router.route("/qualificationAvailable").post(createQualification)
router.route("/qualificationAvailable").get(getQualification)
router.route("/createAdmin").post(createAdmin)
router.route("/addJobLocationAvailable").post(addJobLocations)


module.exports = router;
