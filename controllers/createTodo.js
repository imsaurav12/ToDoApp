//import models
const Todo = require("../models/ToDo");

//define route handler

exports.createTodo = async(req,res) => {
    try{
        //extract title and description from request body
        const {title,description} = req.body;
        //create a new Todo Obj and insert in DB

        const response = await Todo.create({title,description});
        //send a json response witha success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:err.message,
            }
        )
    }
}