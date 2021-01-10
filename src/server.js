// import Required npm modules
const express = require('express');
const bodyParser = require('body-parser');

// loads environment variables from a .env file into process.env
const read_env = require('./config/read_env.js');

// Getting router deatails.
const router = require('./routers/router.js');

//Port for Node Server.
const port = process.env.PORT||3000

// initializing Express.
const app = express();

//Node.js body parsing middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initializing Router
app.use(router);


//Initializing Express Server 
app.listen(port,() =>{
    console.log('Express Server is Up and running in a Post ',port)
})