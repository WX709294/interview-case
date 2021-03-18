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