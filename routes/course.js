const express =require("express")
const router=express.Router()
const {authenticateToken} =require("../commonFunction/decryptJwt.js")
const courseMethods=require("../controllers/course/methods.js")


router.route("/:courseId?").get(authenticateToken,courseMethods.getCourse)
router.route("/").post(authenticateToken, courseMethods.createCourse)



module.exports=router
