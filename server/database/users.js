const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const userSchema = new Schema ({
    firstName:              {type: String, required: true},
    lastName:               {type: String},
    email:                  {type: String, required: true},
    password:               {type: String, required: true},
    userImageURL:           {type: String},
    favoriteItems:          [ObjectId],
    recentlyBoughtItems:    [ObjectId], // add ref: Item to these arrays
    recentSearchedItems:    [ObjectId]
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};