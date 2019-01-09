const mongose = require("mongoose");
const { Schema } = mongose;

const recepientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recepientSchema;
