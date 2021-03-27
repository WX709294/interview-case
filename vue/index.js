
// 什么是Vuex？  state getters mutation auctions modules
    // 公共数据可以放到vuex中统一管理，各组件分别获取
    // vuex是专门为Vue.js应用程序开发的状态管理插件，采用集中式存储管理应用的所有组件状态，更改唯一方法是提交mutation

    //vuex解决了什么什么问题
        // 多个组件依赖同一状态，对多层嵌套组件传参会很繁琐
        // 来自不同组件行为需要变更同一状态
        
    //  vuex的核心概念
    //   state => 基本数据 
    //   getters => 从基本数据派生的数据 
    //   mutations => 修改数据，同步 
    //   actions => 修改数据，异步 
    //   modules => 模块化Vuex


    
// key的主要作用是高效更新虚拟dom

// 虚拟dom
  // 不用直接操作dom，只操作数据便可直接渲染页面
  //如果节点类型相同，则比较数据，更新数据     节点不用，直接干掉节点以及所有子节点，插入新节点
// 如何解决props层级过深的问题
  // 使用vuex
    // v-clock 解决加载闪烁花括号问题

// vue-router hash history
  // hash带# 通过锚点更新页面url，不会触发页面重新加载    history 正常路径

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
    // 如果data是一个对象，则所有的实例将共享同一份data数据对象，无论在哪个组件修改data，都会影响到所有的组件实例
    // 如果data是函数，每次创建一个新实例后，调用data函数，从而返回初始数据的一个全新副本数据对象

//网页从输入网址到渲染完成那些过程
    // 

// 虚拟dom渲染
  // function render(vdom) {
  //     if (typeof vdom === 'string' || typeof vdom === 'number') {
  //         return document.createTextNode(vdom)
  //      }
  //      const { tag, props, children } = vdom
  // }

//  Vue 生命周期
    // beforeCreate 组建实例创建之前，组建属性生效前  -------data、methods、computed以及watch中的数据还未开始初始化
    // created 组建实例已完全创建，属性也绑定， 但真实dom还未生成，$el还不可用   ----data和methods数据已经初始化好了
    // beforeMount 在挂载开始之前被调用，相关render函数首次被调用，   ------模板已在内存中编译好了，但是尚未挂载到页面
    // mounted el被新创建的vm.$el代替， 被挂载到实例上之后调用该钩子  ------将内存编译好的模板，真实替换到浏览器中
    // beforeUpdate 组建数据更新之前调用，发生在虚拟dom打补丁之前
    // update 组建数据更新之后
    // activited 组建被激活时使用 keep-alive专用
    // deadctivated 组建销毁时使用 keep-alive专用
    // beforeDestory  组建销毁前
    // destoryed  组建销毁后

// Vue 组建如何进行通信
    // props/$emit+v-on
    // EventBus 进行信息发布与订阅
    // vuex 全局数据管理库， vuex管理全局数据流
    // $attr/$listeners
// computed和watch的区别
//   computed  
//     computed 计算属性，更多用于计算值的场景， 适用比较消耗性能的计算场景
//     computed 具有缓存性， computed值在getter执行后会缓存，只有在他依赖属性改变之后，下一次获取computed的值时才会重新调用对应getter来计算
//   watch
//     更多的是观察作用，类似某些数据的监听回调，用于观察props，$emit或者本组建的值，当数据变化时来执行回调进行后续操作
//     无缓存，页面刷新值不会也会执行
//     ⼩结: 
//     1. 当我们要进⾏数值计算,⽽且依赖于其他数据，那么把这个数据设计为computed 
//     2. 如果你需要在某个数据变化时做⼀些事情，使⽤watch来观察这个数据变化

//Vue 如何实现双向绑定
    //     所谓发布订阅模式就是，定义了对象间的一种一对多的关系，
    // 让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，
    // 所有依赖于它的对象都将得到通知。
    //     所谓数据劫持，就是利用JavaScript的访问器属性，即Object.defineProperty()方法，
    // 当对对象的属性进行赋值时，Object.defineProperty就可以通过set方法劫持到数据的变化，
    // 然后通知发布者(主题对象)去通知所有观察者，观察者收到通知后，就会对视图进行更新。
