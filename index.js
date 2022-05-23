const express = require("express");
const app = express();

app.set("view engine","ejs");
app.set("views","./public");

app.get("/",(req,res) => {
    res.render("index");
})

app.get("/post",(req,res) => {
    res.render("post");
})

app.listen(3000, () => { 
    console.log("App is listening at 3000");
})