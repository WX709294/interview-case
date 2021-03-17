<!-- 模板引擎实现 -->
  ```javascript
    let template = '我是{{name}}，年龄{{age}}，性别{{sex}}'; 
    let data = { name: '姓名', age: 18 }render(template, data); 
    // 我是姓名，年龄18，性别undefined


    function render(template, data) {
      const regex = /\{\{(\w+)\}\}/ //模板字符串匹配
      if (regex.test(template)) { //判断模板里面是否有模板字符串
          const name = regex.exec(template)[1] // 查找当前模板⾥第⼀个模板字符串的字段
          template = template.replace(regex, data[name]) //将第⼀个模板字符串渲染
          return render(template, data) //递归渲染并返回渲染后函数
      }
      return template
    }
  ```