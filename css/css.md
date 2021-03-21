### 如何居中div
- 水平居中：给 div 设置一个宽度，然后添加 margin:0 auto 属性

    ```css
      div {
        width: 200px;
        margin: 0 auto;
      }
    ```
- 水平居中，利用 text-align:center 实现
    ```css
    .container {
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      font-size: 0;
    }
    .box {
      display: inline-block;
      width: 500px;
      height: 400px;
      background-color: pink;
    }
    ```
- 让绝对定位的 div 居中
    ```css
      div {
        position: absolute;
        width: 300px;
        height: 300px;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: pink; /*方便看效果*/
      }
    ```
- 水平垂直居中(1)
    ```css
    /*确定容器的宽高宽500高300的层设置层的外边距*/
    div {
      position: absolute;/*绝对定位*/
      width: 500px;
      height: 300px;
      top: 50%;
      left: 50%;
      margin: -150px 0 0 -250px;
      /*外边距为自身宽高的一半*/
      background-color: pink;/*方便看效果*/
    }
    ```
- 水平垂直居中(2)
    ```css
    /*未知容器的宽高，利用`transform`属性*/
    div {
      position: absolute; /*相对定位或绝对定位均可*/
      width: 500px;
      height: 300px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: pink; /*方便看效果*/
    }
    ```
- 水平垂直居中(3)
    ```css
    /*利用flex布局实际使用时应考虑兼容性*/
    .container {
      display: flex;
      align-items: center; /*垂直居中*/
      justify-content: center; /*水平居中*/
    }
    .container div {
      width: 100px;
      height: 100px;
      background-color: pink; /*方便看效果*/
    }
    ```
- 水平垂直居中(4)
    ```css
      /*利用text-align:center和vertical-align:middle属性*/
      .container {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        font-size: 0;
        white-space: nowrap;  //是用来设置如何处理元素中的 空白。
        overflow: auto;
      }
      .container::after {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      .box {
        display: inline-block;
        width: 500px;
        height: 400px;
        background-color: pink;
        white-space: normal;
        vertical-align: middle;
      }
    ```
一般常见的几种居中的方法有：
对于宽高固定的元素
（1）我们可以利用margin:0 auto来实现元素的水平居中。
（2）利用绝对定位，设置四个方向的值都为0，并将margin设置为auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。
（3）利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过margin负值来调整元素的中心点到页面的中心。
（4）利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过translate来调整元素的中心点到页面的中心。
（5）使用flex布局，通过align-items:center和justify-content:center设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。
对于宽高不定的元素，上面的后面两种方法，可以实现元素的垂直和水平的居中。

### position 的值 relative 和 absolute 定位原点是？
- absolute
       生成绝对定位的元素，相对于值不为static的第一个父元素的padding box进行定位，也可以理解为离自己最近的设置为absolute或者relative的父元素的padding box的左上角为原点的。
- fixed（老IE不支持）
    生成绝对定位的元素，相对于浏览器窗口进行定位。
- relative
  生成相对定位的元素，相对于元素本身位置进行定位的。
- static
    默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。
- inherit
    规定从父元素继承position属性的值。

### 用纯 CSS 创建一个三角形的原理是什么？
  ```css
    采用的是相邻边框连接处的均分原理。将元素的宽高设为0，只设置border，把任意三条边隐藏掉（颜色设为transparent），剩下的就是一个三角形。
    #demo {
      width: 0;
      height: 0;
      border-width: 20px;
      border-style: solid;
      border-color: transparent transparent red transparent;
    }
  ```
### 一个满屏品字布局如何设计?
  简单的方式：
  上面的div宽100%，
  下面的两个div分别宽50%，然后用float或者inline使其不换行即可
### CSS 多列等高如何实现？
（1）利用table-cell所有单元格高度都相等的特性，来实现多列等高。
（2）利用flex布局中项目align-items属性默认为stretch，如果项目未设置高度或设为auto，将占满整个容器的高度的特性，来实现多列等高。
### width:auto 和 width:100%的区别
  width:100%会使元素box的宽度等于父元素的content box的宽度。
  width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。
