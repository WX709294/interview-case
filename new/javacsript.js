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