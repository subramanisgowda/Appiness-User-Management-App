// import Required npm modules
const mongoose = require('mongoose');
const validator = require('validator'); // A library of string validators and sanitizers.

const mongo_db = require('../config/db_connection');  // imports mongodb connection


// Mongoose Schema for Users Collection
const users_schema = mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        trim: true,
    },
    user_email : {
        type: String,
        trim: true,
        lowercase: true,
        required:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid') // validating user Email
            }
        }
    },
    user_mobile_number:{
        type: String,
        required:true,
    }

});

//Mongoose user Model
const users_model = mongoose.model('Users',users_schema);


//Export Users Model
module.exports = users_model;