const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch
router.get("/branch", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM branch");
            const result = await data;
            return res.json(result);

            // return res.json(data);
            console.log(result);
            
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})


//fetching data of particular id
router.get("/branch/:id", async (req,res)=> {

    const Branchid = req.params.id;

    try{

        (async()=>{
            
            const data = await query("SELECT * FROM branch where branch_id = ?", Branchid);
            const result = await data[0];
            // console.log(result);
            return res.json(result);

            // return res.json(data);
            
            
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})


router.post('/branch', async (req, res) => {

    const {Branch_id, Branch_name, HOD, Students_enrolled} = req.body;
    console.log(Branch_id);
    console.log(Branch_name);
    console.log(HOD);
    console.log(Students_enrolled);

        if(!Branch_id || !Branch_name || !HOD || !Students_enrolled){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM branch WHERE Branch_name=?",[Branch_name]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO branch VALUES(?,?,?,?)",[Branch_id, Branch_name, HOD, Students_enrolled ]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Branch added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "Branch already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
});


//update the branch
router.put("/branch/:id", async (req, res) => {

    const Branchid = req.params.id;
    console.log(Branchid);
    console.log(req.body.Branch_name);
    try{

        (async()=>{
                const q = "Update branch set `Branch_id` = ?, `Branch_name` = ?, `HOD` = ?, `Students_enrolled` = ? where Branch_id = ?"

                const values = [
                    req.body.Branch_id,
                    req.body.Branch_name,
                    req.body.HOD,
                    req.body.Students_enrolled,
                ]

                pool.query(q,[...values,Branchid],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("Branch has been updated succesfully");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
})


router.delete("/branch/:id", async (req, res) => {

    const Branchid = req.params.id;
    console.log(Branchid);
    try{

        (async()=>{
                const q = "Delete from branch where Branch_id = ?"

                pool.query(q,[Branchid],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("Branch has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
})


module.exports = router;