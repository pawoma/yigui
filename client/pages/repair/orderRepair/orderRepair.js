var app = getApp()

Page({

  /**
   * 页面的初始数据
   */

  data: {
    bar1: false,
    bar2: true,
    orderRepair: app.selectedRepairOrder
  },

  changeOrder(){
    wx.redirectTo({
      url: '/pages/repair/orderList/orderList',
    })
  },
  onViewDetail() {
    wx.redirectTo({
      url: '/pages/repair/detail/detail',
    })
  },
  onAddRepair() {
    wx.redirectTo({
      url: '/pages/repair/add/add',
    })
  },
  onEvaluate(){
    wx.redirectTo({
      url: '/pages/evaluation/evaluation',
    })
  },
  submit: function() {
    wx.showModal({
      title: '保修提交成功',
      content: '2个工作日内，会有经销商与您联系',
      confirmText: '返回首页',
      showCancel: false
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})