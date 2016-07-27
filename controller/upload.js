/**
 * Author: walt
 * Time: 2016/7/26
 */


var multer  = require('multer');  //文件上传

//配置
var storage = multer.diskStorage({
    // destination: function (req, file, cb){  //传递函数 不会自动创建目录
    //     cb(null, './upload');
    // },
    destination: './upload',   //传递字符串会自动创建目录
    filename: function (req, file, cb){
        cb(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({
    storage: storage
}).single('myFiles');

//upload.single('myFiles');  //单文件
//upload.array('myFiles');  //多文件
//upload.fields([{ name: 'myFiles', maxCount: 1 }]);  //不同类型文件


exports.link = function(req,res){
    res.render('upload',{title:'文件上传',tip:''});
}


//处理上传
exports.upload = function(req,res){

    upload(req, res, function (err) {

        console.log('-------------file----------------------');

        //文件信息在req.file或者req.files中显示。
        console.log(req.body, req.file);

        console.log('-------------file----------------------');

        //添加错误处理
        if (err) {
            return  console.log(err);
        }else{
            res.render('upload',{title:'文件上传',tip:'上传成功'});
        }

    });

}
