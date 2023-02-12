const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config({path:'./config.env'});
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const conn = require('../backend/db/mySql');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 3001;

const studentRoutes = require("./routes/studentRoutes");

// app.use(express.json());
// app.use(require('./router/student'));

app.use("/api", studentRoutes);


app.get('/',(req,res) => {
    res.send(`Hello worldddd abc returns`);
});

app.listen(port || process.env.port, ()=> {
    console.log(`server is running on port no ${port}`);   
})





