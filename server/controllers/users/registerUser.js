/* Register a new user, with the encrypted password from the front end
    1. Find if there's an existing user
    2. If yes, deny the registration "Account has existed"
    3. If no, add the user details into database */

const { User } = require('../../models/users.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = async (req, res) => {
    try {
        // Generate salt and hash the password before storing into database
        await bcrypt.genSalt(saltRounds)
        .then(salt => {
            return bcrypt.hash(req.body.password, salt);
        })
        .then(async (hashedPassword) => {
            return await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword
            });
        })
        .then(newUser => {
            return res.json(newUser);
        });
    }
    catch (err) {
        res.send(err);
    }
}

module.exports = { registerUser };