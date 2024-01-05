
// server Instantiate 
const express = require('express');
const app = express(); // single instance initiated 
const bodyParser=require('body-parser');//use to pass req.body
const { default: mongoose } = require('mongoose');

//activate the server on 3001
app.listen(3001,()=>{
    console.log("Server Started at port no 3001")
})

//Routes 
app.get('/', (req, res)=>{
    res.send("hello jee, kese ho sare")
})

//to verify post req will use postman 
//body parser error is comming 

app.use(bodyParser.json());

app.post('/api/cars', (req, res)=>{
    const {name, brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted sucessfully");
})

//mongoDB - NoSql database 
// not a relational database , highly scalable 
// data can be in form of documents, key value pair , graph and many more 
// CRUD operations can be perform on mongodb compass 



// connect server to db will use mongoose 
// setup mongoose 

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser:true,
    useUnifiedTopology:true 
})
.then(()=>{
    console.log("connection sucessful")
})
.catch((error)=>{
    console.log(error)
});