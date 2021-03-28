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