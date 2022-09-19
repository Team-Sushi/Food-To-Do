// Importing modules
require('dotenv').config();
const { dbURI } = require('./config/database/conn.js');

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');

/*
 * ---------- APPLICATION SETUP ----------
 */
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*
 * ---------- SESSION SETUP ----------
 */

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1 * 60 * 60 * 1000 // 1 hour = 60 minutes * 60 seconds * 1000 ms
    },
    store: MongoStore.create({
        mongoUrl: dbURI,
        dbName: 'foodtodo',
        collectionName: 'sessions'
    })
}));


/*
 * ---------- PASSPORT SETUP ----------
 */

const passport = require('./config/passport.js');
app.use(passport.initialize());
app.use(passport.session());

/*
 * ---------- APPLICATION ROUTING ----------
 */

app.get('/', (req, res) => {
    res.send('<h1>Team Sushi\'s grocery app is coming soon!</h1>');
})

// Routing for users
const { userRouter } = require('./routes/userRouter.js');

app.use('/user', userRouter);

/*
 * ---------- OPEN THE SERVER TO LISTEN FOR CONNECTION ----------
 */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})