/**
 * Author: walt
 * Time: 2016/7/23
 */
var express = require('express');
var router = express.Router();
var adminController = require('../controller/admin/admin');
var indexController = require('../controller/index');
var articleController = require('../controller/article');
var uploadController = require('../controller/upload');
//首页
router.get('/',indexController.index);
//列表页
router.get('/list',articleController.list);
//详情页
router.get('/article',articleController.article);

//admin router
router.get('/admin',adminController.index); //后台管理首页
router.get('/admin/login',adminController.login); //登录页
router.get('/admin/logout',adminController.logout); //注销
router.post('/admin/singin',adminController.singin); //登录校验

router.get('/admin/article/list',adminController.articleList); //文章列表
router.get('/admin/article/add',adminController.articleAddLink); //添加文章
router.post('/admin/article/add',adminController.articleAdd);  //添加文章
router.all('/admin/article/delete',adminController.delete);  //删除文章
//文件上传
router.get('/upload',uploadController.link);
router.post('/upload',uploadController.upload);

module.exports = router;