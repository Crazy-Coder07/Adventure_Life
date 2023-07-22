import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/authRoute.js"
import usersRoute from "./routes/usersRoute.js"
import hotelsRoute from "./routes/hotelsRoute.js"
import roomsRoute from "./routes/roomsRoute.js"
import cookieParser from "cookie-parser"

const app = express();
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to DATABASE")
    } catch (error) {
        throw error
    }
}

// middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.use("/",(req,res)=>{
    res.send("Hello from home server side")
})
app.listen(8000, () => {
    connectDB()
    console.log("Listening on port 8000");
})