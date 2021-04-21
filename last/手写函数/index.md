call、apply、bind 实现
> call、apply、bind 本质都是改变 this(上下文) 的指向，不同点 call、apply 是直接调用函数，bind 
> 是 返回一个新的函数。call 跟 apply 就只有参数上不同。
```javascript
  Function.prototype.myCall = function (context) {
    if(!typeof this === 'function'){ return }
    // context = context ? Object(context) : window
    context = typeof context == 'object' ? context : window
    // context.fn = this // 重置上下文  this = test()   
    var key = Symbol() 
    context[key] = this
    let args = [...arguments].slice(1) // 截取参数a,b
    // let result = context.fn(...args) // 执行函数
    let result = context[key](...args) // 执行函数
    delete context.fn // 删除属性，避免污染
    return result // 返回结果
  }
```
myCall方法校验
```javascript
    // 浏览器环境下
    var a = 1, b = 2;
    var obj ={a: 10,  b: 20}
    function test(key1, key2){
      console.log(this[key1] + this[key2]) 
    }
    test('a', 'b') // 3
    test.myCall(obj, 'a', 'b') // 30
```

```javascript
  Function.prototype.myApply = function (context) {
    if(!typeof this === 'function'){ return }
    // context = context ? Object(context) : window
    context = typeof context == 'object' ? context : window
    // context.fn = this // 重置上下文  this = test()   
    var key = Symbol() 
    context[key] = this
    let args = [...arguments][1] // 截取参数a,b
    if (!args) {
      return context.fn()
    }
    // let result = context.fn(...args) // 执行函数
    let result = context[key](...args) // 执行函数
    delete context.fn // 删除属性，避免污染
    return result // 返回结果
  }
```
myApply方法校验
```javascript
    // 浏览器环境下
    var a = 1, b = 2;
    var obj ={a: 10,  b: 20}
    function test(key1, key2){
      console.log(this[key1] + this[key2]) 
    }
    test('a', 'b') // 3
    test.myApply(obj, ['a', 'b']) // 30
```


new的实现
1: 获取构造函数
2：创建一个新对象；
3：将函数的作用域赋给新对象（这里实际上就是生产了一个新的上下文）
4：执行函数中的代码（为新对象添加属性、方法）
5：返回值，无返回值或者返回一个非对象值时，则将创建的新对象返回，否则会将返回值作为新对象返回。（也就是说一定会返回一个对象回来，这一步可以从下面的代码得结论)
```javascript
  function MyNew() {
    let Constructor = Array.prototype.shift.call(arguments); // 1：取出构造函数

    let obj = {} // 2：执行会创建一个新对象

    obj.__proto__ = Constructor.prototype // 3：该对象的原型等于构造函数prototype

    var result = Constructor.apply(obj, arguments) // 4： 执行函数中的代码

    return typeof result === 'object' ? result : obj // 5： 返回的值必须为对象
  }
  ```

  <!-- 防抖函数 -->
  <!-- 一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效。-->
  ```javascript
      const debounce = (fn, delay) => {
        let timer = null;
        return (...args) => {
          clearTimerOut(timer)
          timer = setTimeout(() => {
            fn.apply(this, args)
          }, delay)
        }
      }
  ```

<!-- 节流函数 -->
<!-- 一个函数执行一次之后，只有大于设定的执行周期后才会执行第二次 -->
<!-- 
  DOM 元素的拖拽功能实现（mousemove）
  搜索联想（keyup）
  计算鼠标移动的距离（mousemove）
  Canvas 模拟画板功能（mousemove）
  射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
  监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次
-->
```javascript
  const throttle = (fn, delay = 500) => {
    let flag = true
    return (...args) => {
      if (!flag) return
      flag = false
      setTimeOut(() => {
        fn.apply(this, args)
        flag = true
      }, deplay)
    }
  }

  function throttle(fn, delay) {
  // 记录上一次函数触发的时间
  var lastTime = 0;
  return function() {
      // 记录当前函数触发的时间
      var nowTime = Date.now();
      if (nowTime - lastTime > delay) {
      // 修正this指向问题
          fn.call(this);
      // 同步时间
        lastTime = nowTime;
      }
  }
}
```
### 发布订阅模式
```javascript
class  Watcher {
    constructor(vm, expr, cb) {
        Dep.target  =  this; // 每次创建Watcher对象的时候，将创建的Watcher对象在获取值的时候添加到dep中
        this.vm  = vm;
        this.expr = expr;
        this.cb = cb;
        // 默认先存放旧值
        this.oldValue = this.get();
        Dep.target = null; // 添加Watcher对象后清空，防止每次获取数据的时候都添加Watcher对象
    }
    get() {
        let value =  CompileUtil.getVal(this.vm, this.expr);
        return value;
    }
    update() {
        let newValue =  CompileUtil.getVal(this.vm, this.expr);
        if (newValue !==  this.oldValue) {
            this.cb(newValue);
        }
    }
}
```
### 渲染js表示的dom对象 
    ```javascript
      Element.prototype.render = function() {
        var el = document.createElement(this.tagName)
        var props = this.props;
        for(var propName in props) {
          var propValue = props[propName]
          el.setAttribute(propName, propValue)
        }
        var children = this.children || [];
        children.forEach((child) => {
          var childEl = (child instanceof Element) ? child.render() : document.createTextNode(child)
          el.appendChild(childEl)
        })
        return el
      }
    ```

    ```javascript
      class EventEmiter{
        constructor() {
          this.events = {}
        }
        on(eventName, cb) {
          if (!this.events[eventName]) {
            this.events[eventName] = [cb]
          } else {
            this.events[eventName].push(cb)
          }
        },
        emit(eventName) {
          this.events[eventName] && this.events[eventName].forEach(cb => cb())
        },
        removeListener(eventName, cb) {
          if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(callback => callback != cb)
          }
        },
        once(eventName, cb) {
          let fn = () => {
            callback();
            this.removeListener(eventName, fn)
          }
          this.on(eventName, fn)
        }
      }
    ```
