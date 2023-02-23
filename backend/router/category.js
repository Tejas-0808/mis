const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/category", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM category_list");
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

router.get('/category/:id', async(req, res) =>{
    const CategoryId = req.params.id;
    try{
        (async()=> {
            const data = await query("SELECT * FROM category_list WHERE category_id = ?", CategoryId);
            const result = await data[0];
            console.log(result);
            return res.json(result);
        })()
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err});
    }
})

router.post('/category', async (req, res) => {

    const {category_id, category_name} = req.body;
    console.log(category_id);
    console.log(category_name);
    // console.log(HOD);
    // console.log(students_enrolled);

        if(!category_id || !category_name){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM category_list WHERE category_name=?",[category_name]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO category_list VALUES(?,?)",[category_id, category_name ]);
                          console.log(data[0]);
                          res.status(200).json({msg: "category added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "category already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

router.delete("/category/:id", async (req, res) => {

    const categoryId = req.params.id;
    console.log(categoryId);
    try{

        (async()=>{
                const q = "Delete from category_list where category_id = ?"

                pool.query(q,[categoryId],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("category has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
})

router.put("/category/:id", async(req, res) => {
    const categoryId = req.params.id;
    console.log(categoryId);
    try{
        (async()=>{
            const q = "UPDATE category_list SET `category_id` = ?, `category_name` = ? WHERE category_id = ?"
            const value = [
                req.body.category_id,
                req.body.category_name
            ]

            pool.query(q, [...value, categoryId], (err, data)=>{
                if(err) return res.json(err);
                return res.json("Category has been updated.");
            })
        })()
    }catch(err){
        console.log(err);
    }
});

module.exports = router;