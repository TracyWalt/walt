/**
 * Author: walt
 * Time: 2016/7/23
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('aa');
});

module.exports = router;