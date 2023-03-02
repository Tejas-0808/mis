const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

//update assign
router.post('/assignfaculty', (req, res) => {
    const checkedValues = req.body.checkedValues;
    const newData = req.body.newData;
  console.log(newData);
  console.log(checkedValues);

    const query = `UPDATE student_info SET faculty_adv_id = ? WHERE roll_no IN (?)`;
    pool.query(query, [newData, checkedValues], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error updating data');
      } else {
        res.send('Data updated successfully');
      }
    });
  });

  module.exports = router;