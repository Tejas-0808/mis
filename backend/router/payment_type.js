const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/payment", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM payment_type_list");
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


router.post('/payment', async (req, res) => {

    const {payment_id, payment_type, category_id} = req.body;
    console.log(payment_id);
    console.log(payment_type);
    console.log(category_id);
    // console.log(students_enrolled);

        if(!payment_id || !payment_type || !category_id){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM payment_type_list WHERE payment_id=?",[payment_id]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO payment_type_list VALUES(?,?,?)",[payment_id, payment_type, category_id ]);
                          console.log(data[0]);
                          res.status(200).json({msg: "payment type added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "payment type already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

router.delete("/payment/:id", async (req, res) => {

    const paymentid = req.params.id;
    console.log(paymentid);
    try{

        (async()=>{
                const q = "Delete from payment_type_list where payment_id = ?"

                pool.query(q,[paymentid],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("Payment type has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
})


module.exports = router;