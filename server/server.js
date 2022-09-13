// Importing modules
require('dotenv').config();
require('./config/database');

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport.js')

// Application setup
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Import routers
const { userRouter } = require('./routes/userRouter.js');

app.get('/', (req, res) => {
    res.send('<h1>Team Sushi\'s grocery app is coming soon!</h1>');
})

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})