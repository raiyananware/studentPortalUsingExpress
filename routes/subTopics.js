const express =require('express')
const router=express.Router()
const {authenticateToken}=require('../commonFunction/decryptJwt')
const subTopics=require('../controllers/subTopic/subTopic.js')

router.route("/:subTopicId?").get(authenticateToken,subTopics.getSubTopics)




module.exports=router