# Appiness-User-Management-App
User management application to maintain users and role details in database, on user registration.

#### Important!
Before running the application please make sure to install all necessary npm packages using command `npm install`. Add mongodb credentials in `.env` file and make sure mongodb server is up and running.

### Development Server
Run `npm start` or `node src/server.js` for express server. After you run the command, wait until the the application starts and test by calling api `http://localhost:3000/` in a browser or in a postman by get method.

## User Registration API
You can use api `http://localhost:3000/user_registration` (Post Method) for user registration by passing below json in post body
```json
{
    "user": "user_name",
    "user_email": "User email",
    "user_mobile_number": 123456789
}
```
#### Validations
1. In above json all are required fields, if one field missing API will throw error.
1. User Email should be valid.
1. Duplicate Entry validation based on the User.
1. User role for Initial record will be always Admin role and for rest of the records will be Manager role.

### Additional API's
In adition to user registration also developed extra api to list all the users and roles
1. `http://localhost:3000/get_users` to list all the available users in the users collection.
1. `http://localhost:3000/get_roles` to list all the available roles in the user_roles collection.

## Demo
![Video-16103079481](https://user-images.githubusercontent.com/76727622/104126209-5fea2880-5381-11eb-9f93-9d4774a11a68.gif)


## Screenshots
### Code Structure
![code structure](https://user-images.githubusercontent.com/76727622/104128795-95960e00-538f-11eb-9cda-51d11676ac5e.png)

### Server test
![Appliation test](https://user-images.githubusercontent.com/76727622/104125782-097bea80-537f-11eb-8487-1a6d48cd7cc0.png)

### Registration API
![registartion API](https://user-images.githubusercontent.com/76727622/104125809-329c7b00-537f-11eb-81f7-e95bbd4ceaae.png)

### Users Collection With Multiple Users
![Users table](https://user-images.githubusercontent.com/76727622/104125833-5233a380-537f-11eb-9b26-5d9a6a82770d.png)

### User Roles Collection With Different Roles
![user roles](https://user-images.githubusercontent.com/76727622/104125862-6e374500-537f-11eb-9286-1acac143eba0.png)

### List all users from users collection
![users details](https://user-images.githubusercontent.com/76727622/104128823-c6764300-538f-11eb-972e-476454b4ba36.png)

### List all the roles from user_roles collection
![roles details](https://user-images.githubusercontent.com/76727622/104128854-e7d72f00-538f-11eb-9952-b727aa0f5998.png)

