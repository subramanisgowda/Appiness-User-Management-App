# Appiness-User-Management-App
User management application to maintain users and role details in database, on user registration.

#### Important!
Before running the application please make sure to install all necessary npm packages using command `npm install`. Add mongodb credentials in `.env` file adn make sure mongodb server is up and running.

### Development Server
Run `npm start` for node.js express server. After you run the command, wait until the the application starts and test by calling api `http://localhost:3000/` in a browser or in a postman by get method.

## User Registration API
You can use api `http://localhost:3000/user_registration` (Post Method) for user registration by passing below json in post body
```json
{
    "user": "user_name",
    "user_email": "User email",
    "user_mobile_number": user Mobile number
}
```
in above json data all are required feilds and user email should be valid.
