export default {
  pages: [
    'pages/index/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#1F2847',
    navigationBarTitleText: '丰慧大脑',
    navigationBarTextStyle: 'white'
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
    'color': '#fff',
    'selectedColor': '#56abe4',
    'backgroundColor': '#1F2847',
    'borderStyle': 'black'
  },
}
