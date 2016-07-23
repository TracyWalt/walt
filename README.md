# walt

### 安装mongodb数据库

1. 官网 [下载](https://www.mongodb.com/) 并安装

2. 如何 [配置](http://www.cnblogs.com/snake-hand/p/3172376.html) 、 [安装启动](http://www.cnblogs.com/lzrabbit/p/3682510.html)


### 安装依赖

1. 安装所需依赖包

```
  npm install
```

2. 启动服务器，访问：http://localhost:3000/

```
  nodemon app.js
```

###目录结构

walt

    controller          //控制器
        admin           //后台管理控制器
            admin.js
        index.js
        article.js

    models              //数据模型

    public              //公用静态资源
        js
        css
        images

    router              //路由
        router.js

    views               //模版文件
        admin           //后台管理模版
        index.html

    app.js

    package.json

    README.md

    .gitignore
