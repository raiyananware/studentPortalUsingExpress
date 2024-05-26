const express =require("express")
const router=express.Router()
const {authenticateToken}=require("../commonFunction/decryptJwt.js")
const {getTopics}=require("../controllers/topics/getTopics.js")
const subTopicRouter=require('./subTopics.js')


router.route("/:topicId?").get(authenticateToken,getTopics)
router.use('/:topicId/subTopic',subTopicRouter)

module.exports=router