import express from "express"
import { user_access } from "../controllers/access"
const auth=require('../middleware/authentication')
const router=express.Router()

router.get('/',auth,user_access)