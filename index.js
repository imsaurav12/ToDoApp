const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//MIDDILEWARE TO PARSE JSON REQUEST BODY
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo APIs routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server Started successfully at ${PORT}`);
})

//connect to the DataBase
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req,res) => {
    res.send('<h1> This is my HomePage baby </h1>');
})