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
// 变量类型
    // 1.JS 的数据类型分类
      // 在参数传递方式上，有所不同：
        // 函数的参数如果是简单类型，会将一个值类型的数值副本传到函数内部，函数内部不影响函数外部传递的参数变量
        // 如果是一个参数是引用类型，会将引用类型的地址值复制给传入函数的参数，函数内部修改会影响传递参数的引用对象。
    // 深拷贝
      //定义检测数据类型的功能函数
          function checkedType(target) {
            return Object.prototype.toString.call(target).slice(8, -1)
          }
          //实现深度克隆---对象/数组
          function clone(target) {
            //判断拷贝的数据类型
            //初始化变量result 成为最终克隆的数据
            let result,
              targetType = checkedType(target)
            if (targetType === 'Object') {
              result = {}
            } else if (targetType === 'Array') {
              result = []
            } else {
              return target
            }
            //遍历目标数据
            for (let i in target) {
              //获取遍历数据结构的每一项值。
              let value = target[i]
              //判断目标结构里的每一值是否存在对象/数组
              if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
                //对象/数组里嵌套了对象/数组
                //继续遍历获取到value值
                result[i] = clone(value)
              } else {
                //获取到value值是基本的数据类型或者是函数。
                result[i] = value
              }
            }
            return result
          }
      
