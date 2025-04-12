import express from 'express'
import {getusers,signin,createusers} from "../controllers/admin"
const admin_val=require("../middleware/admin_validation")

const router=express.Router()

router.get('/',getusers)
router.post('/:email',admin_val,signin)
router.post("/createuser",createusers)

export default router
