const express =require("express")
const router=express.Router()
const batchMethods=require('../controllers/batches/methods.js')

// router.routes("/").post()
router.route("/:batchId?").get(batchMethods.createBatch)


module.exports=router