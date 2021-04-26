// vue.$set在什么情况下使用   解决对象属性不能响应问题

// computed和watch区别

// es6模块化特点

// vue双向绑定原理 （数据劫持和发布订阅模式。）
// Object.defineProperty实现数据劫持，如果属性有变换，就告诉订阅者watcher看是否需要更新

// 数据变换更新视图，视图变换更新数据

// 当创建vue实例的时候，vue会遍历data选项的属性， 利用Object.defineProperty为属性添加getter和setter,对数据的读取进行劫持（getter用来收集依赖， setter用来派发更新），
// 并且在内部追踪依赖，在属性被访问和修改是通知变化

// mixins使用

// vue-router  name跳转和path跳转区别

// vue 生命周期

// vue 父子组件传值

//组建中data为什么是一个函数

// 组件中 data 为什么是一个函数？

// vue中key的作用

// vue虚拟dom理解

// css3新属性

//javascript如何实现异步

// let const var 区别

// flex布局的使用

// Vuex
// 更改状态唯一的方法是提交mutation
// 解决多个组件依赖同一状态时，对于多层嵌套组件传参比较麻烦
// 来自不同组件的行为需要修改同一状态
// 使用mapState辅助函数，批量使用Vuex的state状态
// 使用getter属性，相当于vue里面的computed Vuex要从state中派生一些状态出来


//定位 基于什么定位

// promise.all
// 节流函数
// 发布订阅


// vue diff 算法
// vue 双向绑定原理

// 什么是闭包
    // 闭包就是可以在一个内层函数里访问其外层函数的作用域，每当创建一个函数，闭包就会在函数创建的同时被创建出来

// 原型与原型链 
    // （https://segmentfault.com/a/1190000021232132）
    // __proto__通常称为隐式原型，prototype通常称为显式原型，那我们可以说一个对象的隐式原型指向了该对象的构造函数的显式原型
        // p1.__proto__ === Parent.prototype; // true
    // 我们之前也说过__proto__属性是对象（包括函数）独有的，那么Parent.prototype也是对象，那它有隐式原型么？又指向谁？
        // Parent.prototype.__proto__ === Object.prototype; //true  
        // 由此我们可以验证一个结论，万物继承自Object.prototype
    // 当然如果找到Object.prototype上也没找到，就在Object.prototype.__proto__中寻找，但是Object.prototype.__proto__ === null所以就返回undefined。这就是为什么当访问对象中一个不存在的属性时，返回undefined了。
    