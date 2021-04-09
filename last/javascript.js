const obj = {
  name: 'jsCoder',
  skill: ['es6', 'react', 'angular'],
  say: function () {
    // for (var i = 0, len = this.skill.length; i < len; i++) {
    for (let i = 0, len = this.skill.length; i < len; i++) {
      // setTimeout(function () {
      setTimeout(() => {
        // console.log('No.' + i + this.name)
        console.log('No.' + (i + 1) + this.name)
        console.log(this.skill[i])
        console.log('----------------')
      }, 0)
      // console.log(i)
      console.log(i + 1)
    }
  }
}

obj.say()


const obj = {
  name:"jsCoder",
  skill:["es6","react","angular"],
  say:function(){
    for(var i = 0,len = this.skill.length;i<len;i++){
      setTimeout(function(){
        console.log('No.' + i + this.name);
        console.log(this.skill[i]);
        console.log('----------------');
      },0);
      console.log(i);
    }
  }
}
obj.say();


const obj = {
  name:"jsCoder",
  skill:["es6","react","angular"],
  say:function(){
      // 1. 利用let的块级作用域封存变量
      for(let i = 0,len = this.skill.length;i<len;i++){
          setTimeout(()=>{ // 2. 利用剪头函数固定this指向书写时的外部函数作用域
              console.log('No.' + (i + 1) + this.name);
              console.log(this.skill[i]);
              console.log('----------------');
          },0);
          console.log(i);
      }
  }
}
// 3. 利用bind绑定函数的context
obj.say.bind(obj)();