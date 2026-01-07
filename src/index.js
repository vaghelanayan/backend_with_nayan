//require('dotenv').config({path:'./db/index.js'}) // use becuse env variable japti load thay jay . jena karane producation ma isu nave pan aa rite aane use karva ma nathi aavtu kem code contesitency jalvati nathi
 import dotenv from "dotenv";
 //import connectDB from "./db/index.js"

dotenv.config({
  path: './env'
})
//connectDB()


// 1. this is db file throgh
// 2.
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";
const app =express(); 


 ;(async () => {
    try {
         //  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
         const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) // db is connecting // await lakhvu jaruti se function tya lagi ybhi rese jya lagi database connect na thay
        console.log(`\n MongoDB connected !! DB HOST :${connectionInstance.connection.host }`);
        
        app.on("errror",(error)=>{ // this use jo expree taraf thi error avti hoy ae deteact karva
          console.log("ERRR: ",errror);
          
        })
        app.listen(process.env.PORT,()=>{
         console.log(`App is listening in port ${process.env.PORT}`);
         
        })
    } catch (error) {
        console.error("ERROR :", error);
        process.exit(1)
        // ahi error catch thase jem passward khtone somthing
    }
    
 })(); // () aena vina async run nai thay
    