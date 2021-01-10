// import Required npm modules
const mongoose = require('mongoose');

// Mongoose Schema for user_roles Collection
const user_role_schema = mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        trim: true,
    },
    user_role : {
        type: String,
        required:true
    }
});


//Mongoose user_roles Model 
const user_role_model = mongoose.model('User_roles',user_role_schema);


//Export user_roles Model
module.exports = user_role_model;