
// const

    // const 无法修改变量原始值， const表示对常量的引用，可修改引用对象的属性值，但不能修改引用本身

//  let const 会创建块级作用域，不会像var声明变量会被提升


// 箭头函数是匿名的  --- 什么时候不能使用箭头函数-->使用函数做构造函数-->想函数被提升时-->使用命名函数

// 使用箭头函数应注意什么？
    // 使用箭头函数，this不会指向window,而是父级（指向可变）
    // 不能够使用arguments兑现
    // 不能够用作构造函数，这就是说不能够使用new命令，否则会抛出一个错误

// 介绍下set和map的区别
    // 应用场景set用于数组重组，Map用于数据存储set
        // 成员不能重复 
        // 只有键值没有键名，类似数组
        // 可以遍历，方法有add,delete,has
    // Map
        // 本质上是键值对的集合，类似集合
        // 可以遍历，可以跟各种数据格式转换

// promise
    // 三个状态 pending、rejected、fulfulled 同一时间只能有一种状态，且状态一旦改变就不能再变

    // 对象状态不受外界影响
    // 一旦状态改变，就不会再变，任何时候都可以得到这个结果


// async/await 
    // async 返回promise对象，使用then添加回调
    // await 后面的promise有可能会返回rejected，所以await最好放在try...catch中
    // await 只能出现在async函数里， 普通函数里会报错

// promise的构造函数是异步还是同步，then呢
    // promise构造函数是同步执行，then方法是异步执行


// promise中reject和catch有什么区别
    // reject是用来抛出异常、 catch是用来捕获异常
    // reject是promise是方法，catch是promise实例的方法


// 如何判断一个数组是否为Array
    //  Object.prototype.toString.call(obj) == ''[object Array]
    //  obj.__proto__ == Array.prototype

// 什么是模块化
    // 模块化用来解决全局变量污染、变量冲突、代码冗余、依赖关系难以维护等问题
    // AMD 依賴前置， CMD依賴就近