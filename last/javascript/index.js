// 只有函数有作用域 if没有作用域


// object.prototype.toString.call

// 宏任务  script  setTimeout setInterval setImmediate
// 先执行微任务，再执行宏任务

// js数据类型
// js基本数据类型   undefined null string number Boolean es6(Symbnol)独一无二不可变更类型
// 引用数据类型  object function date Regex Array

// jsonp为什么可以实现跨域
// 

let str = "abcabcabcbbccccc"; 
let num = 0; 
let char = ''; 
// 使其按照⼀定的次序排列 
str = str.split('').sort().join(''); 
// "aaabbbbbcccccccc" // 定义正则表达式 
let re = /(\w)\1+/g;
str.replace(re, ($0,$1) => { 
    console.log('$0', $0, '$1', $1)
    if(num < $0.length){
        num = $0.length;
        char = $1; 
    } 
})
console.log(`字符最多的是${char}，出现了${num}次`);


// object.entries() 


// 闭包
    // mdn解释：闭包是函数和声明改函数的语法环境组合

// Es6模块与CommonJS模块有什么区别
    // CommonJS是对模块的浅拷贝，ES6 Module是对模块的引用， 即es6只存只读， 具体点就是指针指向不可变

// null与undefined的区别是什么
    // null表示空 ，代表此处不应该有值的存在，一个对象可以是null，代表是个空对象，而null本身也是对象
    // undefined 表示不存在

   // Array.isArray(value) 判断是否为数组

// this指向不是在编写时确认的，而是在运行时确认的

// 剧本数据类型传递

// localStorage
    // localStorage 生命周期永久，关闭页面或浏览器也不会丢失，除非主动删除
    // sessionStroage 只在当前会话下有效
    // localStorage和sessionStorage都保存在客户端，不与服务器进行通信

