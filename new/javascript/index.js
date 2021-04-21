// 变量类型
    // 1.JS 的数据类型分类
      // 在参数传递方式上，有所不同：
        // 函数的参数如果是简单类型，会将一个值类型的数值副本传到函数内部，函数内部不影响函数外部传递的参数变量
        // 如果是一个参数是引用类型，会将引用类型的地址值复制给传入函数的参数，函数内部修改会影响传递参数的引用对象。
    // 深拷贝
      //定义检测数据类型的功能函数
          function checkedType(target) {
            return Object.prototype.toString.call(target).slice(8, -1)
          }
          //实现深度克隆---对象/数组
          function clone(target) {
            //判断拷贝的数据类型
            //初始化变量result 成为最终克隆的数据
            let result,
              targetType = checkedType(target)
            if (targetType === 'Object') {
              result = {}
            } else if (targetType === 'Array') {
              result = []
            } else {
              return target
            }
            //遍历目标数据
            for (let i in target) {
              //获取遍历数据结构的每一项值。
              let value = target[i]
              //判断目标结构里的每一值是否存在对象/数组
              if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
                //对象/数组里嵌套了对象/数组
                //继续遍历获取到value值
                result[i] = clone(value)
              } else {
                //获取到value值是基本的数据类型或者是函数。
                result[i] = value
              }
            }
            return result
          }
      