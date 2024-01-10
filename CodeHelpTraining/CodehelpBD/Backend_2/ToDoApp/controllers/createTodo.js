// business logic
//controller always mapped with a route
// route handiling ke liye controller is imp 
//import the model
// adding data the schemas so this is imp to get the model schema 
const todo = require("../modules/Todo")

//can write export at the ending of the code
exports.createTodo= async(req, res)=>{
try{
    //extract title and description from request ki body
    const {title, description} = req.body; //data fetch
    //create a new todo obj and insert in db
    const response= await todo.create({title, description}); //new data create and push into db
    //send a json response with a sucess flag
    res.status(200).json({
            sucess:true,
            data:response,
            message:'Entry Created Sucessfully'
    });
}
catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json({
        sucess:true,
        data:"internal server error",
        message:err.message
    })
}
}
