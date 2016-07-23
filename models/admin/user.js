/**
 * Author: walt
 * Time: 2016/7/23
 */
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var userSchema = new Schema({
    username : String,
    password : String
})

var User = mongoose.model('User', userSchema);

//倒出模型
module.exports = User;