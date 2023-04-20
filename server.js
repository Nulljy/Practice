const express = require("express");
const fs = require('fs');
const port = process.env.PORT || 5000;
const mysql = require('mysql2');
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
            console.log(rows);
            res.send(rows);
        }
    )
})

app.listen(port, () => {
    console.log(`포트${port}에서 대기중입니다.`);
})