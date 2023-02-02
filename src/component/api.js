var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var connectionString = "mongodb://127.0.0.1:27017";

var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.get("/getusers", (req,res)=>{
    mongoClient.connect(connectionString, (err, clientObj)=>{
        if(!err){
            var database = clientObj.db("reactdb");
            database.collection("tblusers").find({}).toArray((err, document)=>{
                if(!err){
                    res.send(document);
                }
            })
        }
    })
});

app.post("/registerusers", (req, res)=>{ 
    var userDetails ={
        UserName: req.body.UserName,
        Email: req.body.Email,
        Password: req.body.Password,
    }
  mongoClient.connect(connectionString, (err, clientObj)=>{
    if(!err){
        if(!err){
            var database = clientObj.db("reactdb");
            database.collection("tblusers").insertOne(userDetails, (err, result)=>{
                if(!err){
                    console.log("Record Inserted");
                    res.redirect("/getusers");
                }
            })
        }
    }
  })
});
app.listen(9001);
console.log("Server Started : http://127.0.0.1:9001");