const express = require('express');
const server = express();
const connectionDataBase = require("./dataBase/connDataBase");
require('colors');
const userRoute = require('./routes/userRoute');
const dotenv = require("dotenv");

server.use(express.json());

dotenv.config({path : 'backend/config/config.env'});

connectionDataBase();


const bdhwabjhd = (req,res) => { 
    // const {name,email,password,confirmPassword} = req.body;
    const data = req.body;
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);
    res.json({
        data
    })
}

server.get('/pooj/a',bdhwabjhd);
server.use('/user',userRoute);

server.listen(process.env.PORT,"localhost",() => {
    console.log(`Server is working on ${process.env.PORT}`.bgGreen);
});