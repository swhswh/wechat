const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resdate:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'https://www.cccqqf.top/teaIndex/calIndex?Date=2018-06-05&class=0',
      data:{
        calIndex: '2018-06-05',
        class: 0

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method:"POST",
      dataType:"json",
      success(res) {1
        console.log(res.data);
      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})