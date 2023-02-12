const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql')
const query = util.promisify(pool.query).bind(pool);


router.get('/get',async(req,res)=>{
    try{
        res.send({"message":""});
    }
    catch(err){
        res.send(err);
    }
})

router.post('/login',async(req,res)=>{
    try{
        (async()=>{
            const{username,pass} = req.body;
            console.log(username + " " + pass);
            if(!username || !pass){
                res.send({"message":"username or pssword is missing"});
            } 
            else{
                try{
                    const data = await query("SELECT * FROM student_login whEre roll_no=?",[username]);
                    console.log(data);
                    const user = data[0];
                    console.log(user);
                    res.send(user);
                }
                finally{

                }
            }        
        })()
    }
    catch(err){
        console.log(err);
    }
})
// Add beer
// app.post('/stud_reg_details', (req, res) => {

//     pool.getConnection((err, connection) => {
//         if(err) throw err
        
//         const params = req.body
//         connection.query('INSERT INTO student_info SET ?', params, (err, rows) => {
//         connection.release() // return the connection to pool
//         if (!err) {
//             res.send(`Beer with the record ID  has been added.`)
//         } else {
//             console.log(err)




module.exports = router;