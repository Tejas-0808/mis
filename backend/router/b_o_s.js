const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("./verifyToken");

//adding branch

router.get("/b_o_s",verifyToken, async (req, res) => {
  try {
    (async () => {
      const data = await query("SELECT * FROM b_o_s");
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

//get particular religion

router.get("/b_o_s/:id",verifyToken, async (req, res) => {
  const BosId = req.params.id;
  try {
    (async () => {
      const data = await query("SELECT * FROM b_o_s WHERE bos_id = ?", BosId);
      const result = await data[0];
      console.log(result);
      return res.json(result);
    })()
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err })
  }
})


router.post("/b_o_s",verifyToken, async (req, res) => {
  const { bos_id, bos_name,code } = req.body;

  if (!bos_id || !bos_name || !code) {
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
            const data = await query("INSERT INTO b_o_s VALUES(?,?,?)", [
              bos_id,
              bos_name,
              code
            ]);
            console.log(data[0]);
            res.status(200).json({ msg: "b_o_s added successfully" });
          } finally {
          }
        })();
      } else {
        return res.status(422).json({ error: "b_o_s already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }
});
  router.put("/b_o_s/:id",async (req, res) => {
    const Branchid = req.params.id;
    console.log(Branchid);
    try {
      (async () => {
        const q =
          "Update b_o_s set `bos_id` = ?, `bos_name` = ?, `code` = ? where bos_id = ?";
  
        const values = [
          req.body.bos_id,
          req.body.bos_name,
          req.body.code,
        
        ];
  
        pool.query(q, [...values, Branchid], (err, data) => {
          if (err) return res.json(err);
  
          return res.json("BOS has been updated succesfully");
        });
      })();
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }

  
    router.delete("/b_o_s/:id", async (req, res) => {
      const Branchid = req.params.id;
      console.log(Branchid);
      try {
        (async () => {
          const q = "Delete from b_o_s where bos_id = ?";
    
          pool.query(q, [Branchid], (err, data) => {
            if (err) return res.json(err);
    
            return res.json("BOS has been deleted");
          });
        })();
      } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err });
      }
  });
});


module.exports = router;
