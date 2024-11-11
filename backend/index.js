import express, { request, response } from "express";
import {PORT} from "./config.js"

const app = express();

app.get('/' , (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN STACK");
})

app.listen(PORT, () => {
    console.log("App is listening to port 5555")
})