import express from "express";
import {mongoDBURL, PORT} from "./config.js"
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

// Middleware for parsing request Body
app.use(express.json());
app.use(cors())

// app.use(cors(
//     {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'DELETE', 'PUT'],
//         allowedHeaders: []
//     }
// ));

app.use('/books', booksRoute)

mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
        console.log("App is listening to port 5555")
    })
    

}).catch((error) => {
    console.log(error)
})