const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);

//adding branch

router.get("/linkassigned", async (req, res) => {
  try {
    (async () => {
      const data = await query("SELECT * FROM linkassigned");
      const result = await data;
      return res.json(result);

      // return res.json(data);
      console.log(result);
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.post("/linkassigned", async (req, res) => {
  const { link_assigned_id, link_id, staff_id } = req.body;

  if (!link_assigned_id || !link_id || !staff_id ) {
    return res.status(422).json({ error: "plz fill all fields properly" });
  }

  try {
    (async () => {
      // try{
      //     const data = await query("SELECT * FROM branch WHERE Branch_name=?",[Branch_name]);
      //     userExists = await data[0];
      // }
      // finally{
      //     // pool.end();
      // }

      if (true) {
        (async () => {
          try {
            const data = await query(
              "INSERT INTO linkassigned VALUES(?,?,?)",
              [link_assigned_id, link_id, staff_id]
            );
            console.log(data[0]);
            res.status(200).json({ msg: "Linked_Assigned added successfully" });
          } finally {
          }
        })();
      } else {
        return res.status(422).json({ error: "Links_assigned already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
