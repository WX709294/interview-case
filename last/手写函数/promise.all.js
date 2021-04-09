Promise.prototype.all = function(promises) {
  let result = []
  let promiseCount = 0
  let promiseLen = promises.lenght
  return new Promise(function(resolve, reject) {
    for(let val of promises) {
      Promise.resolve(val).then(function(res){
        promiseCount++
        result[i] = res
        if (promiseCount == promiseLen) {
          return resolve(results)
        }
      }, function(err) {
        return reject(err)
      })
    }
  })
}

function  PromiseAll(promiseArrs) {
  return new Promise((resolve, reject) => { //返回一个新的Promise
    let arr = []; //定义一个空数组存放结果
    let i = 0;
    function handleData(index, data) { //处理数据函数
        arr[index] = data;
        i++;
        if (i === promiseArrs.length) { //当i等于传递的数组的长度时 
            resolve(arr); //执行resolve,并将结果放入
        }
    }
    for (let i = 0; i < promiseArrs.length; i++) { //循环遍历数组
        promiseArrs[i].then((data) => {
            handleData(i, data); //将结果和索引传入handleData函数
        }, reject)
    }
 })
}

function PromiseAll(promiseArrs) {
  if (!Array.isArray(promiseArrs)) {
    throw new Error('xxxx')
  }

  let count = 0;
  let resultArr = [];
  return new Promise((resolve, reject) => {
    for (let val of promiseArrs) {
      Promise.resolve(val).then(res => {
        resultArr[count++] = res
        if (count === promiseArrs.length) {
          resolve(resultArr)
        }
      }).catch(e => {
        reject(e)
      })
    }
  })
}