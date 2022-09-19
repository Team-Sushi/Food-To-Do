require('dotenv').config()
const mongoose = require('mongoose');

// Connect to different databases based on the environment
const getDBURL = () => {
    if (process.env.NODE_ENV == 'development') {
        return process.env.MONGO_DEV_URI;
    } else if (process.env.NODE_ENV == 'testing') {
        return process.env.MONGO_TEST_URI;
    } else if (process.env.NODE_ENV == 'production') {
        return process.env.MONGO_PROD_URI;
    }
    else {
        console.log(`Environment is undefined or incorrect.`);
        return null;
    }
}
const dbURI = getDBURL();
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'foodtodo'
}

mongoose.connect(dbURI, dbOptions)

// Testing if the connection to the database is successful
const connection = mongoose.connection;

connection.once('open', () => {
    console.log(`Database connected on: ${connection.host} port ${connection.port}`);
})
connection.on('error', err => {
    console.log(`Connection failed: ${err}`);
    process.exit(1);
})

module.exports = {
    connection,
    dbURI
};



