//import models
const Todo = require("../models/ToDo");

//define route handler

exports.getTodo = async(req,res) => {
    try{
        //fetch all todo items from db

        const todos = await Todo.find({});


        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
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

exports.getTodoById = async(req,res) => {
    try{
        // extract Todo items by Id
        const id = req.params.id;
        const todo = await Todo.findById(id);

        //data forgiven is not found
        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No Data Found with Given Id",
            })
        }
        //data for given id is Found
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data successfully fetched!`
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