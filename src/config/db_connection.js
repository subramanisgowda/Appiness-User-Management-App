const mongoose = require('mongoose');

// Reading Values from .env file for database credentials
const db_host = process.env.DB_HOST
const db_port = process.env.DB_PORT
const database_name = process.env.DATABASE_NAME

// Mongodb Connection URL
const connection_url = `mongodb://${db_host}:${db_port}/${database_name}`

mongoose.set('useCreateIndex', true);

//Connect to Mongodb using mongoose library.
mongoose.connect(connection_url,{ useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
    console.log('Connected to Database Sucesssfully');
}).catch((err)=>{
   console.log('Error : Unable to Connect to Database ',err);
});