/**
 * Author: walt
 * Time: 2016/7/26
 */


exports.link = function(req,res){
    res.render('upload',{title:'文件上传',tip:''});
}

exports.upload = function(req,res){
    console.log('-------------file----------------------');
    console.log(req.body, req.files);
    if(req.files){
        res.render('upload',{title:'文件上传',tip:'上传成功'});
    }
    console.log('-------------file----------------------');
}