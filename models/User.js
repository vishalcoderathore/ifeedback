const mongose = require("mongoose");
const { Schema } = mongose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongose.model("users", userSchema);
