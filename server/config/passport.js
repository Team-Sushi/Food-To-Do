/* Passport setup */

const passport = require('passport');
const bcrypt = require('bcrypt');
const passport_local = require('passport-local');
const { findUserByEmail } = require('../controllers/users/findUserByEmail.js');
const { User } = require('../models/users.js')

// Configuring local strategy for the application
const LocalStrategy = passport.use(new passport_local.Strategy(
    (email, password, done) => {
        findUserByEmail(email, (err, user) => {
			if (err) {
				return done(err);
			}

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
        });
    }
));

// Session-based functions
const serializeUser = 
	passport.serializeUser(function(user, cb) {
		cb(null, user.id);
	});

const deserializeUser = 
	passport.deserializeUser(function(id, cb) {
		User.findById(id, function (err, user) {
			if (err) {
				return cb(err); 
			}
			cb(null, user);
		});
	});

module.exports = {
	LocalStrategy,
	serializeUser,
	deserializeUser
}