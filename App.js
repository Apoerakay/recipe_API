import express  from "express";
import dotenv from "dotenv"
import router from "./Recipe_routes.js";
import mongoose from "mongoose";
import cors from "cors"


dotenv.config();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use(express.static('uploads'));

app.use('/recipes',router)

const PORT = process.env.PORT || 7070


// make datbase connection
await mongoose.connect(process.env.MONGO_URI);


app.listen(PORT, () => {
    console.log(`express app is running! ${PORT}`)
    
});