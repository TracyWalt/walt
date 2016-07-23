/**
 * Author: walt
 * Time: 2016/7/23
 */
var express = require('express');
var app = express();
var router = require('./router/router'); //路由
var ejs = require('ejs-mate'); // 模版引擎
var session = require('express-session');   //session
var bodyParser = require('body-parser');  //处理表单提交的数据
//var multipart = require('connect-multiparty'); //处理JSON数据
//var multipartMiddleware = multipart();

//设置模版路径和模版引擎
app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', ejs);

//启用session
app.use(session({
    secret: 'session walt',
    resave: false,
    saveUninitialized: true
}));

//处理客户端提交的JSON数据
app.use(bodyParser.json({limit: '1mb'}));  //这里指定参数使用 json 格式 ,要写在所有路由之前，不然该功能就没有被启用
app.use(bodyParser.urlencoded({
    extended: true
}));

//路由
app.use(router);

//端口
app.listen(8000,function(){
    console.log('server start...');
});