const passport = require('passport');

module.exports = {
    login: (req, res, next) => {
        return passport.authenticate('local', { session: false }, (err, authJson, info) => {
            if (err) { return next(err) };
            if (authJson) {
                res.json(authJson);
            }
            else {
                res.send("not found");
            }
        })(req, res, next);
    }
}