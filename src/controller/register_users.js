
// Importing Users and User roles Modles.
const users_model = require('../models/users_model.js');
const user_role_model = require('../models/users_roles_model.js');


// Function to handle User Registration 

async function user_registration(req, res) {

    // Assigning values to individual fields from request body.
    const user = req.body.user;
    const user_email = req.body.user_email;
    const user_mobile_number = req.body.user_mobile_number;

    try {
        // Getting data from users collection to check user Regisration is new or not.
        get_users = await users_model.find({});

        // Users Data
        users_data = new users_model({
            user,
            user_email,
            user_mobile_number
        });

        // User Roles Data
        users_role_data = new user_role_model({
            user,
            user_role: get_users.length == 0 ? 'Admin' : 'User'  // Deciding  User Role based on Condition 
        });

        // Save Both User and User Role Details 
        users_details = await users_data.save();
        users_role_details = await users_role_data.save();

        // Sending Response back to the requestor   
        res.status(200);
        res.json({
            users_details,
            users_role_details
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
module.exports = user_registration
