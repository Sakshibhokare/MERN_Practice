const Todo = require("../modules/Todo");

//Put request
exports.updateTodo= async(req, res)=>{
    try{
    const {id} = req.params;
    const {title, description} = req.body;
    
    const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title, description, updatedAt: Date.now()}
    )

    res.status(200).json({
        success:true,
        data:todo,
        message:`Updated Successfully`
    })
    }
    catch(e){
      console.error(e);
      res.status(500).json({
        success:false,
        error:e.message,
        message:"Server Error"
      });
    }
}