const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/User");
require("./models/Survey");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const billingRouts = require("./routes/billingRoutes");
const surveyRoutes = require("./routes/surveyRoutes");

// Connect to Mongose Database
mongoose.connect(
  keys.mongoURI,
  () => {
    useNewUrlParser: true;
  }
);

//Mongoose Logs
mongoose.set("debug", true);

// Express Server
const app = express();

// Body Parser Middleware to parse the body of the request and attach to the req.body property
app.use(bodyParser.json());

// Cookie Configuration
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Initialize Passport
app.use(passport.initialize());

// Passport use Cookies
app.use(passport.session());

// Include routing paths
authRoutes(app);
billingRouts(app);
surveyRoutes(app);

if (process.env.NODE_ENV === "production") {
  // Express serve production assets (main.js or main.css)
  app.use(express.static("client/build"));

  // Express serve index.html if the route is not recogized
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

// Listen on specified Port
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
