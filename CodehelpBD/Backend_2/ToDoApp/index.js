//server create
const express= require("express")
const app = express(); //instance of server

//load config from env file in proess obj
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
//mera app use karega json parser 
app.use(express.json());

// import routes for todo api 
const todoRoutes = require("./routes/todos");

// mount the todo API routes 
// /api/v1 will there in the url so we can update version v 
app.use("/api/v1", todoRoutes); //api/v1 is mapped with todoRoutes

//start server
app.listen(PORT, ()=>{
    console.log(`Server started at sucessfully at ${PORT}`)
})

//connect to database
const dbConnect= require("./config/database");
dbConnect();

//default route
app.get("/",(req, res)=>{
    res.send(`<h1> This is Homepage body</h1>`);
})

// if we go to route it is mapped with a controller and controller is mapped with a module 