// import dotenv npm module
var dotenv = require('dotenv')

// Reading .env file for credentials
const result = dotenv.config()
 
if (result.error) {
    console.log(result.error) ;   
}
