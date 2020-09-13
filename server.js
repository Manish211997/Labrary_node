// if(process.env.NODE_ENV !== 'production')
// {
//     require('dotenv').parse();
// }
const process = require('process');

express=require("express");
const app=express();
const expresslay=require("express-ejs-layouts");

const indexrout=require("./routes/indexrout");

const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/labrary",{
    useNewUrlParser:true
});
const db=mongoose.connection
db.on('error',error=>{console.error(error)})
db.once('open',()=>{console.log("Connected to db!!")})

app.set("view engine","ejs");
app.set("views",__dirname+"/view");
app.set("layout","layouts/layout");
app.use(expresslay);
app.use(express.static("public"));


app.get("/",indexrout);

app.listen(8000,()=>{
    console.log("Server started!!");
})