// 禁止email识别
    // <meta content="email=no" name="format-detection"/>

//禁止数字自动识别为电话号码，这个比较有用，因为一串数字在iphone上会显示成蓝色，样式加成别的颜色也是不生效的
    // <meta content="telephone=none" name="format-detection" />

// 禁止复制、选中文本
      // user-select: none;   css属性

// input 的placeholder会出现文本位置偏上的情况
      //  pc端设置lineanimation.height等于height能够对齐，而移动端仍然是偏上的，解决是设置line-height: normal