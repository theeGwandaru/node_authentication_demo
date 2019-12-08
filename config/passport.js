var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userService = require('../services/userService');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},
    (username, password, done) => {
        userService.findByEmail(username)
            .then((user) => {
                if (!user) {
                    return done(null, false, { message: "Incorrect email" });
                }
                let valid = userService.validatePassword(password, user);
                if (!valid) {
                    return done(null, false, { message: 'Incorrect Password' })
                }
                let authJson = userService.toAuthJSON(user);
                return done(null, authJson);
            })
            .catch((err) => {
                return done(err)
            })

    }
))