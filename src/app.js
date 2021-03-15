const path = require("path");
const express = require("express");
const app= express();
const staticpath=path.join(__dirname,"../pub");
app.use(express.static(staticpath));
app.get("/",(req,res)=>{
    res.send("hello world from the express");

});
app.get("/about",(req,res)=>{
    res.send("hello world from the about express");
});
app.listen(3000,()=>{
    console.log("listing the port at 8000");
});