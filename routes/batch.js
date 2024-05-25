const express =require("express")
const router=express.Router()
const batchMethods=require('../controllers/batches/methods.js')
const {authenticateToken} =require("../commonFunction/decryptJwt.js")

// router.routes("/").post()
router.route("/:batchId?").get(authenticateToken,batchMethods.createBatch)


module.exports=router