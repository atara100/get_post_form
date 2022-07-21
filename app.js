const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

const bodyParser = require('body-parser');

let MongoClient =require('mongodb').MongoClient ;
let url = "mongodb://localhost:27017/";


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));


const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname,'./views') 
app.set('views', viewsPath)

app.get("" , (req, res) => {
    res.render("index");
});

//for GET request
app.get("/form",(req,res)=>{
    let details=req.query
    console.log(req.query);
       res.render("form")

//mongodb
    MongoClient .connect(url, function(err, db) {
  if (err) throw err;
  var myDb = db.db("formTask");

//   var myobj = { name: "Company Inc", address: "Highway 37" };
  myDb.collection("formDetails").insertOne(details, function(err, res) {
    if (err) throw err;
    console.log("1 form details inserted into the data base!!! 🤗");
    db.close();
  });
});


 


})

// //for POST request
// app.post("/form",(req,res)=>{
//     console.log(req.body);
//     res.render("form")
// })


app.listen(PORT, () => {
console.log("Server is up on port "+PORT +" 😍");
});

  