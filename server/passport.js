'use strict';

var passport = require('passport'),
  Twit = require('twit'),
  User = require('mongoose').model('User'),
  twitterConfig = require('./twitter.config.js');

module.exports = function () {

  passport.use(new Twit({

      consumer_key: twitterConfig.consumer_key,
      consumer_secret: twitterConfig.consumer_secret,
      access_token_key: twitterConfig.access_token_key,
      access_token: twitterConfig.access_token,
      access_token_secret: twitterConfig.access_token_secret,
      // includeEmail: true
      include_email: true
    },
    function (token, tokenSecret, profile, done) {
      User.upsertTwitterUser(token, tokenSecret, profile, function(err, user) {
        return done(err, user);
      });
    }));

};
