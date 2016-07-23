/**
 * Author: walt
 * Time: 2016/7/23
 */
var User = require('../../models/admin/user');  //用户数据模型
var Article = require('../../models/article');  //文章数据模型
//后台管理登录页
exports.login = function(req,res){
    res.render('admin/login',{});
}

//后台管理首页
exports.index = function(req,res){
    if(req.session.admin){  //如果已经登录
        res.render('admin/index',{});
    }else{
        res.redirect('/admin/login');
    }
}

//处理后台管理登录
exports.singin = function(req,res){

    var username = req.body.username;  //获取提交过来的用户名
    var password = req.body.password;  //获取提交过来的密码

    if(username && password){
        var userdata = {username:username,password:password};
        //先去查找数据库有没有注册过管理员，有则判断用户名密码是否正确，没有就直接注册一个新用户
        User.find({},function(err,docs){

            if(docs.length){
                //已经注册过管理员帐号
                User.find(userdata,function(err,docs){
                    if(docs.length){  //登录成功
                        req.session.admin = username;
                        res.redirect('/admin');
                    }else{
                        res.render('admin/login',{});
                    }
                });
            }else{
                //注册新管理帐号
                var user = new User(userdata);
                user.save(function(err){
                    if(err){
                        console.log('注册失败');
                    }else{
                        console.log('注册成功');
                        req.session.admin = username;
                        res.redirect('/admin');
                    }
                });
            }

        });


    }else{
        res.render('admin/login',{});
    }
}

//添加文章
exports.add = function(req,res){
    var title = req.body.title;
    var content = req.body.content;
    if(title && content){
        var articleData = {title:title,content:content};
        var article = new Article(articleData);
        article.save(function(err){
            if(err){
                console.log('添加文章失败');
            }else{
                console.log('添加文章成功');
                res.redirect('/admin');
            }
        });
    }else{
        console.log('标题或内容不能为空');
    }
}