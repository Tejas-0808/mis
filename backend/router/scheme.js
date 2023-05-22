const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("./verifyToken");
//adding branch

router.get("/scheme",verifyToken, async (req, res) => {
  try {
    (async () => {
      // const data = await query("SELECT * FROM scheme");
      const data = await query("SELECT scid,ft,pt, master_scheme.master_scheme as master_scheme,branch.Branch_name as branch_name,  course_category.name as course_category_name FROM scheme INNER JOIN branch ON scheme.branch_id = branch.Branch_id INNER JOIN course_category ON scheme.course_category_id = course_category.course_category_id INNER JOIN master_scheme ON scheme.master_sch_id = master_scheme.mastersch_id");
      const result = await data;
      console.log(result);
      return res.json(result);

      // return res.json(data);
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.post("/scheme", async (req, res) => {
  const { master_sch_id, category, branch, ft, pt } = req.body;
  console.log(category);
  const course_category_id = category;
  if (!branch || !master_sch_id  || !ft || !pt) {
    return res.status(422).json({ error: "plz fill all fields properly" });
  }

  try {
    (async () => {
      try{
          const data = await query("SELECT * FROM scheme WHERE course_category_id=? and branch_id=?",[category,branch]);
          dataExists = await data[0];
          // if (dataExists){return res.status(422).json({ error: "Scheme already exists" });}
      }
      finally{
          // pool.end();
      }

      if (!dataExists) {
        (async () => {
          try {
            const data = await query(
              "INSERT INTO scheme (master_sch_id,course_category_id,branch_id,ft,pt) VALUES(?,?,?,?,?)",
              [master_sch_id, category,branch, ft, pt]
            );
            console.log(data[0]);
            res.status(200).json({ msg: "Scheme added successfully" });
          } finally {
          }
        })();
      } else {
        return res.status(422).json({ error: "Scheme already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }
});

router.delete("/scheme/:id", async (req, res) => {

  const schemeid = req.params.id;
  console.log(schemeid);
  try{

      (async()=>{
              const q = "Delete from scheme where scid = ?"

              pool.query(q,[schemeid],(err,data)=>{
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
