const express = require("express");
const fs = require('fs');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/customers", (req, res) => {
    const data = fs.readFileSync('./customer.json');
    res.send(JSON.parse(data));
})

app.listen(port, () => {
    console.log(`포트${port}에서 대기중입니다.`);
})