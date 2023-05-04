const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
http = require("http");
const util = require("util");
const { pool } = require("../../db/mySql");
const { use, route } = require("../auth");
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("../verifyToken");

router.get("/otherlogins",verifyToken, async (req,res)=> {
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

router.post("/otherlogins", verifyToken, async (req, res) => {
  const { username, password, role_id } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  if (!username || !password || !role_id) {
    return res.status(422).json({ error: "plz fill all fields properly" });
  }

  try {
    await query(
      "INSERT INTO login_details (username, password, role_id) VALUES (?, ?, ?)",
      [username, hashedPassword, role_id],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Error registering user" });
        }

        console.log("user registered");
        return res.status(200).json({ message: "User registered successfully" });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
