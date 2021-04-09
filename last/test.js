// 闭包就是一个函数在声明是能够记住当前作用域、父函数作用域


function quickSort(arr) {
  if (arr.length <= 1) return
  let piovtIndex = Math.floor(arr.length / 2)
  let piovtValue = arr[piovtIndex]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < piovtValue) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(piovtValue).concat(quickSort(piovtIndex))
}

function quickSort(arr, start, end) {
  let pivotIndex = start
  let pivotValue = arr[end]
  for (let i = pivotIndex; i < end; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
      proivot++
    }
  }
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]

  quickSort(arr, start, pivotIndex - 1)
  quickSort(arr, pivotIndex+1, end)
  return arr
}


function promiseAll(arr) {
  if (!Array.isArray(arr)) {
    new Error('arr is not array')
  }

  let count = 0
  let newArr = []
  return new Promise((resolve, reject) => {
    for (let val of arr) {
      Promise.resolve(val).then(res => {
        newArr[count++] = res
        if (count === arr.length) {
          resolve(newArr)
        }
      }).catch(e => {
        reject(e)
      })
    }
  })
}


// pending,fulfulled,rejected 同一时间只能存在一种状态，且状态一旦改变就不能再变

// Promise处理javascript异步
// promise.then方法之后会继续返回一个promise

// pending状态不会触发then、catch
// resolved会继续触发后续的then回调函数
// rejected会继续触发后续的catch回调函数

// 当没有返回resolve或者reject的时候，是pending

// promise对象特点

    // 对象状态不受外界影响
    // 一旦状态改变，就不会再变，任何时候都可以得到这个结果

// promise优缺点
    // 异步操作以同步操作流程表达出来，避免层层嵌套回调函数
    // 缺点: 无法取消，一旦新建就会立即执行


// async/await  以同步方式处理异步流程，同时不会阻塞主线程   async返回一个promise对象，可使用then方法添加回调，
// await后面的Promise对象有可能返回rejected，所以最好把await命令放在try..catch代码中
// await只能出现在async函数里 用在普通函数里就会报错


// es5、es6对比  箭头函数和字符串插值

// const 对常量的引用  可修改被引用对象属性值，但不能改变引用本身