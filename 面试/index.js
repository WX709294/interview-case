//手写函数
//Promise.all
function PromiseAll(arr) {
  if (!Array.isArray(arr)) {
    new Error('arr is not array');
  }

  let count = 0;
  let resultArr = [];
  return new Promise((resolve, reject) => {
    for (let val of arr) {
      Promise.resolve(val).then(res => {
        resultArr[count++] = res
        if (count == arr.length) {
          resolve(resultArr)
        }
      }).catch(e => {
        reject(e);
      })
    }
  })
}

//节流函数
function throttle(fn, delay) {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = true;
    setTimeout(() => {
      fn.apply(this, args)
      flag = false;
    }, delay)
  }
}

//es6 模块
实现模块主要使用的是export和import（基础ADM和CMD实现的规范模块化）
AMD(require.js,提前执行)  CMD(seajs，延迟执行)
每个模块都有自己的上下文，每一个模块内声明的变量都是局部变量，不会污染全局作用域
import 是只读属性（可修改类型为对象的属性，不能修改基本类型的值）
// import {a} from "./xxx.js"
// a = {}; // error
// import {a} from "./xxx.js"
// a.foo = "hello"; // a = { foo : 'hello' }
一个模块中仅有一个export default， 而export、import可以有多个
通过export方式导出，在导入时需要加{}, export default 则不需要


// vue-router
实现页面间的跳转
使用name和path跳转， name使用params传参， path使用query传参

vue-router的钩子函数有
  beforeEach(to, from, next）
    to: 要进入目标
    from: 当前正要离开路由
    next: 必须调用，负责钩子无法resolved
  
