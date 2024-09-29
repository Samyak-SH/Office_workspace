require("dotenv").config({ path: './.env.server' });

const {signup} = require('./functions/handleSignup')

const express = require("express");
const cors = require("cors");
const app =express();

const SERVER_PORT = process.env.SERVER_PORT;

//middleware
app.use(cors());
app.use(express.json()); // This needs to be placed before the route handler


app.post("/signup", signup)

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})