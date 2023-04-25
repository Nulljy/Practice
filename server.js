const express = require("express");
const fs = require('fs');
const port = process.env.PORT || 5000;
const mysql = require('mysql2');
const multer = require('multer');
const upload = multer({ dest: './uploads'});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
    host:conf.host,
    port:conf.port,
    user:conf.user,
    password:conf.password,
    database:conf.database,
})
connection.connect();

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM CUSTOMERS WHERE isDeleted = 0",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})

app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMERS VALUES(null, ?, ?, ?, ?, ?, now(), 0)';
    let image = '/image/' + req.file.filename;
    let name = req.body.userName;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];
    connection.query(sql, params,
            (err, rows, fields) => {
                res.send(rows);
            }
        )
})

app.listen(port, () => {
    console.log(`포트${port}에서 대기중입니다.`);
})