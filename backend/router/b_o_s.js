const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);

//adding branch

router.get("/b_o_s", async (req, res) => {
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

router.get("/b_o_s/:id", async (req, res) => {
  const bosId = req.params.id;
  try {
    async () => {
      const data = await query("SELECT * FROM b_o_s WHERE bos_id = ?", bosId);
      const result = await data[0];
      console.log(result);
      return res.json(result);
    };
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.post("/b_o_s", async (req, res) => {
  const { bos_id, bos_name } = req.body;

  if (!bos_id || !bos_name) {
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
            const data = await query("INSERT INTO b_o_s VALUES(?,?)", [
              bos_id,
              bos_name,
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

router.delete("/b_o_s/:id", async (req, res) => {
  const bosId = req.params.id;
  console.log(bosId);
  try {
    (async () => {
      const q = "Delete from b_o_s where bos_id = ?";

      pool.query(q, [bosId], (err, data) => {
        if (err) return res.json(err);

        return res.json("Board of study has been deleted");
      });
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.put("/b_o_s/:id", async (req, res) => {
  const bosId = req.params.id;
  console.log(bosId);
  try {
    (async () => {
      const q =
        "UPDATE b_o_s SET `bos_id` = ?, `bos_name` = ? WHERE bos_id = ?";
      const value = [req.body.bos_id, req.body.bos_name];

      pool.query(q, [...value, bosId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Board of study has been updated.");
      });
    })()
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
