/**
 * Author: walt
 * Time: 2016/7/23
 */
var Article = require('../models/article');  //文章数据模型

//列表
exports.list = function(req,res){

    //查询文章列表
    Article.find({},function(err,docs){
        if(!err){
            res.render('list',{article:docs});
        }else{
            console.log('查询文章列表失败');
        }
    });

}

//详情
exports.article = function(req,res){
    var _id = req.query.id;
    if(_id){
        //查询文章详情
        Article.findOne({_id:_id},function(err,docs){
            //console.log(docs);
            if(!err){
                res.render('article',{article:docs});
            }else{
                console.log('查询文章详情失败');
            }
        });
    }else{
        res.redirect('/list');
    }
}