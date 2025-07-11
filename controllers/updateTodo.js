//import models
const Todo = require("../models/ToDo");

//define route handler
exports.updateTodo = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate({_id: id}, {title, description, updatedAt: Date.now()})
        //ye sb ko response me bhez do

        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated Successfully! " 
        })
    }
    catch(err){
        console.error(err),
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}
