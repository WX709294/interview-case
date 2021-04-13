// 介绍flex布局，flex是什么属性的缩写
    // flex-grow flex-shrink flex-basis

// CSS实现自适应正方形、等宽高比矩形
    // 双重嵌套，外层relative,内层absolute
    // padding撑很高
    // 如果只是要相对于 body 而言的话，还可以使用 vw 和 vh
    // 伪元素设置 margin-top: 100%撑高

// visibility 和 display 的差别（还有opacity)
    // visibility 设置hidden会隐藏元素，但是其位置还存与页面文档流中，不会被删除，所以会触发；浏览器渲染引擎的重绘
    // display设置了none属性会隐藏元素，且其位置也不会被保存下来，所以会触发浏览器引起的回流和重绘
    // opacity将元素设置为透明，其位置也在文档流中， 不会被删除，所以会触发浏览器渲染引擎的重绘