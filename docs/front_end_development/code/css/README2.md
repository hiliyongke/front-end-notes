# CSS

## 代码组织

- 以组件为单位组织代码段；
- 制定一致的注释规范；
- 组件块和子组件块以及声明块之间使用一空行分隔，子组件块之间三空行分隔；
  如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动；

良好的注释是非常重要的。请留出时间来描述组件（component）的工作方式、局限性和构建它们的方法。不要让你的团队其它成员 来猜测一段不通用或不明显的代码的目的。

## Class 和 ID

- 使用语义化、通用的命名方式；
- 使用连字符 - 作为 ID、Class 名称界定符，不要驼峰命名法和下划线；
- 避免选择器嵌套层级过多，尽量少于 3 级；
- 避免选择器和 Class、ID 叠加使用；

出于性能考量，在没有必要的情况下避免元素选择器叠加 Class、ID 使用。

元素选择器和 ID、Class 混合使用也违反关注分离原则。如果 HTML 标签修改了，就要再去修改 CSS 代码，不利于后期维护。

## 声明顺序

相关属性应为一组，推荐的样式编写顺序

- Positioning
- Box model
- Typographic
- Visual

由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型决定了组件的尺寸和位置，因此排在第二位。

其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。

## 引号使用

url() 、属性选择符、属性值使用双引号。

## 媒体查询（Media query）的位置

将媒体查询放在尽可能相关规则的附近。不要将他们打包放在一个单一样式文件中或者放在文档底部。如果你把他们分开了，将来只会被大家遗忘。

## 不要使用 @import

与 `<link>` 相比，@import 要慢很多，不光增加额外的请求数，还会导致不可预料的问题。

替代办法：

- 使用多个元素；
- 通过 Sass 或 Less 类似的 CSS 预处理器将多个 CSS 文件编译为一个文件；
- 其他 CSS 文件合并工具；

## 链接的样式顺序：

a:link -> a:visited -> a:hover -> a:active（LoVeHAte）

选择字体

在 Web 上应用字体，是一门技术，同时也是一门艺术. 由于计算机历史发展的原因，西文有大量优秀的字体可供选择，可对于中文来说就是一项挑战. 主流操作系统提供的本地中文字体极少，另一方面中文字体组成的特殊性，其体积过于庞大，无法良好地使用 webfont. 所以编写健壮的 font-family 是一件需要深思熟虑的事情.

以下列出各种平台下合适的中西文字体：

