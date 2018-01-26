情人节已经过去几天了，不知道博友有没有吃到巧克力馅的汤圆。

几天前，为了预热情人节，麦葱二次开发了个表白程序。程序放在BAE上面，因为本地写这个原因，生成的页面过段时间就找不到了，导致链接页面404，麦葱在此表示歉意。

今天麦葱把这款程序分享出来，如果你需要，可以拿去使用。

模版文件说明

/2014
/css
  /css/all.min.css
/fonts
  /fonts/RuiHeiXiTi.otf
/img
  /img/***.jpg
  /img/***.gif
/js
  /js/all.min.js
  /js/audio.min.js
  /js/brav1toolbox.js
  /js/flowtime.js
  /js/love.min.js
  /js/love.src.js
/music
  /music/saveme.mp3
  /music/lovebgm.mp3
index.php
love.php
loveNote.txt
loveTpl.html

/2014 用于存放生成的静态页面，若更改，请同时修改love.php里的路径
/js/love.min.js 字段获取js压缩文件 /js/love.src.js 是未压缩的
love.php 核心处理文件，love.min.js传参给此文件处理并生成相应静态页面
loveNote.txt 数据记录
loveTpl.html 页面模版文件 love.php生成的页面以此文件为模版

程序运行原理

给页面文字添加span标签，设置id="text-xx"唯一属性，使用contenteditable="true"，开启该元素的编辑模式，用jQuery属性.click()判断点击，用.text()返回此元素的文本内容，并用正则进行判断内容是否合法，然后通过AJAX POST给php处理，php对传入的参数进行过滤，然后读取模版文件，替换模版文件对应内容，保存为新文件并记录操作，最后返回数据给前端，前端处理数据并更新页面。

使用说明

上传解压后的文件夹love到网站根目录，通过 http://你的域名/love/ 进行访问 

下载和演示

下载地址：http://www.yuxiaoxi.com/2014-02-17-to-love-source-code.html
在线演示：http://www.qiugouda.com/love/

注：这是一个自动生成表白页面的程序，模版由jianghongfei.com.cn原创，麦葱(www.yuxiaoxi.com)做二次开发，仅限娱乐，不得用于商业用途！