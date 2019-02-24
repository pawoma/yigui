// pages/acceptance/acceptance.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myName: app.globalData.myName,
    myAddress: app.globalData.myAddress,
    date:'2019-01-20',
    signatureSuccess:true,

    bar1: true,
    bar2: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //验收
  checkAccept:function(){
    wx.navigateTo({
      url: '/pages/acceptance/rule1/rule1',
    })
  },
  //质保卡
  warranty: function () {
    wx.navigateTo({
      url: '/pages/acceptance/rule2/rule2',
    })
  },
  goIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  goRepair: function () {
    wx.switchTab({
      url: '/pages/repair/repair',
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