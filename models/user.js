const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const schema = mongoose.Schema({
    email: {type: String},
    password: {type: String},
    salt: String
});

module.exports = mongoose.model('User', schema);