// Get请求与post请求的区别
    //  数据传输方式： Get请求通过url传输数据，而POST的数据通过请求体传输
    //  安全性： POST的数据因为在请求主体内，所以有⼀定的安全性保证，⽽GET的数据在URL中，通过历史记 录，缓存很容易查到数据信息。
    //  数据类型：GET只允许 ASCII 字符，⽽POST⽆限制
    //  GET⽆害： 刷新、后退等浏览器操作GET请求是⽆害的，POST可能重复提交表单

// http请求报文是什么样的
    // 请求报文有4部分组成   -- 请求行、请求头、空行、请求体


// http状态码有哪些
    // 2xx 成功
        // 200 客户端发来请求在服务端已正确处理
    // 3xx 重定向
        // 301 永久重定向，资源已被分配新URL
        // 302 暂时重定向，临时分配新URL
    // 4xx 客户端错误
        // 400 请求报文存在语法错误
        // 401 发送的请求需要通过http认证
        // 403 请求资源访问被服务器拒绝
        // 404 在服务器上没找到请求资源
        // 408 客户端请求超时
        // 409 请求资源可能存在冲突
    // 5xx 服务器错误
        // 500 服务器端在执行请求时错误
