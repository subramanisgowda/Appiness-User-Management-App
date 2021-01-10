// import Required npm modules
const express = require('express');

// importing required controllers.
const user_registration = require('../controller/register_users.js')
const get_user_roles = require('../controller/getuser_role_details.js')

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
router.post('/user_registration',user_registration);

// In addidtion to user registartion  also developed some other api's

//api to list all the available users
router.get('/get_users',get_user_roles.get_users);

//api to list all the available roles
router.get('/get_roles',get_user_roles.get_roles);

// Exporting router fucntion
module.exports = router;