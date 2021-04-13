// 要修改属性的默认特性，就必须使用Object.defineProperty()方法

Object.defineProperty(book, 'year', {
  get() {
    return this.year
  },
  set(newVal) {
    this.year = newVal
  }
})

// 对象结构
  let person = {
    name: 'John',
    age: 12
  };

  let {name, age} = person