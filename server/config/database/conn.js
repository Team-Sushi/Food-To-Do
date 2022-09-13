require('dotenv').config()
const mongoose = require('mongoose');

// Connect to different databases based on the environment
if (process.env.NODE_ENV == 'development') {
    mongoose.connect(process.env.MONGO_DEV_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} else if (process.env.NODE_ENV == 'testing') {
    mongoose.connect(process.env.MONGO_TEST_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'foodtodo'
    });
} else if (process.env.NODE_ENV == 'production') {
    mongoose.connect(process.env.MONGO_PROD_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'foodtodo'
    });
}

// Testing if the connection to the database is successful
const db = mongoose.connection;

db.once('open', async() => {
    console.log(`Database connected on: ${db.host} port ${db.port}`);
})
db.on('error', err => {
    console.log(`Connection failed: ${err}`);
    process.exit(1);
})

module.exports = {db};



