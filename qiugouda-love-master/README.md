# 情人节表白程序 - Qiugouda_Love

麦葱已将源码已发布到 Github，喜欢的可以 `Star` 或 `Fork` 本源码。

原文地址：[《分享一款带自动生成的表白程序源代码》](http://www.yuxiaoxi.com/2014-02-17-to-love-source-code.html)

在线演示：[http://www.qiugouda.com/love/](http://www.qiugouda.com/love/)

##模版文件列表

```
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
```

`/2014` 用于存放生成的静态页面，若更改，请同时修改 `love.php` 里的路径
`/js/love.min.js` 字段获取js压缩文件， `/js/love.src.js` 是未压缩的
`love.php` 核心处理文件，`love.min.js` 传参给此文件处理并生成相应静态页面
`loveNote.txt` 数据记录
`loveTpl.html` 页面模版文件，`love.php` 生成的页面以此文件为模版

##程序运行原理

给页面文字添加span标签，设置 `id="text-xx"` 唯一属性，使用 `contenteditable="true"`，开启该元素的编辑模式，用jQuery属性 `.click()` 判断点击，用 `.text()` 返回此元素的文本内容，并用正则进行判断内容是否合法，然后通过AJAX POST给php处理，php对传入的参数进行过滤，然后读取模版文件，替换模版文件对应内容，保存为新文件并记录操作，最后返回数据给前端，前端处理数据并更新页面。

##使用说明

[点击下载稳定版本](https://github.com/maicong/qiugouda_love/releases) 并解压到网站目录，通过 `http://你的域名/指定目录` 进行访问，如果放在根目录，直接访问绑定域名就行。

```
注：这是一个自动生成表白页面的程序，模版由 jianghongfei.com.cn 原创
麦葱(www.yuxiaoxi.com) 做二次开发，仅限娱乐，不得用于商业用途！
```
