// 深浅克隆
  //  浅克隆
      function shallowCopy(obj) {
        let cloneObj = {}
        for (let i in obj) {
          cloneObj[i] = obj[i]
        }
        return cloneObj
      }
  //  深克隆
      function deepCopy(obj) {
        if (typeof obj === 'object') {
          var result = obj.constructor === Array ? [] : {}
          for (var i in obj) {
            result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i]
          }
          return result
        } else {
          var result = obj;
        }
        
        return result;
      }

// apply，call,bind 
      //apply
      function apply(context, argsArr) {
        context = typeof context === 'object' ? context : window
        var key = Symbnol('fn')
        context[key] = this
        let result = context[key](...argsArr)
        delete context[key]
        return result
      }
      
      //call
      function call(context, ...args) {
        context = typeof context === 'object' ? context : window
        var key = Symbnol('fn')
        context[key] = this
        let result = context[key](...args)
        delete context[key]
        return result
      }
      
      //bind
      function bind(context, ...args) {
        context = typeof context === 'object' ? context : window
        var key = Symbnol('fn')
        context[key] = this

        return (..._args) => {
          args = args.concat(..._args)
          let result = context[key](...args)
          delete context[key]
          return result
        }
      }

// 事件委托
      // 通俗讲是将一个元素响应事件（click、keydown...）的函数委托到另一个元素
        //  捕获阶段： 在事件冒泡模型中，捕获阶段不会响应任何事件
        //  目标阶段：指事件响应到触发事件的最底层元素上
        //  冒泡阶段: 事件触发响应会从最底层一层一层向外到最外层，事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层
      
      // 委托优点 （事件委托的实现依靠事件冒泡）
        // 减少内存消耗  只需要将同类元素的事件委托给父级或者更外级的元素，不需要给所有元素都绑定事件，减少内存空间占用，提升性能
        // 动态新增的元素无需重新绑定事件

