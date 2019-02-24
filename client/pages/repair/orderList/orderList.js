const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bar1: false,
    bar2: true,
    orderList: app.repairOrderList
  },

  selectOrder(e) {
    let id = e.target.dataset.id
    // 获取订单保修信息
    // app.selectedRepairOrder = []

    if (app.selectedRepairOrder) {

    }

    let url = app.selectedRepairOrder.repairList.length > 0 ? '/pages/repair/orderRepair/orderRepair' : '/pages/repair/firstAdd/firstAdd'
    wx.redirectTo({
      url,
    })
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