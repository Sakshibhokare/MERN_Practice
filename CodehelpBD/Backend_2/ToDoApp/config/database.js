const mongoose= require("mongoose");
require("dotenv").config(); //whatever you have define in env that will get loaded in process obj


//this returns promise 
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })//process wale object ko feed karna padega using .env need to install
     .then(()=>{
        console.log("DB connection sucessful")
     })
     .catch((error)=>{
        console.log("Issue in DB Connection")
        console.error(error.message)
        process.exit(1);
     });
}

module.exports=dbConnect