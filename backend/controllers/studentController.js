const mysql = require('mysql2');

const connection = require('../db/mySql');
exports.listStudents = (req, res) => {
  connection.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const createStudent = (req, res) => {
    console.log(req.body);
    const { name, age, email } = req.body;
    
    if (!name || !age || !email) {
      return res.status(400).json({ error: 'Name, age, and email are required' });
    }
  
    const insertQuery = `INSERT INTO students (name, age, email) values (?, ?, ?)`;
    const studentData = [name, age, email];
  
    connection.query(insertQuery, studentData, (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
  
      return res.json({ message: 'Student created successfully', results });
    });
  };
  
exports.createStudent = createStudent;

exports.getStudent = (req, res) => {
  const { id } = req.params;

  connection.query(
    'SELECT * FROM students WHERE id = ?',
    [id],
    (err, results) => {
      if (err) throw err;
      if (!results.length) {
        return res.status(404).json({ msg: 'Student not found' });
      }
      res.json(results[0]);
    }
  );
};
