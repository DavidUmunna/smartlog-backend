import express from "express"

import {getusers,updateuser} from "../controllers/employee"

const router=express.Router()

router.get("/",getusers)
router.put("/",updateuser)

export default router