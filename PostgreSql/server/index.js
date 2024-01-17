const express= require("express");
const app = express();
const cors= require("cors");
const pool=require("./db")


//midleware
app.use(cors());
app.use(express.json());


//Routes


//create a todo
app.post("/todos", async(req, res)=>{
    try {
        const {description}=req.body;
        const newTodo= await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING",
            [description]
        );

        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//get all todos
app.get("/todos", async(req, res)=>{
    try {
        const allTodos= await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

//get a todo
app.get("/todos/:id", async(req, res)=>{
    try {
        const {id}= req.params;
        const todo= await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id] );

        
    } catch (error) {
        console.error(error.message)
    }
})

//update a todo
app.


app.listen(5000, ()=>{
    console.log("server has started on port 5000")
})