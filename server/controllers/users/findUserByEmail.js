/* Find a user in the database based on the ID or other params
 * THIS FUNCTION HAS NO USE AT THE MOMENT (19/09/2022)
 */
const { User } = require('../../models/users.js');
const { db } = require('../../config/database');

const findUserByEmail = async (req, res, next) => {
    try {
        const thisUser = await User.findOne({email: req.params.email});
        return thisUser.exec();
    }
    catch (err) {
        console.log('User not found');
    }
}

module.exports = { findUserByEmail };