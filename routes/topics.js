const express =require("express")
const router=express.Router()
const {authenticateToken}=require("../commonFunction/decryptJwt.js")
const {getTopics}=require("../controllers/topics/getTopics.js")


router.route("/").get(authenticateToken,getTopics)


module.exports=router