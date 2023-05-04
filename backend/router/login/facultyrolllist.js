const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../../db/mySql');
const { use, route } = require('../auth');
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("../verifyToken");
//fetching data of particular student 
router.post("/facultyrolllist",verifyToken,  async (req,res)=> {

    const Email_id = req.body.Email_id;
    const role_id = req.body.role_id;
    console.log(Email_id);
    console.log(role_id);

    try{

        (async()=>{
            
            const data = await query("SELECT Staff_username, First_Name, Last_Name, role_id FROM staff_details where Email_id = ? and role_id = ?",[Email_id, role_id]);
            const result = await data;
            console.log(data);
            return res.json(result);

        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})




module.exports = router;