//   利用object.defineProperty劫持对象的访问器，在属性是发生变换时获取变化，然后根据变换进行后续响应，在vue3.0中适用Proxy代理对象进行类似操作
//      const data = {name: ''}  //要被劫持的对象
//      function sayHi(name) {
//         if (name == 'xxx') {
//            console.log('hh')
//          } else {
//            console.log('戏我演过很多,可游戏我只玩贪玩懒⽉')
//          }
//      }
//       // 遍历对象,对其属性值进⾏劫持
//     Object.keys(data).forEach((key) => {
//       Object.defineProperties(data, key, {
//         enumerable: true,
//         configurable: true,
//         get: function() {
//           console.log('get')
//         },
//         set: function(newValue) {
//           // 当属性值发⽣变化时我们可以进⾏额外操作 
//           console.log(` ⼤ 家 好 , 我 系 ${newVal}`); 
//           sayHi(newVal);
//         }
//       })
//     })
//     data.name = '渣渣辉'; //⼤家好,我系渣渣辉 //戏我演过很多,可游戏我只玩贪玩懒⽉

// Proxy和Object.defineProperty对比
    // Proxy优势
        //  Proxy可直接监听对象而非属性
        //  Proxy可直接监听数组变换
        //  Proxy返回的是一个新对象，我们可只操作新对象而达到目的，而object.defineProperty只能遍历对象属性直接修改
        // Proxy有多达13种拦截⽅法,不限于apply、ownKeys、deleteProperty、has等等是 Object.defineProperty 不具备的
    // Object.defineProperty优势
        // 兼容性好，支持IE9

// Vue中的key到底有什么⽤？
    // key是vue中vnode的唯一id，通过这个key，我们的diff操作更准确、更快速，diff算法过程中会进行新旧节点首位交叉对比，当无法匹配的时候会用新节点的key与旧节点对比，然后超出差异
    // 准确: 如果不加 key ,那么vue会选择复⽤节点(Vue的就地更新策略),导致之前节点的状态被保留下来,会产⽣⼀系列 的bug.
    // 快速: key的唯⼀性可以被Map数据结构充分利⽤,相⽐于遍历查找的时间复杂度O(n),Map的时间复杂度仅仅为O(1).


    // react是pull方式检测
    // vue是pull+push检测


// SPA单页面理解，优缺点
    // 优点：
        // 用户体验好，快，内容改变不需依赖整个页面，避免不必要跳转和重复渲染
        // SPA相对服务器压力较小
        // 前后端职责分离，架构清晰
    // 缺点：
        //  首屏初始加载慢，不利于seo

// 如何提高首屏渲染
    //首屏内容可做静态缓存 图片尺寸大小控制适当  
    // 利用好script标签的async和defer  功能独立且不要求立马执行的js文件，加入async属性，如果是优先级低切没有依赖的js，可加入defer 
    // 图片懒加载 用字体图标代替小图片
    // 页面添加骨架屏，进行占位
    // 前端做一些接口缓存，

// // vue虚拟dom理解
    // dom渲染（真实dom构造）
        // 构建dom树（html分析器），生成样式表（css分析器），构建render树，确定节点坐标，绘制页面
    // 虚拟dom
        // 虚拟dom主要是为了解决浏览器性能而设计
        
    Element.prototype.render = function() {
        var el = document.createElement(this.targetName);
        var props = this.props
        // 设置节点dom属性
        for (var propName of props) {
            var propValue = props[propName]
            el.setAttribute(propName, propValue)
        }

        var children = this.children || []
        children.forEach((child) => {
            var childEl = (child instanceof Element) ? child.render() : document.createTextNode(child)
            el.appendChild(childEl)
        })
        return el
    }

//  dom diff 对比
    function diff(oldTree, newTree) {
        var index = 0; //当前节点标志
        var patches = {} //记录每个节点差异对象
        dfsWalk(oldTree, newTree, index, patches)
    }

    function dfsWalk(oldNode, newNode, index, patches) {
        var currentPath = [];
        if (typeof (oldNode) === 'string' && typeof (newNode) === 'string') {
            //文本内容改变
            if (newNode !== oldNode) {
                currentPath.push({
                    type: patch.text,
                    content: newNode
                })
            }
        } else if (newNode != null && oldNode.tageName === newNode.targetName && oldNode.key === newNode.key) {
            //节点相同，比较属性
            var propsPatches = diffProps(oldNode, newNode)
            if (propsPatches) {
                currentPath.push({
                    type: patch.PROPS,
                    props: propsPatches
                })
            }
            // 比较子节点,如果子节点有ignore属性，则不需要比较
            if (!isIgnoreChildren(newValue)) {
                diffChildren(
                    oldNode.children,
                    newNode.children,
                    index,
                    patches,
                    currentPath
                )
            }
        } else if (newNode !== null) {
            // 新节点和旧节点不同， 使用replace
            patches[index] = currentPath
        }
    }