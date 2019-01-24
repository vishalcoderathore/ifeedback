const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongose = require('mongoose');

const User = mongose.model('users');
const Survey = mongose.model('surveys');

passport.serializeUser((user, done) => {
  done(null, user.id); // user.id is the unique udentifier of the profile.id record in db
});

passport.deserializeUser((id, done) => {
  // search db to for User model
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => console.log(err));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        } else {
          const newUser = await new User({
            googleId: profile.id,
            displayName: profile.displayName
          }).save();
          const sampleSurvey = await new Survey({
            yes: 140,
            no: 42,
            title: 'Sample Survey',
            body:
              'This is a sample survey. Let me know if you like our product. We would love to know about our product. Your feedback is valuable to us.',
            subject: 'We would love your feedback',
            recipients: [{ responded: false, email: 'sampleEmail@mail.com' }],
            _user: newUser.id,
            dateSent: Date.now()
          });
          sampleSurvey.save();
          return done(null, newUser);
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);
