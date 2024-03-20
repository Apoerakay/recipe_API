import express  from "express";
import dotenv from "dotenv"
import router from "./Recipe_routes.js";
import mongoose from "mongoose";
import cors from "cors"


dotenv.config();

const App = express()

App.use(express.json())
App.use(express.urlencoded({extended: false}));
App.use(cors())

App.use(router)

const PORT = process.env.PORT || 7070


// make datbase connection
await mongoose.connect(process.env.MONGO_URI);


App.listen(PORT, () => {
    console.log(`express app is running! ${PORT}`)
    
});