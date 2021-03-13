
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