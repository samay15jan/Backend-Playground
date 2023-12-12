import dotenv from 'dotenv'
import ConnectDB from "./db/database.js";
import { app } from './app.js';

dotenv.config({
    path:  './env'
})

ConnectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    }) 
})
.catch((error) => {
    console.log(`ERROR OCCURED WHILE CONNECTING TO DATABASE`, error)
    throw error
})

/*
import express from "./express";
const app = express()

//Ifee function [Directly Runs] [ syntax = "()()" ]
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("ERROR", (error) => {
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening at ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("Error: ", error)
        throw error
    }
})()
*/