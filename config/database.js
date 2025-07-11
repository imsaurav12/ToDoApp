const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log('DB ka connection Successfull hua'))
    .catch((error) => {
        console.log('Issue in DB Connection');
        console.log(error.message);
        process.exit(1);
    })
}
module.exports = dbConnect;