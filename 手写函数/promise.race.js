function PromiseRace(arr) {
  if (!Array.isArray(arr)) {
    throw Error('arr must be an array')
  }

  return new Promise((resolve, reject) => {
    arr.forEach(_item => {
      Promise.resolve(_item).then(res => {
        return resolve(res)
      }, err => {
        return reject(err)
      })
    })
  })
}