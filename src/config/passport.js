require('dotenv').config();
const passport = require('passport');
const gStrategy = require('passport-google-oauth20');

passport.use(
    new gStrategy({
        callbackURL: '/home',
        clientID: process.env.GID,
        clientSecret: process.env.GSECRET
    }, (_, $, profile, done) => {
        console.log(profile);
    })
);

module.exports = passport;