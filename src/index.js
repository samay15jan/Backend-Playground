import dotenv from 'dotenv'
import ConnectDB from "./db/database.js";

dotenv.config({
    path:  './env'
})

ConnectDB()

/*
import express from "./express";
const app = express()

//Ifee function [Directly Runs] [ syntax = "()()" ]
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("ERROR", (error) => {
            console.log("Error: ", error);
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening at ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("Error: ", error)
        throw err
    }
})()
*/