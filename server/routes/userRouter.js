const express = require('express');
const passport = require('../config/passport.js');
const userController = require('../controllers/users');

const userRouter = express.Router();

userRouter.post('/login', (req, res, next) => {
    passport.authenticate('user-login', (err, user) => {
        if (err) throw err;
        if (!user) res.send(`Incorrect credentials, please try again.`);
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send(`Welcome back, ${user.firstName}!`);
                console.log(req.user);
            })
        }
    })
    (req, res, next);
})

userRouter.post('/register', userController.registerUser);

userRouter.post('/logout', (req, res, next) => {
    req.logout(false, (err) => {
        if (err) return next(err);
    });
    // req.session.destroy();
    res.send(`You've been logged out!`);
})

// To check if the user credentials exist in the request
userRouter.get('/protected', (req, res, next) => {
    console.log(req.session);
    if (req.isAuthenticated()) {
        res.send('<h1>You are authenticated</h1>');
    } else {
        res.send('<h1>You are not authenticated</h1>');
    }
});

module.exports = { userRouter }