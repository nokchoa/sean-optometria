const User = require('../models/user');
const LocalStrategy = require('passport-local');
module.exports = (passport) => {
    passport.use(new LocalStrategy(
      function (username, password, done) {
        User.findOne({
            where: {
                user: username
            }
        }, function (err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          if (!user.verifyPassword(password)) {
            return done(null, false);
          }
          return done(null, user);
        });
      }
    ));
};