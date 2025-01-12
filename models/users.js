const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unqiue: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    preferences: {
        categories: { type: [String], default: [] },
        languages: { type: [String], default: [] },
    },
});

module.exports = mongoose.model('User', UserSchema);