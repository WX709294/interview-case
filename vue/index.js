
// 公共数据可以放到vuex中统一管理，各组件分别获取

// key的主要作用是高效更新虚拟dom

// 虚拟dom
  // 不用直接操作dom，只操作数据便可直接渲染页面
  //如果节点类型相同，则比较数据，更新数据     节点不用，直接干掉节点以及所有子节点，插入新节点
// 如何解决props层级过深的问题
  // 使用vuex
    // v-clock 解决加载闪烁花括号问题

// vue-router hash history
  // hash带# 通过锚点更新页面url，不会触发页面重新加载    history 正常路径

//  vuex的核心概念
  // state => 基本数据 
  // getters => 从基本数据派生的数据 
  // mutations => 修改数据，同步 
  // actions => 修改数据，异步 
  // modules => 模块化Vuex


  // Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。  nextTick
  // 在下一次DOM更新循环结束之后执行延迟回调  nextTick

  // v-html v-show v-bind v-on v-model
  // v-if v-else v-text（主要是更新textContent）

  // v-show display: none/block，高初始渲染开销， 频繁切换可使用
  // v-if 是否渲染dom

  // 父组件props传值   子组件$emit传值

  // watch 中 deep表示深层遍历，监听对象所有属性变换

  // this.$set(this.obj, b, 'obj.b')  $set手动将数据处理为响应式

  // delete 和Vue.delete区别  delete将删除元素变为empty/undefined，其他元素键值还是不变   Vue.delete 直接删除数据，改变键值

  //computed和watch的区别
    // computed 支持缓存，只有依赖数据改变，才会重新计算， 不支持异步
    // watch支持异步， 当一个属性发生变换时，需执行对应操作；一对多

//生命周期
    //beforeCreate 

//vue双向绑定原理
    //采用数据劫持结合发布者-订阅者模式，通过Object.defineProperty()来劫持各个属性的setter、getter,在数据变动时发布消息给订阅者。触发监听回调

// vue的响应式原理从object.defineProperty变为Proxy有什么好处
    // object.defineProprety 只能劫持对象属性，需对每个对象的每个属性进行遍历   proxy劫持整个对象，并返回一个新对象，不仅可以代理对象，也可以代理数组，还可代理动态新增的属性

// vue组件data为什么必须是函数
    // 组件可复用，js中对象存在引用关系，如果组件data是对象，那么子组件data值会相互污染，产生副作用

//网页从输入网址到渲染完成那些过程
    // 

// 虚拟dom渲染
  // function render(vdom) {
  //     if (typeof vdom === 'string' || typeof vdom === 'number') {
  //         return document.createTextNode(vdom)
  //      }
  //      const { tag, props, children } = vdom
  // }


