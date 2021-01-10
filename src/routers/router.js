// import Required npm modules
const express = require('express');

// importing required controllers.
const user_registration = require('../controller/register_users.js')

// initializing Express Router
const router = express.Router();

// Default route 
router.get('/',(req,res)=>{
    res.status(200);
    res.json({
        Message : "Hello Welcome to Appiness World"
    });
});

// Route for user registarion, calling user_registration function 
router.post('/user_registration',user_registration)

// Exporting router fucntion
module.exports = router;