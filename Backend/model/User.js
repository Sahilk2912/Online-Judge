const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: null,
    require: true,
  },
  lastname: {
    type: String,
    default: null,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("user", userSchema);
