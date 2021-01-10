
// Importing Users and User roles Modles.
const users_model = require('../models/users_model.js');
const user_role_model = require('../models/users_roles_model.js');


// Function to list all Users from users colection. 
async function get_users(req, res) {

    try {
        // Getting data from users collection.
        get_users = await users_model.find({});


        // Sending user details Response back to the requestor   
        res.status(200);
        res.json({
            users_details:get_users
        });
    } catch (err) {
        console.log(err);

        // Sending Error Response back to the requestor   
        res.status(400);
        res.json({
            Status : 1,
            Error : err
        });

    }
}

// Function to list all Roles from user_roles colection. 
async function get_roles(req, res) {

    try {
        // Getting data from user roles collection.
        get_roles = await user_role_model.find({});

        // Sending role details response back to the requestor   
        res.status(200);
        res.json({
            role_details:get_roles
        });
    } catch (err) {
        console.log(err);

        // Sending Error Response back to the requestor   
        res.status(400);
        res.json({
            Status : 1,
            Error : err.message.split(',')
        });

    }
}


// Exporting User Registration Function.
module.exports = {
    get_users,
    get_roles
}
