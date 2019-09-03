const passport = require("passport");
const mongoose = require("mongoose");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys =  require("../config/keys");

const User = mongoose.model("users")

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then((user) => {
    done(null, user)
  })
})

passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleCientSecret,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ googleId: profile.id })
    .then( (existingUser) => {
      if (existingUser) {
        // then user already have reecord with this profile id
        done(null, existingUser);

      } else {
        // then user do not have record with this profile id
        new User({ googleId: profile.id }).save()
        .then( (user) => { done(null, user) } )
      }
    } )
    // console.log("accessToken", accessToken);
    // console.log("refreshToken", refreshToken);
    // console.log("profile", profile);  
    
  }
));