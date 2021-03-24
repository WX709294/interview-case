## 生命周期函数
 - onload 页面加载，调用一次
 - onShow - 页面显示，每次打开页面都调用
 - onReady - 初次渲染完成，调用一次
 - onHide - 页面隐藏，当navigateTo或底部tab切换是调用
 - onUnload - 页面卸载，

## 小程序双向绑定和vue有什么区别
  - 小程序直接this.data是不可以同步到试图的，必须调用this.setData({})
  
## 小程序和vue写法区别
  - 循环遍历： 小程序是wx:for="list" vue是v-for="(iten, index) in list"
  - 调用data模型： 小程序是this.data.info  vue是this.info
  - 给模型赋值： 小程序 this.setData({a: 1}) vue是this.a = 1

## 小程序的优缺点
  - 优点
    - 无需下载
    - 打开速度快
    - 开发成本低
  - 缺点
    - 依托微信，不能开发后台管理功能
    - 大小限制2M内，不能打开超过5个层级的页面
  
## 如何实现下拉刷新
  - 先在app.json或page.json中配置enablePullDownRefresh:true
  - page里用onPullDownRefresh函数，在下拉刷新是执行
  - 在下拉函数执行时发起数据请求，请求返回后，调用wx.stopPullDownRefresh停止下拉刷新的状态
  
## bindTap和catchTap的区别
  - bindTap 不会阻止冒泡事件，catchTap阻止冒泡
  
