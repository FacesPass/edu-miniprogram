export default {
  pages: [
    'pages/index/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '邮小程学生成长指南',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      'iconPath': './assets/icon/未选中编程.png',
      'selectedIconPath': './assets/icon/编程.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      'iconPath': './assets/icon/我的.png',
      'selectedIconPath': './assets/icon/未选中我的.png',
      pagePath: 'pages/my/index',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
}
