const JwtStartegy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const authenticationService = require('../src/services/authorizations.service');

const appConfigs = require('../appConfig');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = appConfigs.secretKey;

module.exports = (passport) => {

    passport.use(new JwtStartegy(opts, (jwtPayload, done) => {

        authenticationService.getUserAndApplicationUserByUsernameForAuthentication(jwtPayload.username).then(userAndApplicationUser => {

            if (userAndApplicationUser) {
                done(null, userAndApplicationUser);
            }
            else {
                done(null, null, "Security token invalid");
            }
        }).catch(err => {
            done(err);
        });
    }));
}