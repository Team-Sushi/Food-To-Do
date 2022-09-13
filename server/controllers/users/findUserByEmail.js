/* Find a user in the database based on the ID or other params */
const { User } = require('../../models/users.js');
const { db } = require('../../config/database');

const findUserByEmail = async (email) => {
    try {
        const thisUser = await User.findOne({email: email});
        return thisUser.exec();
    }
    catch (err) {
        console.log('User not found');
    }
}

module.exports = { findUserByEmail };