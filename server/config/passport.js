/* Passport setup */

const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const { findUserByEmail } = require('../controllers/users/findUserByEmail.js');
const { User } = require('../models/users.js')

// Configuring local strategy for the application
passport.use('user-login', new LocalStrategy(
	{
		usernameField: 'email',
		passwordField: 'password'
	},
    (email, password, done) => {
        User.findOne({ email: email })
		.then((user) => {
			// User not found
			if (!user) {
				return done(null, false);
			}

			// Always use hashed passwords and fixed time comparison
			bcrypt.compare(password, user.password, (err, isValid) => {
				if (err) {
					return done(err);
				}
				if (!isValid) {
					return done(null, false);
				}
				return done(null, user);
			});
        })
		.catch((err) => {
			done(err)
		});
    }
));

// Session-based functions
passport.serializeUser(function(user, cb) {
	cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
	User.findById(id, function (err, user) {
		if (err) {
			return cb(err); 
		}
		cb(null, user);
	});
});

module.exports = passport;