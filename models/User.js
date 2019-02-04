const mongose = require('mongoose');
const { Schema } = mongose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  credits: { type: Number, default: 0 },
  displayName: String
});

mongose.model('users', userSchema);
