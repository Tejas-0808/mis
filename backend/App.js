const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config({path:'./config.env'});
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 3001;



app.use(express.json());
app.use(require('./router/hod'));
//app.use(require('./router/student'));
app.use(require('./router/branch'));

app.get('/',(req,res) => {
    res.send(`Hello worldddd abc returns one`);
});

app.listen(port || process.env.port, ()=> {
    console.log(`server is running on port no ${port}`);   
})





