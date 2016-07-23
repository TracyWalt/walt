/**
 * Author: walt
 * Time: 2016/7/23
 */
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var articleSchema = new Schema({
    title : String,
    content : String
})

var Article = mongoose.model('Article', articleSchema);

//倒出模型
module.exports = Article;