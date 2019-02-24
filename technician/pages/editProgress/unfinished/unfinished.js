Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderDetail: {
      title: '订单1',
      zhanting: '深圳香蜜湖红星美凯龙衣柜展厅',
      orderNo: 'KW00-SZ-000-000-00-0001',
      mingpaihao: '00001',
      name: '王先生',
      tel1: '13911111111',
      tel2: '13922222222',
      address: '深圳市福田区深南大道123号201室',
      date: '2019-2-22',
      status: 3
    },
    installDetail: {
      date: '2019-2-22',
      name: '李师傅',
      isDone: '是',
      reason: '发动机萨克雷今飞凯达撒',
      imageList: ['/images/thum.jpg', '/images/thum.jpg', '/images/thum.jpg']
    },

  },
  onSubmit(e) {
    console.log(e.detail)
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