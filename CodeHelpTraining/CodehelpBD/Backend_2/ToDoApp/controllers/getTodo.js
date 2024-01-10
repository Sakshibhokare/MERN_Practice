const Todo = require("../modules/Todo")


//want to fetch all todo items from database
exports.getTodo = async(req, res)=>{
    try{
       //fetch all todo items from db
       const todos = await Todo.find({});

       //response
       res.status(200)
       .json({
        success:true,
        data:todos,
        message:"Entire Todo Data Fetched",
       });
    }
    catch(err){
       console.error(err);
       res.status(500)
       .json({
        success:false,
        error:err.message,
        message:'Server Error'
       })
    }
}

exports.getTodoById = async(req, res)=>{
   try{
    //extract todo itemsbasis on id
    const id=req.params.id;
    const todo=await Todo.findById({_id: id})

    //data for given id not found
    if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data found with given id"
        })
    }
    res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data sucessfully fetched`
    })
   }
   catch(err){
    console.error(err);
    res.status(500)
    .json({
     success:false,
     error:err.message,
     message:'Server Error' 
    })
   }
}