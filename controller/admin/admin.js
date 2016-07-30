/**
 * Author: walt
 * Time: 2016/7/23
 */
var Admin = require('../../models/admin/admin');  //用户数据模型
var Article = require('../../models/article');  //文章数据模型

//后台管理登录页
exports.login = function(req,res){
    res.render('admin/login',{});
}

//后台管理首页
exports.index = function(req,res){
    if(req.session.admin){  //如果已经登录
        res.render('admin/index',{admin:req.session.admin,title:'后台管理'});
    }else{
        res.redirect('/admin/login');
    }
}

//注销
exports.logout = function(req,res){
    req.session.admin = '';
    res.redirect('/admin/login');
}

//处理后台管理登录
exports.singin = function(req,res){

    var username = req.body.username;  //获取提交过来的用户名
    var password = req.body.password;  //获取提交过来的密码

    if(username && password){
        var userdata = {username:username,password:password};
        //先去查找数据库有没有注册过管理员，有则判断用户名密码是否正确，没有就直接注册一个新用户
        Admin.find({},function(err,docs){

            if(docs.length){
                //已经注册过管理员帐号
                Admin.find(userdata,function(err,docs){
                    if(docs.length){  //登录成功
                        req.session.admin = username;
                        res.redirect('/admin');
                    }else{
                        res.render('admin/login',{});
                    }
                });
            }else{
                //注册新管理帐号
                var admin = new Admin(userdata);
                admin.save(function(err){
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

//文章列表
exports.articleList = function(req,res){
    //查询文章列表
    Article.find({},function(err,docs){
        //console.log(docs);
        if(!err){
            res.render('admin/article/list',{admin:req.session.admin,title:'文章列表',article:docs});
        }else{
            console.log('查询文章列表失败');
        }
    });

}

//添加文章跳转
exports.articleAddLink = function(req,res){
    res.render('admin/article/add',{admin:req.session.admin,title:'新增文章'});
}

//添加文章
exports.articleAdd = function(req,res){
    var title = req.body.title;
    var content = req.body.content;
    var author = req.session.admin;
    var nowDate = new Date();
    //var time = nowDate.toLocaleDateString() + " "+ nowDate.toLocaleTimeString();
    var time = nowDate.toLocaleDateString();
    if(title && content){
        var articleData = {title:title,content:content,author:author,time:time};
        var article = new Article(articleData);
        article.save(function(err){
            if(err){
                console.log('添加文章失败');
            }else{
                console.log('添加文章成功');
                res.redirect('/admin/article/add');
            }
        });
    }else{
        console.log('标题或内容不能为空');
    }
}

//删除文章
exports.delete = function(req,res){
    var id = req.body.id;

    if(!id){
        res.send({"status":"参数不正确"});
    }else{
        Article.remove({_id:id},function(err,docs){
            if(!err){
                res.send({"status":"1"});
            }else{
                res.send({"status":"0"});
            }
        });
    }
}