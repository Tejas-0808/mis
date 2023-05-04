const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../../db/mySql');
const { use, route } = require('../auth');
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("../verifyToken");
//update assign
router.post('/addusername_staff',verifyToken,  (req, res) => {
    const Email_id = req.body.Email_id;
    const username = req.body.username;
  console.log(Email_id);
  console.log(username);

    const query = `UPDATE staff_details SET Staff_username = ? WHERE Email_id IN (?)`;
    pool.query(query, [username, Email_id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error updating data');
      } else {
        res.send('Data updated successfully');
      }
    });
  });

  module.exports = router;