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
  page2collection: function () {
    wx.navigateTo({
      url: '../collection/collection'
    })
  },
  myteachmore: function () {
    wx.showActionSheet({
      itemList: ['管理', '归档'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    });
  },
  tomycourse:function(){
    wx.navigateTo({
      url: '../mycourse/mycourse'
    })
  },
  mycoursemore: function () {
    wx.showActionSheet({
      itemList: ['反馈', '归档'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    });
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
