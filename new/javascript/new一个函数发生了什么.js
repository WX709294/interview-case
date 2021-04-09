// new的实现
// 1: 获取构造函数
// 2：创建一个新对象；
// 3：将函数的作用域赋给新对象（这里实际上就是生产了一个新的上下文）
// 4：执行函数中的代码（为新对象添加属性、方法）
// 5：返回值，无返回值或者返回一个非对象值时，则将创建的新对象返回，否则会将返回值作为新对象返回。
  //  （也就是说一定会返回一个对象回来，这一步可以从下面的代码得结论)
function MyNew() {
  let Constructor = Array.prototype.shift.call(arguments); // 1：取出构造函数

  let obj = {} // 2：执行会创建一个新对象

  obj.__proto__ = Constructor.prototype // 3：该对象的原型等于构造函数prototype

  var result = Constructor.apply(obj, arguments) // 4： 执行函数中的代码

  return typeof result === 'object' ? result : obj // 5： 返回的值必须为对象
}
