const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

// Connect to Mongose Database
mongoose.connect(keys.mongoURI, () => {
    useNewUrlParser : true
});

// Express Server
const app = express();

// Cookie Configuration
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys : [keys.cookieKey]
}));

// Initialize Passport
app.use(passport.initialize());

// Passport use Cookies
app.use(passport.session());

// Include routing paths
authRoutes(app);

const PORT = process.env.PORT || 5000;

// Listen on specified Port
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));