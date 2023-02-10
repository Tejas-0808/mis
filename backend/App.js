const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config({path:'./config.env'});
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(require('./router/auth'));

app.get('/',(req,res) => {
    res.send(`Hello worldddd`);
});

app.listen(port || process.env.port, ()=> {
    console.log(`server is running on port no ${port}`);   
})