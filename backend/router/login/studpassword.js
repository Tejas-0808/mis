const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../../db/mySql");
const { use, route } = require("../auth");
const query = util.promisify(pool.query).bind(pool);

router.get("/studpassword", async (req,res)=> {
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
router.post("/studpassword", async (req, res) => {
  const users = req.body;
  if (!Array.isArray(users)) {
    return res.status(400).json({ error: "Invalid input format" });
  }
  try {
    for (const user of users) {
      const { username, password, role_id } = user;
      const data = await query("SELECT * FROM login_details WHERE username=?", [username]);
      const userExists = data[0];
      
      if (!userExists) {
        await query("INSERT INTO login_details(username, password, role_id) VALUES(?,?,?)", [username, password, role_id]);
      } else {
        return res.status(422).json({ error: "User already exists" });
      }
    }

    res.status(200).json({ msg: "Users added successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
