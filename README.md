# Appiness-User-Management-App
User management application to maintain users and role details in database, on user registration.

#### Important!
Before running the application please make sure to install all necessary npm packages using command `npm install`. Add mongodb credentials in `.env` file and make sure mongodb server is up and running.

### Development Server
Run `npm start` for node.js express server. After you run the command, wait until the the application starts and test by calling api `http://localhost:3000/` in a browser or in a postman by get method.

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

## Demo
![Video-16103079481](https://user-images.githubusercontent.com/76727622/104126209-5fea2880-5381-11eb-9f93-9d4774a11a68.gif)


## Screenshots
### Code Structure
![Application structure](https://user-images.githubusercontent.com/76727622/104125760-e81afe80-537e-11eb-835f-861a75c639c2.png)

### Server test
![Appliation test](https://user-images.githubusercontent.com/76727622/104125782-097bea80-537f-11eb-8487-1a6d48cd7cc0.png)

### Registration API
![registartion API](https://user-images.githubusercontent.com/76727622/104125809-329c7b00-537f-11eb-81f7-e95bbd4ceaae.png)

### Users Collection With Multiple Users
![Users table](https://user-images.githubusercontent.com/76727622/104125833-5233a380-537f-11eb-9b26-5d9a6a82770d.png)

### User Roles Collection With Different Roles
![user roles](https://user-images.githubusercontent.com/76727622/104125862-6e374500-537f-11eb-9286-1acac143eba0.png)

