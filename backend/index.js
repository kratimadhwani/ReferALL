import express from "express";
import {PORT,mongoDBURL} from "./config.js"
import mongoose from "mongoose";
const app = express();


app.get('/', (req,res) =>{
    console.log(req)
    return res.status(234).send("Welcome");
})

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App connected to database');
})
.catch((error) => {
    console.log(error)
})
app.listen(PORT, () => {
    console.log(`App is listening to the port: ${PORT}`);
});
