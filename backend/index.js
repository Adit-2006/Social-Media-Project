import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';

dotenv.config()
const app = express();
app.use(express.json())
app.use('/users', userRouter)
const port = 8082;



mongoose.connect(process.env.dbUrl).then(() =>
    console.log("DB connected")
).catch((err) => {
    console.log(err)
})



app.listen(port, () => {
    console.log("Server started")
})
