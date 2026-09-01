import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config()
const app = express();

mongoose.connect(process.env.dbUrl).then(() =>
    console.log("DB connected")
).catch((err) => {
    console.log(err)
})

app.use(cors({
  origin : "http://localhost:5173",
  credentials: true
}
))

// Using middleware
app.use(express.json())
app.use(cookieParser())

// Using the router
app.use('/users', userRouter)

const port = 8082;


// connect to database




app.listen(port, () => {
    console.log("Server started")
})
