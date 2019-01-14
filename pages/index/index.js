//index.js
//获取应用实例
const app = getApp();
var sliderWidth = 112;
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabs: ["我教的课", "我听的课"],
    activeIndex:0,
    sliderOffset: 0,
    sliderLeft: 0,
  },
  //课件库函数
  page2courseware: function() {
    wx.navigateTo({
      url: '../courseware/courseware'
    })
  },

  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})
