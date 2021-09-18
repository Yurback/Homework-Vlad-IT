const express = require("express");

const cityRoute = require('./routes/feed');

const app = express();

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

app.use("/address", cityRoute);

app.listen(3000);