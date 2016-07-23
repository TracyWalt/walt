/**
 * Author: walt
 * Time: 2016/7/23
 */
var express = require('express');
var app = express();
var router = require('./router/router'); //路由

//路由
app.use(router);

app.listen(8000,function(){
   console.log('server start...');
});