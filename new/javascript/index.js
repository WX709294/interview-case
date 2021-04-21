// arguments.callee就是一个指向正在执行的函数的指针 ,arguments.callee引用当前函数首选
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num*arguments.callee(num-1)
  }
}

// script  
    // async 
      // 表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
    // defer
      // 表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。

// let声明的范围是块作用域，而var声明的范围是函数作用域。
  // 与var关键字不同，使用let在全局作用域中声明的变量不会成为window对象的属性（var声明的变量则会）。

// 什么是跨域
    //  同源策略是指“域名+端口+协议”一致
    // --
    // 如果协议和端口造成的跨域问题，“前台”是无能为力的
    // cros(跨域资源共享)、nginx方向代理、node中间件代理、jsonp(get请求)
        // CORS支持所有类型的HTTP请求，是跨域HTTP请求的根本解决方案
        // JSONP只支持GET请求，JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。
        // 不管是Node中间件代理还是nginx反向代理，主要是通过同源策略对服务器不加限制。

        // 正向代理 （隐藏客户端）
        // 反响代理 
