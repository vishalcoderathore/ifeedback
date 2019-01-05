const mongose = require("mongoose");
const { Schema } = mongose;

const userSchema = new Schema({ googleId: String });

mongose.model("users", userSchema);
