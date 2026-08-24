import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const port = 8082;

const app = express();

mongoose.connect(process.env.dbUrl).then(() =>
    console.log("DB connected")
).catch((err) => {
    console.log(err)
})

app.listen(postMessage, () => {
    console.log("Server started")
})
