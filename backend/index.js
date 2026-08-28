import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config()
const app = express();

// Using middleware
app.use(express.json())
app.use(cookieParser())

// Using the router
app.use('/users', userRouter)
const port = 8082;


// connect to database
mongoose.connect(process.env.dbUrl).then(() =>
    console.log("DB connected")
).catch((err) => {
    console.log(err)
})



app.listen(port, () => {
    console.log("Server started")
})
