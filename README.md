# 项目简介

> A Vue.js project

项目预览需要浏览器支持file协议下的AJAX请求，Firefox浏览器默认支持，Chrome解决方案如下：
    Windows：
        设置Chrome的快捷方式属性，在“目标”后面加上--allow-file-access-from-files，注意前面有个空格，重新打开Chrome即可。
    Mac：
        只能通过终端打开浏览器：打开终端，输入下面命令：open -a "Google Chrome" --args --disable-web-security然后就可以屏蔽安全访问了（--args此参         数可有可无）


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
