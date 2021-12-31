const mongoose = require("mongoose");
//mongoose.pluralize(null);

//user schema
const userSchema = mongoose.Schema({
    username : String,
    password : String,
    name : String,
    age : Number
});

const userModel = mongoose.model("fullstack",userSchema,"fullstack");

module.exports = userModel;