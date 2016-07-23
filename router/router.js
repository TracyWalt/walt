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
router.get('/admin',adminController.index);
router.get('/admin/login',adminController.login);
router.post('/admin/singin',adminController.singin);

module.exports = router;