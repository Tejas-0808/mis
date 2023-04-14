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
// Route to get the assigned links for the current user
router.get('/assigned-links', async (req, res) => {
  const currentUser = req.query.staff_username;

    try{

        (async()=>{
            // Fetch the assigned link ids for the current user from the assigned_links table
            const data1 = await query(`SELECT link_id FROM linkassigned WHERE staff_username = ?`, currentUser);
            const result1 = await data1;

            const data2 = await query(`
            SELECT l.link_id, l.description, l.file_path 
            FROM links l 
            JOIN linkassigned al ON l.link_id = al.link_id 
            WHERE al.staff_username = ?`, 
            currentUser);
            const result2 = await data2;
            console.log(result2);
            
            const assignedLinks = result2.map(result => ({
              id: result.link_id,
              description: result.description,
              filePath: result.file_path,
            }));
      
            return res.json(assignedLinks);
            
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }

});


router.post("/linkassigned", async (req, res) => {
  const { link_assigned_id, link_id, staff_username } = req.body;

  if (!link_assigned_id || !link_id || !staff_username ) {
    return res.status(422).json({ error: "plz fill all fields properly" });
  }

  try {
    (async () => {
      if (true) {
        (async () => {
          try {
            const data = await query(
              "INSERT INTO linkassigned VALUES(?,?,?)",
              [link_assigned_id, link_id, staff_username]
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


router.get("/links", async (req, res) => {
  try {
    (async () => {
      const data = await query("SELECT file_path FROM links");
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

module.exports = router;
