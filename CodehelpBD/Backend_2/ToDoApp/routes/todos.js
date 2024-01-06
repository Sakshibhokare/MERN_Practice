//controllers maped with routes
//so we need to import the controller first and then map 

const express = require("express");
const router=express.Router();

// import controller 
const {createTodo} = require("../controllers/createTodo");

//define api routes(get, post or any)
router.post("/createTodo", createTodo); // jab bhi /createTodo hit hoga to createTodo wall controller start kardo 

module.exports = router; 
