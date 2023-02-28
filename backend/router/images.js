const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
// const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

const multer = require('multer');
const mysql = require('mysql');

const app = express();
const upload = multer();
//image upload

router.post('/upload', upload.single('image'), (req, res) => {
    const image = req.file.buffer;
    const sql = 'INSERT INTO images (image_data) VALUES (?)';
    pool.query(sql, [image], (err, result) => {
      if (err) throw err;
      res.send('Image uploaded');
    });
  });
  
  router.get("/images/:id", async (req,res)=> {

    const id = req.params.id;
    try{

        (async()=>{
            const data = await query("SELECT image_data FROM images WHERE id = ?",3);
            console.log(data[0].image_data);
            return res.end(data[0].image_data);
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})

// router.get('/images/:id', (req, res) => {
//     const id = req.params.id;
//     const sql = 'SELECT image_data FROM images WHERE id = ?';
//     pool.query(sql, [3], (err, result) => {
//       if (err) throw err;
//       console.log(result);
//       res.writeHead(200, {
//         'Content-Type': 'image/jpeg',
//         'Content-Length': result[0].image_data.length
//       });
//       res.end(result[0].image_data);
//       console.log(result[0].image_data);
//     });
//   });

module.exports = router;