### 对 BFC 规范（块级格式化上下文：block formatting context）的理解？
块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。
通俗来讲
• BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。
• 如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。
- 创建BFC
    （1）根元素或包含根元素的元素
    （2）浮动元素float＝left|right或inherit（≠none）
    （3）绝对定位元素position＝absolute或fixed
    （4）display＝inline-block|flex|inline-flex|table-cell或table-caption
    （5）overflow＝hidden|auto或scroll(≠visible)
BFC指的是块级格式化上下文，一个元素形成了BFC之后，那么它内部元素产生的布局不会影响到外部元素，外部元素的布局也不会影响到BFC中的内部元素。一个BFC就像是一个隔离区域，和其他区域互不影响。
一般来说根元素是一个BFC区域，浮动和绝对定位的元素也会形成BFC，display属性的值为inline-block、flex这些
属性时也会创建BFC。还有就是元素的overflow的值不为visible时都会创建BFC。

### 如何修改 chrome 记住密码后自动填充表单的黄色背景？
chrome表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的input表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：

  ```css
    {
      background-color: rgb(250,255,189)!important;
      background-image: none!important;
      color: rgb(0,0,0)!important;
    }
  ```
  对chrome默认定义的background-color，background-image，color使用important是不能提高其优先级的，但是
  其他属性可使用。
  使用足够大的纯色内阴影来覆盖input输入框的黄色背景，处理如下
  ```css
    input:-webkit-autofill,textarea:-webkit-autofill,select:-webkit-autofill{
      -webkit-box-shadow:000px 1000px white inset;
      border:1px solid #CCC !important;
    }
  ```

### 怎么让 Chrome 支持小于 12px 的文字？
  在谷歌下css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px。
  解决办法：
  （1）可以使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size-adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。
  （2）还可以使用css3的transform缩放属性-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/inline-block/...；
  （3）使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。

### 如何实现单行／多行文本溢出的省略（...）
  ```css
  /*单行文本溢出*/
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /*多行文本溢出*/
  p {
    position: relative;
    line-height: 1.5em;
    /*高度为需要显示的行数*行高，比如这里我们显示两行，则为3*/
    height: 3em;
    overflow: hidden;
  }
  p:after {
    content: '...';
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fff;
  }
  ```

### css 两栏布局的实现？

```css
  /*两栏布局一般指的是页面中一共两栏，左边固定，右边自适应的布局，一共有四种实现的方式。*/
  /*以左边宽度固定为200px为例*/
  /*（1）利用浮动，将左边元素宽度设置为200px，并且设置向左浮动。将右边元素的margin-left设置为200px，宽度设置为auto（默认为auto，撑满整个父元素）。*/
  .outer {
    height: 100px;
  }
  .left {
    float: left;
    height: 100px;
    width: 200px;
    background: tomato;
  }

  .right {
    margin-left: 200px;
    width: auto;
    height: 100px;
    background: gold;
  }
/*（2）第二种是利用flex布局，将左边元素的放大和缩小比例设置为0，基础大小设置为200px。将右边的元素的放大比例设置为1，缩小比例设置为1，基础大小设置为auto。*/
  .outer {
    display: flex;
    height: 100px;
  }
  .left {
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 200px;
    background: tomato;
  }
  .right {
    flex: auto;
    background: gold;
  }
  /*（3）第三种是利用绝对定位布局的方式，将父级元素设置相对定位。左边元素设置为absolute定位，并且宽度设置为200px。将右边元素的margin-left的值设置为200px。*/
  .outer {
    position: relative;
    height: 100px;
  }
  .left {
    position: absolute;
    width: 200px;
    height: 100px;
    background: tomato;
  }
  .right {
    margin-left: 200px;
    height: 100px;
    background: gold;
  }
  /*（4）第四种还是利用绝对定位的方式，将父级元素设置为相对定位。左边元素宽度设置为200px，右边元素设置为绝对定位，左边定位为200px，其余方向定位为0。*/
  .outer {
    position: relative;
    height: 100px;
  }
  .left {
    width: 200px;
    height: 100px;
    background: tomato;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 200px;
    background: gold;
  }

```

<!-- em/px/rem的区别 -->
  px: 绝对单位，页面按精确像素展示
  em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算(浏览器默认字体为16px)，整个页面内1em不是一个固定的值。
  rem： 相对单位，可理解为"root em",相对根节点html的字体大小来计算，css3新加属性