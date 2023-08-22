const express = require("express");

const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

const fs = require ("fs");
console.log(fs);

app.use(express.static(publicPath));

app.listen(3000, ()=>
console.log("servidor corriendo")
);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./src/home.html"))
});
app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "./src/login.html"))
});
app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "./src/register.html"))
});

