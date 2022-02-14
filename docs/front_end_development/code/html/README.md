---
title: Html规范
date: 2019-7-11
categories:
 - 代码规范
tags:
 - 代码规范
prev: ../../name/
next: ../../code/css/
---
![](https://cdn.jsdelivr.net/gh/MaYaQ/super-duper-train/img/front-end-develop-standard03.jpg)
<!-- more -->
# 基本原则

## 结构、行为、样式分离

尽量确保文档和模板只包含 HTML 结构，样式都放到样式表里，行为都放到脚本里。

- 不使用超过两张样式表
- 不使用超过三个脚本（学会用合并脚本）
- 不使用行内样式（`<style>.no-good {}</style>`）
- 不在元素上使用 style 属性（`<hr style="border-top: 5px solid black">`）
- 不使用行内脚本（`<script>alert('no good')</script>`）
- 不使用表象元素（`i.e. <b>, <u>, <center>, <font>, <b>`）
- 不使用表象 class 名（`i.e. red, left, center`）

## 脚本加载

说到 js 和 css 的位置，大家应该都知道 js 放在下面，css 放在上面。
但是，如果你的项目只需要兼容 ie10+或者只是在移动端访问，那么可以使用 HTML5 的新属性 async，将脚本文件放在`<head>`内
兼容老旧浏览器(IE9-)时：
脚本引用写在 body 结束标签之前，并带上 async 属性。这虽然在老旧浏览器中不会异步加载脚本，但它只阻塞了 body 结束标签之前的 DOM 解析，这就大大降低了其阻塞影响。
而在现代浏览器中：
脚本将在 DOM 解析器发现 body 尾部的 script 标签才进行加载，此时加载属于异步加载，不会阻塞 CSSOM（但其执行仍发生在 CSSOM 之后）。
综上所述，
所有浏览器中推荐:

```html
<html>
  <head>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <!-- body goes here -->
    <script src="main.js" async></script>
  </body>
</html>
```

只兼容现代浏览器推荐:

```html
<html>
  <head>
    <link rel="stylesheet" href="main.css">
    <script src="main.js" async></script>
  </head>
  <body>
    <!-- body goes here -->
  </body>
</html>
```

## 缩进

统一两个空格缩进（总之缩进统一即可），不要使用 Tab 或者 Tab、空格混搭。

## 文件编码

使用不带 BOM 的 UTF-8 编码。

在 HTML 中指定编码

```html
<meta charset="utf-8">
```

无需使用 @charset 指定样式表的编码，它默认为 UTF-8 （参考 @charset）

## 一律使用小写字母

```html
  <a href="">test</a>
  <div id="list" class="concent">test</div>
```

## 省略外链资源 URL 协议部分

省略外链资源（图片及其它媒体资源）URL 中的 http / https 协议，使 URL 成为相对地址，避免 Mixed Content 问题，减小文件字节数。其它协议（ftp 等）的 URL 不省略。

```html
<script src="//cdn.bootcss.com/vue/2.6.10/vue.common.dev.js"></script>

<style>
.list {
  background: url("//cdn.bootcss.com/vue/2.6.10/vue.common.dev.jpg");
    }
</style>
```

## 统一注释

使用块注释，通过配置编辑器，可以提供快捷键来输出一致认可的注释模式。

# HTML 篇

## 标签

- 自闭合（self-closing）标签，无需闭合 ( 例如： img input br hr 等 )；
- 可选的闭合标签（closing tag），需闭合 ( 例如：`</li> 或 </body>` )；
- 尽量减少标签数量；

## Class 与 ID

- class 应以功能或内容命名，不以表现形式命名；
- class 与 id 单词字母小写，多个单词组成时，采用中划线-分隔；
- 使用唯一的 id 作为 Javascript hook, 同时避免创建无样式信息的 class；

## 属性定义统一使用双引号

```html
<!--不推荐-->
<div id='slide'>menu</div>

<!--推荐-->
<div id="slide">menu</div>
```

## 标签嵌套

a 不允许嵌套 div 这种约束属于语义嵌套约束，与之区别的约束还有严格嵌套约束，比如 a 不允许嵌套 a。

严格嵌套约束在所有的浏览器下都不被允许；而语义嵌套约束，浏览器大多会容错处理，生成的文档树可能相互不太一样。

语义嵌套约束

```html
<li> 用于 <ul> 或 <ol> 下；

<dd>, <dt> 用于 <dl> 下；

<thead>, <tbody>, <tfoot>, <tr>, <td> 用于 <table> 下；

严格嵌套约束

inline-Level 元素，仅可以包含文本或其它 inline-Level 元素;

<a>里不可以嵌套交互式元素<a>、<button>、<select>等;

<p>里不可以嵌套块级元素<div>、<h1>~<h6>、<p>、<ul>/<ol>/<li>、<dl>/<dt>/<dd>、<form>等。
```

更多详情，参考 WEB 标准系列-HTML 元素嵌套

## 布尔值属性

HTML5 规范中 disabled、checked、selected 等属性不用设置值。

```html
<input disabled />
```

## 语义化

- 没有 CSS 的 HTML 是一个语义系统而不是 UI 系统。

- 通常情况下，每个标签都是有语义的，所谓语义就是你的衣服分为外套， 裤子，裙子，内裤等，各自有对应的功能和含义。所以你总不能把内裤套在脖子上吧。– 一丝

- 此外语义化的 HTML 结构，有助于机器（搜索引擎）理解，另一方面多人协作时，能迅速了解开发者意图。

不推荐：

```html
<div class="top-navigation">
  <div class="nav-item"><a href="#home">Home</a></div>
  <div class="nav-item"><a href="#news">News</a></div>
  <div class="nav-item"><a href="#about">About</a></div>
</div>

<div class="news-page">
  <div class="page-section news">
    <div class="title">All news articles</div>
    <div class="news-article">
      <h2>Bad article</h2>
      <div class="intro">Introduction sub-title</div>
      <div class="content">This is a very bad example for HTML semantics</div>
      <div class="article-side-notes">I think I'm more on the side and should not receive the main credits</div>
      <div class="article-foot-notes">
        This article was created by David <div class="time">2014-01-01 00:00</div>
      </div>
    </div>

    <div class="section-footer">
      Related sections: Events, Public holidays
    </div>
  </div>
</div>

<div class="page-footer">
  Copyright 2014
</div>
```

推荐:

```html
<header>
  <h1>My page title</h1>
</header>
<nav class="top-navigation">
  <ul>
    <li class="nav-item"><a href="#home">Home</a></li>
    <li class="nav-item"><a href="#news">News</a></li>
    <li class="nav-item"><a href="#about">About</a></li>
  </ul>
</nav>
<main class="news-page" role="main">
  <section class="page-section news">
    <header>
      <h2 class="title">All news articles</h2>
    </header>
    <article class="news-article">
      <header>
        <div class="article-title">Good article</div>
        <small class="intro">Introduction sub-title</small>
      </header>
      <div class="content">
        <p>This is a good example for HTML semantics</p>
      </div>
      <aside class="article-side-notes">
        <p>I think I'm more on the side and should not receive the main credits</p>
      </aside>
      <footer class="article-foot-notes">
        <p>This article was created by David <time datetime="2014-01-01 00:00" class="time">1 month ago</time></p>
      </footer>
    </article>
    <footer class="section-footer">
      <p>Related sections: Events, Public holidays</p>
    </footer>
  </section>
</main>
<footer class="page-footer">
  Copyright 2019
</footer>
```

## alt 标签不为空

`<img>`标签的 alt 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。
假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：

- 网速太慢
- src 属性中的错误
- 浏览器禁用图像
- 用户使用的是屏幕阅读器
- 从 SEO 角度考虑，浏览器的爬虫爬不到图片的内容，所以我们要有文字告诉爬虫图片的内容

## HEAD

文档类型

为每个 HTML 页面的第一行添加标准模式（standard mode）的声明， 这样能够确保在每个浏览器中拥有一致的表现。

```html
<!DOCTYPE html>
```

## 字符编码

以无 BOM 的 utf-8 编码作为文件格式;

指定字符编码的 meta 必须是 head 的第一个直接子元素；

```html
<meta charset="UTF-8">
```

## IE 兼容模式

优先使用最新版本的 IE 和 Chrome 内核

```html
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

## SEO 优化

```html
  <!--SEO-->
  <title>Title</title>
  <meta name="keywords" content="your keywords">
  <meta name="description" content="your description">
  <meta name="aurhor" content="author,email address">
```

## viewport

viewport: 一般指的是浏览器窗口内容区的大小，不包含工具条、选项卡等内容；

width: 浏览器宽度，输出设备中的页面可见区域宽度；

device-width: 设备分辨率宽度，输出设备的屏幕可见宽度；

initial-scale: 初始缩放比例；

maximum-scale: 最大缩放比例；

user-scalable: 禁止用户缩放；

为移动端设备优化，设置可见区域的宽度和初始缩放比例。

```html
  <meta name="viewport" content="width=device-width,device-width=1.0,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

## iOS 图标

apple-touch-icon 图片自动处理成圆角和高光等效果;

apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计原图;

```html
  <!--iPhone和iTouck默认 57x57 像素，移动端有-->
  <link rel="apple-touch-icon-precomposed" href="apple-icon57.png">
  <!--iPad默认 72x72 像素，移动端有-->
  <link rel="apple-touch-icon-precomposed" href="apple-icon72.png" sizes="72x72">
  <!--Retina iPhone和iTouck默认 114x114 像素，移动端有-->
  <link rel="apple-touch-icon-precomposed" href="apple-icon114.png" sizes="114x114">
  <!--Retina iPad默认 144x144 像素，移动端有-->
  <link rel="apple-touch-icon-precomposed" href="apple-icon144.png" sizes="144x144">
```

## favicon

在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 favicon.ico 。为了保证 favicon 可访问，避免 404，必须遵循以下两种方法之一：

在 Web Server 根目录放置 favicon.ico 文件；
使用 link 指定 favicon；

```html
  <link rel="shortcut icon" href="favicon.ico">
```

## HEAD 模板

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <!--SEO-->
  <title>Title</title>
  <meta name="keywords" content="your keywords">
  <meta name="description" content="your description">
  <meta name="aurhor" content="author,email address">
  <!--为移动端优化设置可见区域的宽度和缩放比例-->
  <meta name="viewport" content="width=device-width,device-width=1.0,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <!--iPhone和iTouck默认 57x57 像素，移动端有-->
  <link rel="apple-touch-icon-precomposed" href="apple-icon57.png">
  <!--iPad默认 72x72 像素，移动端有-->
  <link rel="apple-touch-icon-precomposed" href="apple-icon72.png" sizes="72x72">
  <!--Retina iPhone和iTouck默认 114x114 像素，移动端有-->
  <link rel="apple-touch-icon-precomposed" href="apple-icon114.png" sizes="114x114">
  <!--Retina iPad默认 144x144 像素，移动端有-->
  <link rel="apple-touch-icon-precomposed" href="apple-icon144.png" sizes="144x144">

  <link rel="shortcut icon" href="favicon.ico">
</head>
<body>
</body>
</html>
```
