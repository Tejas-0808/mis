const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../../db/mySql");
const { use, route } = require("../auth");
const query = util.promisify(pool.query).bind(pool);

router.get("/otherlogins", async (req,res)=> {
    try{

        (async()=>{

            const data = await query("SELECT * FROM login_details");
            const result = await data;
            console.log(result);
            return res.json(result);

            // return res.json(data);

        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})

//Adding student username, password to login_details table
router.post("/otherlogins", async (req, res) => {
    const {  username, password, role_id } = req.body;

    if (!username || !password || !role_id) {
      return res.status(422).json({ error: "plz fill all fields properly" });
    }
    try {
        (async () => {
            const data = await query("SELECT * FROM login_details WHERE username=?", [username]);
         const userExists = data[0];
      
          if (!userExists) {
            (async () => {
              try {
                const data = await query("INSERT INTO login_details  (username, password, role_id)  VALUES(?,?,?)",
                  [ username, password, role_id]
                );
                
                res.status(200).json({ msg: "Login_Details added successfully" });
              } finally {
              }
            })();
          } else {
            return res.status(422).json({ error: "Login_Details already exists" });
          }
        })();
      } catch (err) {
        console.log(err);
      }
});

module.exports = router;
