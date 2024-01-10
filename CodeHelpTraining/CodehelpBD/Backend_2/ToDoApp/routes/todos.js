//controllers maped with routes
//so we need to import the controller first and then map 

const express = require("express");
const router=express.Router();

// import controller 
const {createTodo} = require("../controllers/createTodo");

const {getTodo, getTodoById} = require("../controllers/getTodo");

const {updateTodo}=require("../controllers/update");

const {deleteTodo}= require("../controllers/deleteTodo")

//define api routes(get, post or any)
router.post("/createTodo", createTodo); // jab bhi /createTodo hit hoga to createTodo wall controller start kardo 
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById)
router.put("/updateTodo/:id", updateTodo)
router.delete("/deleteTodo/:id", deleteTodo)


module.exports = router; 
