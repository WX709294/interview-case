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