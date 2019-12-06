const User = require('../models/user');
const crypto = require('crypto');

const encryptString = (string) => {
    let salt = crypto.randomBytes(16).toString('hex');
    let password = crypto.pbkdf2Sync(string, salt, 1000, 512, 'sha512').toString('hex');
    return {
        salt: salt,
        password: password
    }
}

const validatePassword = (password, salt) => {
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 512, 'sha512').toString('hex');
    return password === hash;
}

const generateJWT = (user) => {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: user.email,
        id: user._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10)
    }, 'secret');
}

const toAuthJSON = () => {
    return {
        _id: user._id,
        email: user.email,
        token: this.generateJWT()
    }
}

module.exports = {

    create: async (user) => {
        console.log('creating user');
        user = new User(user);
        let encryptionResults = encryptString(user.password);
        user.salt = encryptionResults.salt;
        user.password = encryptionResults.password;

        user = await User.create(user);
        console.log(user);
        return user;
    },
    encryptString: encryptString,
    validatePassword: validatePassword,
    generateJWT: generateJWT,
    toAuthJSON: toAuthJSON
}