const expressEjsLayouts = require("express-ejs-layouts");

express=require("express");
const rout=express.Router();

rout.get("/",(req,res)=>{
    res.render("index.ejs");
})

module.exports=rout;