桌面端 Mac, Windows, Linux 上适合网页显示的优秀中文字体
![1.jpeg](http://www.s-one.cn/data/User/admin/home/%E5%9B%BE%E7%89%87/1.jpeg)
移动端 iOS, Android 上适合网页显示的优秀中文字体
![2.jpeg](http://www.s-one.cn/data/User/admin/home/%E5%9B%BE%E7%89%87/2.jpeg)
主流操作系统上适合网页显示的优秀西文字体
![3.jpeg](http://www.s-one.cn/data/User/admin/home/%E5%9B%BE%E7%89%87/3.jpeg)

抛开宋/明体长时间作为系统默认字体，所产生的审美疲劳，宋/明体相比黑体是更合适作为内文字体. 大多的宋/明体针对内文设计，横细直粗，造型方正，笔画在小字号的情况下，不会糊在一起，给人一种素雅的感觉. 而黑体笔画粗壮有力，引人注目，更适合作为标题使用.

但大部分人已经习惯在网页上阅读黑体，以及宋/明体在字重过大的情况下，显示效果还是不太理想. 所以内文默认提供黑体，可选择性的切换宋/明体.

## 对齐

汉字的方块性质构成了汉字独有的艺术美感，使其具有工整的特点，从而显现出中文排版的重要原则：所有元素都是正方体. 但从二十世纪开始使用标点后，以及中西文混排的情况越来越多，为了保证「禁则处理」和「齐头尾」实现，可能需要在不同条件下进行适当的断词处理.

「禁則」是来自日语的排版术语，主要指的就是禁止一些标点等字符出现在行首或行尾的规则，大致相当于汉语常说的「避头尾」.

可以设置以下属性实现「齐头尾」，其中 inter-ideographic 意思是「通过调整单词和字符之间的留白来实现两端对齐」.

```javascript
body {
text-align: justify;
text-justify: inter-ideographic;
}
```

但这样的「齐头尾」并不是完美的，主要由于技术遗留原因，在 Windows 和 Linux 上的 webkit 浏览器并没有实现 inter-ideographic 导致中西文混排的时候，容易出现过度拉伸字间距的情况。

![4.jpeg](http://www.s-one.cn/data/User/admin/home/%E5%9B%BE%E7%89%87/4.jpeg)
为此有一种不优雅的解决方案，在极易出现字间距拉伸的小尺寸屏幕（手机）上使用「断词处理」，避免字间距拉伸，可是这样也带来「无视避头尾规则」和「西文单词断词」的坏毛病. 这是用一种不优雅解决另一种不优雅，按需抉择吧.

可以设置以下属性进行「断词处理」

```javascript
body{
    word-break:break-all;
}
```

# CSS 性能优化

## 慎重选择高消耗的样式

高消耗属性在绘制前需要浏览器进行大量计算：

- box-shadows
- border-radius
- transparency
- transforms
- CSS filters（性能杀手）

## 避免过分重排

当发生重排的时候，浏览器需要重新计算布局位置与大小，更多详情。

常见的重排元素:

<span style="color:#ff6600;font-size:16px">width, height, padding, margin, display, border-width, position, top, left, right, bottom, font-size, float, text-align, overflow-y, font-weight, overflow, font-family, line-height, vertical-align, clear, white-space, min-height</span>

## 正确使用 Display 的属性

Display 属性会影响页面的渲染，请合理使用。

- display: inline 后不应该再使用 width、height、margin、padding 以及 float；
- display: inline-block 后不应该再使用 float；
- display: block 后不应该再使用 vertical-align；
- display: table-\* 后不应该再使用 margin 或者 float；

## 不滥用 Float

Float 在渲染时计算量比较大，尽量减少使用。

## 动画性能优化

动画的实现原理，是利用了人眼的“视觉暂留”现象，在短时间内连续播放数幅静止的画面，使肉眼因视觉残象产生错觉，而误以为画面在“动”。

动画的基本概念：

帧：在动画过程中，每一幅静止画面即为一“帧”;
帧率：即每秒钟播放的静止画面的数量，单位是 fps(Frame per second);
帧时长：即每一幅静止画面的停留时间，单位一般是 ms(毫秒);
跳帧(掉帧/丢帧)：在帧率固定的动画中，某一帧的时长远高于平均帧时长，导致其后续数帧被挤压而丢失的现象。

一般浏览器的渲染刷新频率是 60 fps，所以在网页当中，帧率如果达到 50-60 fps 的动画将会相当流畅，让人感到舒适。

如果使用基于 javaScript 的动画，尽量使用 requestAnimationFrame. 避免使用 setTimeout, setInterval.
避免通过类似 jQuery animate()-style 改变每帧的样式，使用 CSS 声明动画会得到更好的浏览器优化。
使用 translate 取代 absolute 定位就会得到更好的 fps，动画会更顺滑。

## 多利用硬件能力，如通过 3D 变形开启 GPU 加速

一般在 Chrome 中，3D 或透视变换（perspective transform）CSS 属性和对 opacity 进行 CSS 动画会创建新的图层，在硬件加速渲染通道的优化下，GPU 完成 3D 变形等操作后，将图层进行复合操作（Compesite Layers），从而避免触发浏览器大面积重绘和重排。

注：3D 变形会消耗更多的内存和功耗。

使用 translate3d 右移 500px 的动画流畅度要明显优于直接使用 left：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <style>
    .test {
      position: relative;
      left: 0;
      width: 100px;
      height: 100px;
      margin: 10px;
      border: 1px #ff6600 solid;
      -webkit-transition: ease .5s;
      -moz-transition: ease .5s;
      -ms-transition: ease .5s;
      -o-transition: ease .5s;
      transition: ease .5s;
    }
    .text-a:hover {
      -webkit-transform: translate3d(500px, 0, 0);
      -moz-transform: translate3d(500px, 0, 0);
      -ms-transform: translate3d(500px, 0, 0);
      -o-transform: translate3d(500px, 0, 0);
      transform: translate3d(500px, 0, 0);
    }
    .text-b:hover {
      left: 500px;
    }
  </style>
</head>
<body>
<div class="test text-a"></div>
<div class="test text-b"></div>
</body>
</html>
```

## 提升 CSS 选择器性能

CSS 选择器对性能的影响源于浏览器匹配选择器和文档元素时所消耗的时间，所以优化选择器的原则是应尽量避免使用消耗更多匹配时间的选择器。而在这之前我们需要了解 CSS 选择器匹配的机制， 如子选择器规则：

```javascript
#header > a {
    width:10px
}
```

我们中的大多数人都是从左到右的阅读习惯，会习惯性的设定浏览器也是从左到右的方式进行匹配规则，推测这条规则的开销并不高。

我们会假设浏览器以这样的方式工作：寻找 id 为 header 的元素，然后将样式规则应用到直系子元素中的 a 元素上。我们知道文档中只有一个 id 为 header 的元素，并且它只有几个 a 元素的子节点，所以这个 CSS 选择器应该相当高效。

事实上，却恰恰相反，CSS 选择器是从右到左进行规则匹配。了解这个机制后，例子中看似高效的选择器在实际中的匹配开销是很高的，浏览器必须遍历页面中所有的 a 元素并且确定其父元素的 id 是否为 header 。

如果把例子的子选择器改为后代选择器则会开销更多，在遍历页面中所有 a 元素后还需向其上级遍历直到根节点。

```javascript
#header a {
    width:10px
}
```

理解了 CSS 选择器从右到左匹配的机制后，明白只要当前选择符的左边还有其他选择符，样式系统就会继续向左移动，直到找到和规则匹配的选择符，或者因为不匹配而退出。我们把最右边选择符称之为关键选择器。

### 1、避免使用通用选择器

浏览器匹配文档中所有的元素后分别向上逐级匹配 class 为 content 的元素，直到文档的根节点。因此其匹配开销是非常大的，所以应避免使用关键选择器是通配选择器的情况。

### 2、避免使用标签或 class 选择器限制 id 选择器

### 3、避免使用标签限制 class 选择器

### 4、避免使用多层标签选择器。使用 class 选择器替换，减少 css 查找

### 5、避免使用子选择器

### 6、使用继承
