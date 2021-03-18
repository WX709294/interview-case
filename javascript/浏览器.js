// 什么是浏览器同源策略
    // 同源策略限制了从同一个源加载的文档或者脚本如何与来自另一个源的资源进行交互。用于隔离潜在恶意文件的重要安全机制
    // 同源是指“协议+域名+端口”三者相同，即使两个不同的域名指向同一ip地址，也非同源

  // 浏览器大部分内容受同源策略限制，但以下三个不限制
      // img link script
  
  // 如何实现跨域
    // jsonp 
      // 使用script标签不受同源策略限制特性进行跨域操作
      // 优点： 实现简单，兼容性好   
      // 缺点:  
            // 只支持get请求(因为script标签只能get)
            // 有安全性问题，容易遭受xss攻击
            // 需要服务端配合jsonp 进行一定程度改造
    // cros 跨域资源共享
        // 使用额外http告诉浏览器让运行在另一个origin（domian）上的web应用被准许访问来自不用源服务器上的指定资源， 
        //  后端配置 res.header('Access-Control-Allow-Origin', 'http://example.com'); 
    // Nginx配置
        // 优点： 轻量级，启动快，高并发
        // 反向代理


// 前端如何实现即时通信


// 如何避免重绘或者重排
    //集中改变样式
        // 1: 通过改变class方式集中改变样式  
            // const theme = isDark ? 'dark' : 'light'  判断是否为黑色系
            // ele.setAttribute('className', theme) 根据判断来设置不同的class 
        // 2. 使⽤DocumentFragment
            //我们可通过createDocumentFragment创建一个游离于dom树之外的节点。然后在此节点上进行批量操作，然后插入dom数中，因此只触发一次重排
                // var fragment = document.createDocumentFragment()
                // for (let i = 0; i< 10; i++) {
                //   let node = document.createElement('p')
                //   node.innerHTML = i
                //   fragment.appendChild(node)
                // }
                // document.body.appendChild(fragment)
// 如何触发重排和重绘
    // 任何改变用来构建渲染树的信息都会导致一次重排或者重绘
        // 添加、删除、更新dom节点
        // 通过display： none隐藏一个节点 - 触发重排和重绘
        // 通过visibility： hidden 隐藏一个dom节点 - 只重绘，因为没有几何变换
        // 移动或者给⻚⾯中的DOM节点添加动画 
        // 添加⼀个样式表，调整样式属性 
        // ⽤户⾏为，例如调整窗⼝⼤⼩，改变字号，或者滚动。

// 浏览器主要组成部分
    // 用户界面 -- 地址栏、前进/后退按钮、书签菜单等
    // 浏览器引擎 -- 在用户界面和呈现引擎之间传送指令
    // 呈现引擎 -- 负责显示请求内容，如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内 容显示在屏幕上
    // 网络 -- 网络调用
    // 用户界面后端
    // javascrip解析器 --⽤于解析和执⾏ JavaScript 代码。
    // 数据存储

