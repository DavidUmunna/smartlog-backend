import express from 'express'
import {getusers} from "../controllers/admin"
const admin_val=require("../middleware/admin_validation")

const app=express()

app.get('/',getusers)
app.post('/:email',admin_val,)
