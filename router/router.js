/**
 * Author: walt
 * Time: 2016/7/23
 */
var express = require('express');
var router = express.Router();
var adminController = require('../controller/admin/admin');

router.get('/',function(req,res){
    res.send('首页');
});

//admin router
router.get('/admin',adminController.index); //后台管理首页
router.get('/admin/login',adminController.login); //登录页
router.post('/admin/singin',adminController.singin); //登录校验
router.post('/admin/add',adminController.add);  //添加文章

module.exports = router;