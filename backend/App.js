const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();
dotenv.config({ path: "./config.env" });
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use(require("./router/hod"));
app.use(require("./router/student"));
app.use(require("./router/branch"));
app.use(require("./router/batch"));
app.use(require("./router/prerequisite"));
app.use(require("./router/courses_offered"));
app.use(require("./router/qualification_details"));
app.use(require("./router/structure"));
app.use(require("./router/semester"));
app.use(require("./router/degree"));
app.use(require("./router/staff_details"));
app.use(require("./router/privilege"));
app.use(require("./router/caste"));
app.use(require("./router/religion"));
app.use(require("./router/category"));
app.use(require("./router/payment_type"));
app.use(require("./router/master_scheme"));
app.use(require("./router/scheme"));
app.use(require("./router/login_details"));
app.use(require("./router/linkassigned"));
app.use(require("./router/b_o_s"));
app.use(require("./router/attendance"));
app.use(require("./router/time_table"));
app.use(require("./router/citylist"));
app.use(require("./router/state"));
app.use(require("./router/particularstudent"));
app.use(require("./router/courses_taken"));
app.use(require("./router/rollNoGen"));

app.get("/", (req, res) => {
  res.send(`Hello worldddd abc returns one`);
});

app.listen(port || process.env.port, () => {
  console.log(`server is running on port no ${port}`);
});
