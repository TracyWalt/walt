/**
 * Author: walt
 * Time: 2016/7/23
 */
var express = require('express');
var router = express.Router();
var adminController = require('../controller/admin/admin');
var indexController = require('../controller/index');
var articleController = require('../controller/article');

//首页
router.get('/',indexController.index);
//列表页
router.get('/list',articleController.list);
//详情页
router.get('/article',articleController.article);

//admin router
router.get('/admin',adminController.index); //后台管理首页
router.get('/admin/login',adminController.login); //登录页
router.post('/admin/singin',adminController.singin); //登录校验
router.post('/admin/add',adminController.add);  //添加文章

module.exports = router;